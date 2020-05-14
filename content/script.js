let siteName = window.location.origin

let isExtensionEnabled;
let differenceLimit;

let isExtensionEnabledPromise = new Promise((resolve) => chrome.storage.sync.get(['isExtensionEnabled'], (result) => resolve(result.isExtensionEnabled)));
let differenceLimitPromise = new Promise((resolve) => chrome.storage.sync.get(['differenceLimit'], (result) => resolve(result.differenceLimit)));

async function main() {
  isExtensionEnabled = await isExtensionEnabledPromise;
  differenceLimit = await differenceLimitPromise;

  differenceLimit = differenceLimit || 4;  
  isExtensionEnabled = isExtensionEnabled != undefined ? isExtensionEnabled : true;
  
  if (isExtensionEnabled) {    
    let domElements;
    if (origin.includes('amazon')) {
      domElements = document.querySelectorAll("[class*='price'],[id*='price']");
      // domElements = document.querySelectorAll(".a-price-whole");
    } else {
      // domElements = document.querySelectorAll("body *");
    }

    findNumberDoms(domElements);
  }

  registerMutationObserver(mutationObserver);
}

main();

function findNumberDoms(domElements = []) {
  domElements.forEach(element => {
    if (element.hasChildNodes()) {
      let elements = element.childNodes;
      findNumberDoms(elements)
    } else {
      let numberString = (element.wholeText || '').trim().replace(/[^.\d]/g, "");
      if(/\d+.?\d*\s?$/.test(element.wholeText) &&!!parseFloat(numberString) && !isNaN(numberString)) {
        let textContent = element.parentElement.textContent;
        let newValue = roundNumber(numberString, differenceLimit);

        if (parseFloat(numberString) !== parseFloat(newValue)) {
          let parentElement = element.parentElement;
          parentElement.textContent = textContent.replace(/\d+.?\d*/, newValue);

          parentElement.setAttribute('aria-label', textContent);
          parentElement.setAttribute('role', 'tooltip');
          parentElement.setAttribute('data-microtip-position', 'right');
        }
        
      }
    }
  });
}

function roundNumber(number, differenceLimit) {
  let origNumber = number;
  number = parseFloat(number);
  differenceLimit = parseFloat(differenceLimit);
  let nextWholeNumber = findNextWholeNumber(number);

  let difference  = nextWholeNumber - number;

  if (difference <= differenceLimit) {
    return returnNumberWithPointer(nextWholeNumber, origNumber);
  } else {
    return returnNumberWithPointer(number, origNumber);
  }
}

function returnNumberWithPointer(number, origNumber) {
  if (number == parseInt(origNumber)) {
    if (String(origNumber).includes('.')) {
      return number.toFixed(2);
    }
  }
  return number;
}

function findNextWholeNumber(number) {
  return Math.ceil(number / 10) * 10;
}

const registerMutationObserver = (mutationObserver) => {
  mutationObserver.observe(document.body, {childList: true, subtree: true});
};

const mutationObserver = new MutationObserver(function (mutationRecords) {
  mutationObserver.disconnect();
  mutationRecords.forEach(function (mutationRecord) {
    if (mutationRecord.type === 'childList') {
      mutationRecord.addedNodes.forEach(function (node) {
        if(node.nodeName != 'SCRIPT' && /\d+/.test(node.textContent)) {
          let domElements = node.querySelectorAll && node.querySelectorAll("[class*='price'],[id*='price']");

          if (isExtensionEnabled) {
            findNumberDoms(domElements);
          }
        }
      });
    }
  });
  registerMutationObserver(mutationObserver);
});