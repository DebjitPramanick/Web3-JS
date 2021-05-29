const Web3 = require('web3') 
const MyContract = require('./build/contracts/MyContract.json')


// Contract connected with web3

const init = async () => {
    const web3 = new Web3('http://localhost:8545')

    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    // Calling a function
    contract.methods.getData().call()
    .then(res => console.log(res))
}

init()
