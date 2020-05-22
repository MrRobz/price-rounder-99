
import checkIfToEnableExtension from "../utils/checkIfToEnable.js";
import { roundNumber } from "../utils/rounder.js";
import config from "./config.js";

let siteName = window.location.origin;
let isCompatibleSite = checkIfToEnableExtension(siteName);
chrome.runtime.sendMessage({'enableExtension': isCompatibleSite });

let isExtensionEnabled;
let differenceLimit;

let isExtensionEnabledPromise = new Promise((resolve) => chrome.storage.sync.get(['isExtensionEnabled'], (result) => resolve(result.isExtensionEnabled)));
let differenceLimitPromise = new Promise((resolve) => chrome.storage.sync.get(['differenceLimit'], (result) => resolve(result.differenceLimit)));

async function main() {
  isExtensionEnabled = await isExtensionEnabledPromise;
  differenceLimit = await differenceLimitPromise;

  differenceLimit = differenceLimit || 4;  
  isExtensionEnabled = isExtensionEnabled != undefined ? isExtensionEnabled : true;
  
  if (isExtensionEnabled && isCompatibleSite) {
    let configObj = getConfigObj(siteName);

    let domElements = configObj.findDomElements(document);

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
      let numberString = (element.wholeText || '').trim().replace(/[^\.\d\s]/g, "");
      numberString = (numberString.match(/\d+(?:\d*[\.,]?\d*)*\d*/) || [])[0];
      if(numberString 
          &&!!parseFloat(numberString) 
          && !isNaN(numberString)
          && !element.wholeText.includes("%")) {
        let textContent = element.parentElement.textContent;
        let newValue = roundNumber(numberString, differenceLimit);

        if (parseFloat(numberString) !== parseFloat(newValue)) {
          let parentElement = element.parentElement;
          parentElement.innerHTML = parentElement.innerHTML.replace(/\d+(?:\d*[\.,]?\d*)*\d*/, newValue);

          parentElement.setAttribute('aria-label', textContent);
          parentElement.setAttribute('role', 'tooltip');
          parentElement.setAttribute('data-microtip-position', 'right');
        }
        
      }
    }
  });
}

const registerMutationObserver = (mutationObserver) => {
  mutationObserver.observe(document.body, {childList: true, subtree: true});
};

const mutationObserver = new MutationObserver(function (mutationRecords) {
  mutationObserver.disconnect();
  let configObj = getConfigObj(siteName);
  mutationRecords.forEach(function (mutationRecord) {
    if (mutationRecord.type === 'childList') {
      mutationRecord.addedNodes.forEach(function (node) {
        if(node.nodeName != 'SCRIPT' && /\d+/.test(node.textContent)) {
          let domElements = configObj.findDomElements(document);

          if (isExtensionEnabled && isCompatibleSite) {
            findNumberDoms(domElements);
          }
        }
      });
    }
  });
  registerMutationObserver(mutationObserver);
});

function getConfigObj(siteName) {
  for (key in config ) {
    if (siteName.includes(key)) {
      return config[key];
    }
  }
}