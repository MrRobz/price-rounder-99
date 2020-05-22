export const roundNumber = (number, differenceLimit) => {
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

