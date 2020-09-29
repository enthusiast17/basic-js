const CustomError = require("../extensions/custom-error");

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'].map((element) => element.toUpperCase())

const toValidKey = (message, key) => {
  while (key.length < message.length) {
    key += key
  }
  return key.slice(0, message.length)
}

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error()
    let messages = [...message].filter((element) => /[a-zA-Z]/.test(element)).map((element) => element.toUpperCase())
    key = [...toValidKey(messages.join(''), key)].map((element) => element.toUpperCase())
    const encrypt = messages.map((element, index) => alphabet[((element.charCodeAt() - 65) + (key[index].charCodeAt() - 65)) % 26])
    const fill = [...message].forEach((element, index) => {
      if (!/[a-zA-Z]/.test(element)) encrypt.splice(index, 0, element)
    });
    
    if (!this.reverse) return encrypt.reverse().join('')
    return encrypt.join('')
  }
     
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error()
    let messages = [...message].filter((element) => /[a-zA-Z]/.test(element)).map((element) => element.toUpperCase())
    key = [...toValidKey(messages.join(''), key)].map((element) => element.toUpperCase())
    const encrypt = messages.map((element, index) => {
      if (/[a-zA-Z]/.test(element)) {
        const code = ((element.toUpperCase().charCodeAt(0) - 65) - (key[index].toUpperCase().charCodeAt(0) - 65))
        if (code < 0) {
          return alphabet[(26 + code) % 26]
        }
        return alphabet[code % 26]
      }
      return element
    })
    const fill = [...message].forEach((element, index) => {
      if (!/[a-zA-Z]/.test(element)) encrypt.splice(index, 0, element)
    });
    
    if (!this.reverse) return encrypt.reverse().join('')
    return encrypt.join('')  }
}

module.exports = VigenereCipheringMachine;
