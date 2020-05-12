let siteName = window.location.origin

function findNumberDoms(domElements) {
  domElements.forEach(element => {
    if (element.hasChildNodes()) {
      let elements = element.childNodes;
      findNumberDoms(elements)
    } else {
      let numberString = element.textContent.trim().replace(/[\s,]/g, "");
      if(/\d+/.test(numberString)) {
        let currencySymbol = (/\d*([^0-9]*)\d*/.exec(numberString) || [[]])[1];

        let number = numberString.replace(currencySymbol, '');
        if(!isNaN(number)) {
          element.textContent = `${currencySymbol} ${roundNumber(parseFloat(number))}`;
        }
      }
    }
  });
}

function roundNumber(number) {
  if (parseInt(number * 100) % 10 >= 9) {
    number += .01;
  }
  if (parseInt(number * 10) % 10 >= 9) {
    number += .1;
  }
  if (parseInt(number) % 10 >= 9) {
    number += 1;
  }
  if (parseInt(number/10) % 10 >= 9) {
    number += 10;
  }
  return number.toFixed(2);
}

let domElements;
if (origin.includes('amazon')) {
  domElements = document.querySelectorAll("[class*='price'],[id*='price']");
} else {
  domElements = document.querySelectorAll("body *");
}

findNumberDoms(domElements);
