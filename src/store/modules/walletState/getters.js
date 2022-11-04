const getters = {
  getWeb3: (state) => {
    return state.web3
  },
  getUserAccount: (state) => {
    return state.userAccount
  },
  getInstance: (state) => {
    return state.instance
  },
  getContractABI: (state) => {
    return state.contractABI
  },
  getContractAddress: (state) => {
    return state.contractAddress
  },
}

export default getters
