const Web3 = require('web3')
const MyContract = require('./build/contracts/MyContract.json')


// Contract connected with web3

const init = async () => {
    const web3 = new Web3('http://localhost:7545')
    const id = await web3.eth.net.getId()
    const deployedNetwork = MyContract.networks[id]

    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );


    // To get all the addresses
    const addresses = await web3.eth.getAccounts()

    // Calling a function

    await contract.methods.sendEther().send({from: addresses[0], value: '100000'})

    const res = await contract.methods.functionCalled().call()
    console.log(res)

    // Send ether to smart contract
    await web3.eth.sendTransaction({
        from: addresses[0],
        to: contract.options.address,
        value: '10000'
    })

    const res2 = await contract.methods.functionCalled().call()
    console.log(res2)


    // Send ether to different address in wallet
    await web3.eth.sendTransaction({
        from: addresses[0],
        to: addresses[1],
        value: '10000'
    })

    const res3 = await contract.methods.functionCalled().call()
    console.log(res3)


}

init()
