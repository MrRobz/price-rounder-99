'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.runtime.onMessage.addListener(function(req, sender) {
    chrome.pageAction.show(sender.tab.id);
    chrome.pageAction.setTitle({tabId: sender.tab.id, title: req.address});
  });
});
