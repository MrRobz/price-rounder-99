export const setTooltipOnElement = (element, text, isExactElement, numberString) => {
  if (isExactElement) {
    setTooltip(element, text);
  } else {
    let properElement = findProperElment(element, numberString);
    setTooltip(properElement, text);
  }
  
}

function setTooltip(element, text) {
  element.setAttribute('aria-label', text);
  element.setAttribute('role', 'tooltip');
  element.setAttribute('data-microtip-position', 'right');
}

function findProperElment(element, numberString) {
  let properElement = element;

  walkDOM(element, (node) => {
    if ((((node||{}).textContent) ||'').replace(/[^\.\d\s]/g, "").includes(numberString)) {
      properElement = node;
    }
  });

  return properElement;
}

let walkDOM = (node,func) => {
  node = node.firstElementChild;
  func(node)
  while(node) {
    walkDOM(node,func);
    node = node.nextElementSibling;
  }
}; 