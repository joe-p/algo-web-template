import algosdk from 'algosdk'

console.log(`Generated Algorand account: ${algosdk.generateAccount().addr}`)
