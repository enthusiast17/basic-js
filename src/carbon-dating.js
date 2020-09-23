const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false
  const N = parseFloat(sampleActivity)
  if (isNaN(N)) return false
  const logN0DivideN = Math.log2(MODERN_ACTIVITY / N) / Math.log2(Math.E)
  const age = Math.ceil((logN0DivideN) / (0.693 / HALF_LIFE_PERIOD))
  return age > 0 && isFinite(age)
};
