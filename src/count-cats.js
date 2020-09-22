const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.reduce((res, el) => el instanceof Array ? res + countCats(el) : el === '^^' ? res + 1 : res, 0)
};
