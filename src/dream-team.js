const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(typeof members === 'object' && members instanceof Array && members !== null)) return false
  return members.reduce((res, el) => (typeof el === 'string' && el !== '') ? res.push(el.replace(/\s/g, '')[0].toUpperCase()) && res : res, [])
                .sort()
                .join('')
};
