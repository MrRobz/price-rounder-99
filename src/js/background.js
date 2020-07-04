'use strict';

chrome.runtime.onMessage.addListener(function(req, sender) {
  if ('enableExtension' in req) {
    chrome.pageAction.setTitle({tabId: sender.tab.id, title: "Price corrector" });
    chrome.pageAction.show(sender.tab.id);

    if (req.enableExtension === true) {
      chrome.pageAction.setIcon({
        tabId: sender.tab.id,
        path : {
          "16": "assets/price-corrector-16.png",
          "32": "assets/price-corrector-32.png",
          "48": "assets/price-corrector-48.png",
          "128": "assets/price-corrector-128.png",
        }
      })
    }
  } else if ('isCompatibleSite' in req) {
    if (!req.isCompatibleSite) {
      chrome.pageAction.setPopup({
        tabId: sender.tab.id,
        popup: './popup-non-compatable.html'
      })
    }
  }
});
