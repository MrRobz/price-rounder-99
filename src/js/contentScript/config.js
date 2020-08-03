import { roundNumber } from "../utils/rounder.js";
import { setTooltipOnElement } from "../utils/tooltip.js"
import { getAmazonConfig } from "../utils/amazon-configs";

const config = {
  'amazon': {
    findNumberDoms: (rootElement, differenceLimit) => {
      let amazonConfig = getAmazonConfig(window.location.hostname.replace("www.amazon.", ""));
      
      let numberFormating = amazonConfig.locale ? new Intl.NumberFormat(amazonConfig.locale) : ({ format: (no) => no });

      walkDOM(rootElement, (node) => {
        if (node.textContent.includes(amazonConfig.currency)) {
          let numberString = node.textContent.trim().replace(/[^\.\d\s]/g, "");
          numberString = (numberString.match(amazonConfig.regex || /\d+\.?\d*/g)||[])[0];

          if(numberString && !!parseFloat(numberString) && !isNaN(numberString)) {
              let textContent = node.textContent;
              let newValue = roundNumber(numberString, differenceLimit);

              if (parseFloat(numberString) !== parseFloat(newValue)) {
                updateSitePriceDom('amazon', node, numberFormating.format(newValue));

                node = node.querySelector("#priceblock_ourprice") || node;
                setTooltipOnElement(node, textContent.trim());
              }
            }
        }
      }, { eagarCheck: false });
    },
    updatePriceDom: (node, priceValue) => {
      let amazonConfig = getAmazonConfig(window.location.hostname.replace("www.amazon.", ""));

      let textMatch = (node.textContent.match(amazonConfig.regex || /\d+(?:\d*[\.,]?\d*)*/g)||[])[0];
      if (node.innerHTML.includes(textMatch)) {
        node.innerHTML = node.innerHTML.replace(textMatch, priceValue);
      } else {
        let priceTextNode = node.querySelector('.a-price-whole');
        priceTextNode = !priceTextNode ? (node.querySelector('ppnn') || {}).parentElement : priceTextNode;
        let priceFractionTextNode = node.querySelector('.a-price-fraction');
        if (priceTextNode) {
          if (priceTextNode.textContent.includes(amazonConfig.currency)) {
            priceValue = amazonConfig.currency + priceValue;
          }
          priceTextNode.textContent = priceValue;
          priceFractionTextNode ? priceFractionTextNode.textContent = "00" : '';
        }
      }
    }
  },
  'flipkart': {
    findNumberDoms: (rootElement, differenceLimit) => {
      defaultWalkAndReplace(rootElement, differenceLimit, '₹', new Intl.NumberFormat('en-IN'), {
        eagarCheck: true
      });
    }
  },
  'myntra': {
    findNumberDoms: (rootElement, differenceLimit) => {
      let numberFormat = {
        format: (number) => number
      }
      defaultWalkAndReplace(rootElement, differenceLimit, 'Rs.', numberFormat, {
        regex: /[^\d\s]/g,
        domUpdateRegex: /[^\d\s]/g,
        eagarCheck: true
      });
    }
  },
  'snapdeal': {
    findNumberDoms: (rootElement, differenceLimit) => {
      defaultWalkAndReplace(rootElement, differenceLimit, /Rs\.?/, new Intl.NumberFormat('en-IN'), {
        regex: /[^\d\s]/g,
        domUpdateRegex: /[^,\d\s]/g,
        eagarCheck: false
      });
    }
  },
  'ebay': {
    findNumberDoms: (rootElement, differenceLimit) => {
      defaultWalkAndReplace(rootElement, differenceLimit, /INR|US/, new Intl.NumberFormat('en'), {
        domUpdateRegex: /[^,\.\d\s]/g,
        eagarCheck: true
      });
    }
  }
}

const walkDOM = function(node, func, options) {
  node = node.firstElementChild;
  while(node) {
    let matches = containsNumber(node.textContent);
    if (matches.length > 1) {
      walkDOM(node, func, options);
    } else if (matches.length === 1) {
      if (options.eagarCheck && node.querySelectorAll('*').length >= 1) {
        walkDOM(node, func, options);
      } else {
        func(node);
      }
    }
    node = node.nextElementSibling;
  }
};

function containsNumber(text) {
  text = text || ""
  return text.match(/\d+(?:\d*[\.,]?\d*)*\d*/g) || []
}

function updateSitePriceDom(siteName, node, priceValue, options) {
  let fn = (config[siteName] || {}).updatePriceDom;

  if (fn) {
    fn(node, priceValue)
  } else {
    // let regex = options.domUpdateRegex || /[^,\.\d\s]/g
    // let textMatch = node.textContent.replace(regex, "").trim();

    let textMatch = (node.textContent.match(/\d+(?:\d*[\.,]?\d*)*/g)||[])[0];
    if (node.innerHTML.includes(textMatch)) {
      node.innerHTML = node.innerHTML.replace(textMatch, priceValue);
    }
  }
}

function defaultWalkAndReplace(rootElement, differenceLimit, priceSymbol, numberFormating, options = {}) {
  walkDOM(rootElement, (node) => {
    if (typeof priceSymbol === 'string')
          priceSymbol = new RegExp(priceSymbol);
    if (priceSymbol.test(node.textContent)) {
      let regex = options.regex || /[^\.\d\s]/g
      let numberString = node.textContent.trim().replace(regex, "");
      numberString = (numberString.match(/\d+\.?\d*/g)||[])[0];

      if(numberString && !!parseFloat(numberString) && !isNaN(numberString)) {
          let textContent = node.textContent;
          let newValue = roundNumber(numberString, differenceLimit);

          if (parseFloat(numberString) !== parseFloat(newValue)) {

            updateSitePriceDom('', node, numberFormating.format(newValue), options);
            setTooltipOnElement(node, textContent);
          }
        }
    }
  }, options);
}

export default config;