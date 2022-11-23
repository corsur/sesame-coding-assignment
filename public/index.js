const web3 = new Web3("https://mainnet.infura.io/v3/23e42bffc6a04ed79aa2c9fa01dd2fa9");


window.ethereum.enable().catch(error => {
    // User denied account access
    console.log(error)
})

const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];
console.log(account)


window.localStorage.setItem("account", JSON.stringify(account));
