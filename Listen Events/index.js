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

    // Calling an event

    await contract.methods.emitEvent('hey').send({ from: addresses[0] })
    await contract.methods.emitEvent('hey debjit').send({ from: addresses[0] })

    const results = await contract.getPastEvents(
        'MyEvent',
        {
            filter: {
                value: 'hey debjit' // This will return only the events whose value is 'hey'
            },
            fromBlock: 30
        }
    )

    console.log(results)
}

init()
