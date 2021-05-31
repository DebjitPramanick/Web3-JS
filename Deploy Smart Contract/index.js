const Web3 = require('web3')
const MyContract = require('./build/contracts/MyContract.json')
const HDWalletProvider = require('@truffle/hdwallet-provider')


const address = '0xC7881a3F4692E220D7471Fc59b1F8F31E04dd3Ef'
const privateKey = 'b8b9b3bae1976e8956fcda75209946620af893b32364269a8336f9eee8988449'

// Contract connected with web3

const init = async () => {
    const provider = new HDWalletProvider(
        privateKey,
        'https://ropsten.infura.io/v3/5a7448c7aded42dabcf949550bcea612' // After deploying this url is given
    )
    const web3 = new Web3(provider)
    let contract = new web3.eth.Contract(
        MyContract.abi
    );

    contract = await contract.deploy({data: MyContract.bytecode})
    .send({from: address});

    // Calling functions

    await contract.methods
    .setData(10)
    .send({from: address});

    const res = await contract.methods
    .getData()
    .call();

    console.log(res)
}

init()
