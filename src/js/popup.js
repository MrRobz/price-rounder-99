'use strict';

let differenceLimitInput = document.querySelector('#differenceLimitInput') || {};
let pauseBtn = document.querySelector('#pauseBtn') || {};
let isActive;

chrome.storage.sync.get(['differenceLimit'], (result) => {
  updateExamples(result.differenceLimit);
});


differenceLimitInput.onchange = function(event) {
  let value = event.target.value;
  chrome.storage.sync.set({
    'differenceLimit': value
  });
  updateExamples(value);
  showRefresh();
}

chrome.storage.sync.get(['isExtensionEnabled'], ({ isExtensionEnabled }) => {
  updateActiveState(isExtensionEnabled);
  isActive = isExtensionEnabled;
});

chrome.storage.sync.get(['differenceLimit'], ({ differenceLimit }) => {
  differenceLimitInput.value = differenceLimit || 4;
});


pauseBtn.onclick = function() {
  isActive = !isActive;
  chrome.storage.sync.set({
    'isExtensionEnabled': isActive
  });
  updateActiveState(isActive);
  showRefresh();
}

function updateExamples(differenceLimit) {
  [1,2,3,4,5,6].forEach(no => {
    let selector = `#example${no}`;
    let element = document.querySelector(selector);

    let inputNo = parseFloat(element.querySelector("[name=input]").textContent.replace(/[^.\d]/, ''));
    let outputNo = roundNumber(inputNo, differenceLimit);

    element.querySelector("[name=output]").textContent = `$${outputNo}`;

    if (inputNo !== outputNo) {
      element.querySelector("[name=output]").classList.add("strong");
    } else {
      element.querySelector("[name=output]").classList.remove("strong");
    }
  })
}

function roundNumber(number, differenceLimit) {
  differenceLimit = parseFloat(differenceLimit);
  let nextWholeNumber = findNextWholeNumber(number);

  let difference  = nextWholeNumber - number;

  if (difference <= differenceLimit) {
    return nextWholeNumber;
  } else {
    return number;
  }
}

function findNextWholeNumber(number) {
  return Math.ceil(number / 10) * 10;
}

function updateActiveState(state) {
  let pauseElemet = document.querySelector("#pauseBtn");
  if (state) {
    pauseElemet.textContent = "Pause";
  } else {
    pauseElemet.textContent = "Resume";
  }
}

function showRefresh() {
  document.querySelector("#contentChangedInfo").classList.remove("hide");
}