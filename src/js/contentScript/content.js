
import checkIfToEnableExtension from "../utils/checkIfToEnable.js";
import config from "./config.js";

let siteName = window.location.origin;
let isCompatibleSite = checkIfToEnableExtension(siteName);

let isExtensionEnabled;
let differenceLimit;

let isExtensionEnabledPromise = new Promise((resolve) => chrome.storage.sync.get(['isExtensionEnabled'], (result) => resolve(result.isExtensionEnabled)));
let differenceLimitPromise = new Promise((resolve) => chrome.storage.sync.get(['differenceLimit'], (result) => resolve(result.differenceLimit)));

async function main() {
  isExtensionEnabled = await isExtensionEnabledPromise;
  differenceLimit = await differenceLimitPromise;

  differenceLimit = differenceLimit || 4;  
  isExtensionEnabled = isExtensionEnabled != undefined ? isExtensionEnabled : true;
  chrome.runtime.sendMessage({'enableExtension': isCompatibleSite && isExtensionEnabled });
  chrome.runtime.sendMessage({'isCompatibleSite': isCompatibleSite });
  
  if (isExtensionEnabled && isCompatibleSite) {
    let configObj = getConfigObj();

    configObj.findNumberDoms(document, differenceLimit);
    
    registerMutationObserver(mutationObserver);
  }
}

const registerMutationObserver = (mutationObserver) => {
  mutationObserver.observe(document.body, {childList: true, subtree: true});
};

const mutationObserver = new MutationObserver(function (mutationRecords) {
  mutationObserver.disconnect();
  let configObj = getConfigObj();
  mutationRecords.forEach(function (mutationRecord) {
    if (mutationRecord.type === 'childList') {
      mutationRecord.addedNodes.forEach(function (node) {
        if(!['SCRIPT', 'STYLE'].includes(node.nodeName) && /\d+/.test(node.textContent)) {
          configObj.findNumberDoms(node, differenceLimit);
        }
      });
    }
  });
  registerMutationObserver(mutationObserver);
});

main();

function getConfigObj() {
  for (key in config ) {
    if (window.location.origin.includes(key)) {
      return config[key];
    }
  }
}  
