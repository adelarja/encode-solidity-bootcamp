# Homework week 3
# Commands 
```
yarn run deploy <prop1> <prop2> <prop3>  ...
yarn run vote <contract:string> <vote:number
yarn run giveRightToVote <contract:string> <address:string>
yarn run delegate <contract:string> <address:string>
yarn run winner:proposal <contract:string>
yarn run winner:name <contract:string> 
```
## Contract tokenizedBallot Address:

## Token Contract deployment

https://sepolia.etherscan.io/tx/0xf6184c626d48d958d90dfa72c80de4e0a487df2eae07e510eb95c4dc072c952f

## Token mints

https://sepolia.etherscan.io/tx/0xa4e46cd690837186321fe08d0e0ef931103139a2a6723cad6a8abdbf7b2ed804
https://sepolia.etherscan.io/tx/0x5c4cb4d96e2cf76f8cbd06bd8f48d72be4d2256017ddec420c42103b0261e4d9
https://sepolia.etherscan.io/tx/0x7ce21d42b82460de4bb0eea5d3ddec7c3ff37ebf0522835239dac4c3f6fac962
https://sepolia.etherscan.io/tx/0x722636c7e63744b264f89a93864321a36c56aa755b4de9503158732415c62a75
https://sepolia.etherscan.io/tx/0x67b43894513111dade1274943550215f07c1931406e561840abcf19fdbe35747
https://sepolia.etherscan.io/tx/0xd640b9e4da7ab06014919f18cfc72d647baa3faec41916443d33fb0d019d0bd3

## Grant role

https://sepolia.etherscan.io/tx/0xd555d1b944b373ae1ff7d64c8af9196c7d8e0d11871d75ba2cc7ce4c114540ba

## Delegate votes

https://sepolia.etherscan.io/tx/0x6d58c363700212e015d0788136ba8977fa0168f0500553ec9088784527e0619d
https://sepolia.etherscan.io/tx/0xd2c50c337a01f8d339805260d64fdafe583ce7131dd3721caa1d7b22d8a2d521

## Vote

The next transactions were done by the voters (including the chairman):

## Interesting thing to note

Adding `{ gasLimit: 50000 }` to the transaction calls allowed us to always register the transaction on the network. Without this parameter, the transaction was rejected before it was sent to the network, and the error appeared in the terminal.

As a result, the rejected transactions were not visible as evidence in the block explorer. After adding the gas limit, they were.

Here is an example about how we used it:

```typescript
await ballotContract.vote(proposal, { gasLimit: 50000 });
```

## Test
```
    Testing ERC20 Ballot
    Deployments
      ✔ myToken deployment
      ✔ TokenizedBallot deployment
    ERC20
      ✔ mint token
      ✔ transfer token
      ✔ delegate votes
      ✔ transfer votes
      ✔ past votes
    tokenized ballot
      ✔ all proposals
      testing votes
        ✔ voting power
        ✔ vote in one propose
        ✔ multiple votes
        ✔ voting power spent
        ✔ vote without token
      winner
        name
          ✔ default
          ✔ after vote
        proposals
          ✔ first proposal
          ✔ after vote
          ✔ random proposal
    access control
      check access
        ✔ minter role
        ✔ admin role
        ✔ has no role
      manege roles
        ✔ grant role
        ✔ revoke role
        ✔ renounce role
        ✔ unauthorized renounce

25 passining
```
