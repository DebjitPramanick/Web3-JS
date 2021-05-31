const Web3 = require('web3')
const MyContract = require('./build/contracts/MyContract.json')

// Contract connected with web3

const init = async () => {
    const web3 = window.web3 // Connecting MetaMask's provider
    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]

    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    // To get all the addresses
    const addresses = await web3.eth.getAccounts();

    // Calling a function

    contract.methods.setData(10).send(
        { from: addresses[0] }
    ).then(res => res)

    contract.methods.getData().call()
    .then(res => console.log(res))
}

init()
