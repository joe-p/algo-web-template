import algosdk from 'algosdk'
// import { MyAlgoSession } from './wallets/myalgo'
// import { WalletConnectSession } from './wallets/walletconnect'
// import { AlgoSignerSession } from './wallets/algosigner'

console.log(`Generated Algorand account: ${algosdk.generateAccount().addr}`)
