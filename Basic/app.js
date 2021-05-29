const Web3 = require('web3') 

const web3 = new Web3('http://localhost:8545')

// Connect to the blockchain

web3.eth.getBlockNumber()
.then((r) => console.log(`Block number is: ${r}`))