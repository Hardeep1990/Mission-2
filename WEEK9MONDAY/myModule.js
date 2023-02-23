function addNums(num1, num2) {
    return num1 + num2;
  }
  function subtractNums(num1, num2) {
    return num1 - num2;
  }
  function isNumber(num) {
    return Boolean(parseInt(num));
  }

  module.exports = {
    addNums,
    subtractNums,
    isNumber
  }