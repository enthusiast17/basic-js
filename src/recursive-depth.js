const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return arr.reduce((res, element, index) => {
      if (element instanceof Array) {
          return Math.max(res, this.calculateDepth(element, depth + 1))
      }
      return res
    }, depth)
  }
};