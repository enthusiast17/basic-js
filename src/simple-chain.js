const CustomError = require("../extensions/custom-error");

const chainMaker = {
  state: [],
}

chainMaker.addLink = (value) => {
  chainMaker.state.push(value)
    return chainMaker
}

chainMaker.removeLink = (position) => {
  if (chainMaker.state[position - 1] === undefined) {
    chainMaker.state = []
    throw new Error()
  }
  chainMaker.state.splice(position - 1, 1)
  return chainMaker
}

chainMaker.reverseChain = () => {
  chainMaker.state.reverse()
  return chainMaker
}

chainMaker.finishChain = () => {
  const res = chainMaker.state.slice(1).reduce((res, element) => res + `~~( ${element} )`, `( ${chainMaker.state[0]} )`)
  chainMaker.state = []
  return res

}

module.exports = chainMaker;
