const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  return arr.reduce((res, element, index) => {
    if (element === '--double-next') res[index] = res[index + 1]
    else if (element === '--double-prev') res[index] = res[index - 1]
    else if (element === '--discard-next') [res[index + 1], res[index]] = [undefined, undefined]
    else if (element === '--discard-prev') [res[index - 1], res[index]] = [undefined, undefined]
    return res
  }, [...arr]).filter((element) => element !== undefined)
};
