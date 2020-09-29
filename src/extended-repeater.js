const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+'
  if (options.additionSeparator === undefined) options.additionSeparator = '|'
  const addition = Array(options.additionRepeatTimes).fill(options.addition).map(() => options.addition === undefined ? "" : String(options.addition)).join(String(options.additionSeparator))
  return Array(options.repeatTimes).fill(str).map(() => `${str}${addition}`).join(String(options.separator))
};