const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipPulled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipPushed","type":"event"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addMultipleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investedCapPrivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investedCapPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"uint256","name":"privateInvested","type":"uint256"},{"internalType":"uint256","name":"publicInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxinvestCapPrivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxinvestCapPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxinvestPrivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxinvestPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mininvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nrt","outputs":[{"internalType":"contract NRT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numWhitelisted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pullManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"pushManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceManagement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_launchToken","type":"address"}],"name":"setLaunchToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxinvestPrivate","type":"uint256"}],"name":"setMaxInvestPrivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxinvestPublic","type":"uint256"}],"name":"setMaxInvestPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxinvestCapPrivate","type":"uint256"}],"name":"setMaxinvestCapPrivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxinvestCapPublic","type":"uint256"}],"name":"setMaxinvestCapPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_addr","type":"address"}],"name":"setWithdrawAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleWhitelistSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalPublicPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWhitelistPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalissued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalraised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalredeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTreasuryByTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const contractaddress = '0x2BAe8398D7B33eCd8EcdC44f6d8Be27cC82BE233';
const busdaddress = '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'
const busdABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let user;let approve_status = 0;
let useraddress;
let web3 = new Web3(Web3.givenProvider);
let connect_key = 0;
const { ethereum } = window 
let reddemEnabled;

// please change this value when deploy on main net

let BSC_CHAINID = 97;


async function check_approve(){
    let contract1 = await new web3.eth.Contract(busdABI, busdaddress)
    let allowance = await contract1.methods.allowance(useraddress,contractaddress).call()
    if (allowance<=100)
       {
            approve_status = 0;
            document.getElementById('button_name').innerHTML ="Approve"
       }
}
async function login(){
    if (!ethereum) {
        document.getElementById('alert_text').innerHTML = 'please install metamask'
        document.getElementById('alert').style.display='block'
    }
    // try {
    //  const accounts = await ethereum.request({
    //    method: "eth_requestAccounts",
    //  });
     const account = await window.ethereum.send('eth_requestAccounts');
     useraddress = account.result[0]

     let chainId = await web3.eth.getChainId()
     let contract = await new web3.eth.Contract(contractABI, contractaddress)
     chainId == BSC_CHAINID ? whitelisted = await contract.methods.whitelisted(useraddress).call():''
     ethereum.on("accountsChanged", (accounts) => {
        
        useraddress = accounts[0]
        const str = String(useraddress).substring(0, 6) +
        '...' +
        String(useraddress).substring(38)
        connect_key = 1;
        document.getElementById('connect').innerHTML = str;
        getStats();
        getAllowance();
        check_approve();
      });

      ethereum.on("chainChanged", async (chain_Id) => {
        console.log("chain changed");
        
        chainId = chain_Id;
        
      });
      
     if (connect_key == 0){
         connect_key =1;
        if (chainId != BSC_CHAINID )
        {
            document.getElementById('alert_text').innerHTML = 'switch to bsc'
            document.getElementById('alert').style.display='block'
            
        }
        else if (!whitelisted)
        {
            document.getElementById('alert_text').innerHTML = 'Your wallet is not whitelisted!'
            document.getElementById('alert').style.display='block';
            const str = String(useraddress).substring(0, 6) +
            '...' +
            String(useraddress).substring(38)
            document.getElementById('connect').innerHTML = str;
            connect_key = 1;
            document.getElementById('info2').style.display = 'none';
            document.getElementById('info1').style.display = 'block'
            getStats();
            getAllowance();
            check_approve();
        }
        else {
            const str = String(useraddress).substring(0, 6) +
            '...' +
            String(useraddress).substring(38)
            connect_key = 1;
            document.getElementById('connect').innerHTML = str;
            document.getElementById('info2').style.display = 'none';
            document.getElementById('info1').style.display = 'block'
            getStats();
            getAllowance();
            check_approve();
        }
        
     }
     else if (connect_key ==1 ){
         
         connect_key = 0;
         document.getElementById('connect').innerHTML = 'connect';
         document.getElementById('info2').style.display = 'block';
         document.getElementById('info1').style.display = 'none';
        
          
     }
     else {
        await web3.currentProvider.request({
            method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x61' }],
            })
            .then(function(){
                const str = String(useraddress).substring(0, 6) +
            '...' +
            String(useraddress).substring(38)
            connect_key = 1;
            document.getElementById('connect').innerHTML = str;
            document.getElementById('info2').style.display = 'none';
            document.getElementById('info1').style.display = 'block'
            getStats();
            getAllowance();
            })
            

     }

    
}
async function redeem(){
    if (reddemEnabled){
        let contract = await new web3.eth.Contract(contractABI, contractaddress)
        web3.eth
        .sendTransaction({
        from:  useraddress,
        to: contractaddress,
        data: contract.methods
            .redeem(
            )
            .encodeABI(),
        })
    }
}
async function getStats(){
    // const balances = await Moralis.Web3API.account.getTokenBalances({chain: 'bsc'});
    // console.log(balances);
    let contract = await new web3.eth.Contract(busdABI, busdaddress)
    balanceOf = await contract.methods.balanceOf(useraddress).call()
    
    const etherValue = Web3.utils.fromWei(balanceOf, 'ether');
    document.getElementById('metamask_balance').innerHTML=Number(etherValue).toFixed(3);
    console.log(etherValue)
}

async function getAllowance(){
    let options = {
        chain: "bsc testnet",
        address: contractaddress,
        function_name: "maxinvestPrivate",
        abi: contractABI
      };

    let allowance
    let contract = await new web3.eth.Contract(contractABI, contractaddress)
    
    let sale_status = await contract.methods.whitelistSale().call()
    if (sale_status)
          document.getElementById('button_name').classList.add('active')
          
    let maxinvestPrivate = await contract.methods.maxinvestPrivate().call()
    investorInfoMap = await contract.methods.investorInfoMap(useraddress).call()
    let privateInvested = investorInfoMap.privateInvested
    maxinvestPrivate = Web3.utils.fromWei(maxinvestPrivate, 'ether')
    privateInvested = Web3.utils.fromWei(privateInvested, 'ether')
    allowance = maxinvestPrivate-privateInvested
    document.getElementById('allowance').innerHTML = Number(allowance).toFixed(3);

    amountInvested = investorInfoMap.amountInvested;
    amountInvested =  Web3.utils.fromWei(amountInvested, 'ether')
    document.getElementById('amountInvested').innerHTML = Number(amountInvested).toFixed(3);

    claimed = investorInfoMap.claimed
    reddemEnabled = await contract.methods.redeemEnabled().call()
    if (!reddemEnabled)
        document.getElementById('claimed').innerHTML = 'Redeem not enabled'
    else if (!claimed)
        document.getElementById('claimed').innerHTML = 'Redeem enable'
    else
    document.getElementById('claimed').innerHTML = 'Alreday redeemed'

    let whitelistPrice = await contract.methods.whitelistPrice().call()
    whitelistPrice = Web3.utils.fromWei(whitelistPrice, 'ether')
    let token_receive = privateInvested*whitelistPrice
    let globalPrice = 1/whitelistPrice;
    document.getElementById('token_receive').innerHTML = token_receive
    document.getElementById('globalPrice').innerHTML = Number(globalPrice).toFixed(3)

    let totalWhitelistPurchased = await contract.methods.totalWhitelistPurchased().call()
    totalWhitelistPurchased = Web3.utils.fromWei(totalWhitelistPurchased, 'ether')
    document.getElementById('totalWhitelistPurchased').innerHTML = Number(totalWhitelistPurchased).toFixed(3);
    
    let maxinvestCapPrivate = await contract.methods.maxinvestCapPrivate().call()
    maxinvestCapPrivate = Web3.utils.fromWei(maxinvestCapPrivate, 'ether')
    document.getElementById('maxinvestCapPrivate').innerHTML = maxinvestCapPrivate
   
}
async function max(){

    let contract = await new web3.eth.Contract(busdABI, busdaddress)
    balanceOf = await contract.methods.balanceOf(useraddress).call()
    const etherValue = Web3.utils.fromWei(balanceOf, 'ether');
    document.getElementById('max').value = etherValue;
}

function handleAccountsChanged(accounts) {
    console.log(accounts);

    if (accounts.length === 0) {
        
    } else if (accounts[0] !== useraddress) {
        currentAccount = accounts[0];
        
    }
}
async function buy_token(){
    const name = document.getElementById('button_name').innerHTML;
    let amount = document.getElementById('max').value;
    let contract = await new web3.eth.Contract(contractABI, contractaddress)
    let sale_status = await contract.methods.whitelistSale().call()
    
    // amount = Number(amount)
    amount?amount =  web3.utils.toWei(amount):0;
    console.log(amount)
    await window.ethereum.enable();
    
    contract1 = await new web3.eth.Contract(busdABI, busdaddress)
    balanceOf = await contract1.methods.balanceOf(useraddress).call()
    const etherValue = Web3.utils.toWei('1000', 'ether');
    let allowance = await contract1.methods.allowance(useraddress,contractaddress).call()
    allowance = Web3.utils.fromWei(allowance, 'ether')
    if (allowance > 10)
        approve_status = 1;
    else
        approve_status = 0; 
    if ( approve_status == 1)
        {
            web3.eth
            .sendTransaction({
            from:  window.ethereum.selectedAddress,
            to: contractaddress,
            data: contract.methods
                .invest(
                    amount
                )
                .encodeABI(),
            })
        }
    else if (approve_status == 0)
        {
            debugger
            let approve= await web3.eth
                .sendTransaction({
                from:  useraddress,
                to: busdaddress,
                data: contract1.methods
                    .approve(
                        contractaddress,
                        etherValue
                    )
                    .encodeABI(),
                })
        
                approve_status = 1;
                document.getElementById('button_name').innerHTML= 'Buy $Token'
        }
    else if (sale_status)
        {
            let contract1 = await new web3.eth.Contract(busdABI, busdaddress)
            //await contract1.methods.approve(contractaddress, amount).call() 
            await web3.eth
                .sendTransaction({
                from:  window.ethereum.selectedAddress,
                to: busdaddress,
                data: contract1.methods
                    .approve(
                        contractaddress,
                        amount
                    )
                    .encodeABI(),
                })
            web3.eth
            .sendTransaction({
            from:  window.ethereum.selectedAddress,
            to: contractaddress,
            data: contract.methods
                .invest(
                    amount
                )
                .encodeABI(),
            })
        }
    else{
        document.getElementById('alert_text').innerHTML = 'sale status false'
        document.getElementById('alert').style.display='block'
        document.getElementById('button_name').style.opacity = '0.5'
    }

}

