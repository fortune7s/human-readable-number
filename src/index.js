module.exports = function toReadable (number) {
  const unitOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'];
  const unitTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
  'ninety'];
  const numberStr = number.toString();
   if(number === 0) return 'zero';
   if(number < 20) return unitOne[number];
   if(numberStr.length === 2) return `${unitTwo[numberStr[0]]} ${unitOne[numberStr[1]]}`;
   if (numberStr.length === 3) {
    if (numberStr[1] === 0 && numberStr[2] === 0) {
      return `${unitOne[numberStr[0]]}hundred`;
    }
    else if ((+(numberStr[1] + numberStr[2])) < 20) {
      return `${unitOne[numberStr[0]]} hundred ${unitOne[(+(numberStr[1] + numberStr[2]))]}`;
    } else {
      return`${unitOne[numberStr[0]]} hundred ${unitTwo[numberStr[1]]} ${unitOne[numberStr[2]]}`;

    }

  }
}
