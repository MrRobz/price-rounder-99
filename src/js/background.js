'use strict';
chrome.runtime.onInstalled.addListener(function() {
  chrome.runtime.onMessage.addListener(function(req, sender) {
    if ('enableExtension' in req) {
      if (req.enableExtension === true) {
        chrome.pageAction.setTitle({tabId: sender.tab.id, title: "hello world" });
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setIcon({
          tabId: sender.tab.id,
          path : {
            "16": "assets/price-corrector-16.png",
            "32": "assets/price-corrector-32.png",
            "48": "assets/price-corrector-48.png",
            "128": "assets/price-corrector-128.png",
          }
        })
      } else {
        chrome.pageAction.hide(sender.tab.id);
      }
    } 
  });
});
