import algosdk from 'algosdk'
// import { MyAlgoSession } from './wallets/myalgo'

console.log(`Generated Algorand account: ${algosdk.generateAccount().addr}`)
