# Homework week 3
## Commands 
```
yarn run deploy <prop1> <prop2> <prop3>  ...
yarn run vote <contract:string> <vote:number>
yarn run giveRightToVote <contract:string> <address:string>
yarn run delegate <contract:string> <address:string>
yarn run winner:proposal <contract:string>
yarn run winner:name <contract:string>
yarn run checkVotingPower <contract:string>
yarn run viewProposals <contract:string> <porposalsCount:number>
```
## TokenizedBallot contract deployment:
https://sepolia.etherscan.io/address/0x591428406E8D504b6C3DbC3Fa52c84aD391734eb

## Token Contract deployment
https://sepolia.etherscan.io/tx/0xf6184c626d48d958d90dfa72c80de4e0a487df2eae07e510eb95c4dc072c952f

## Token mints
* https://sepolia.etherscan.io/tx/0xa4e46cd690837186321fe08d0e0ef931103139a2a6723cad6a8abdbf7b2ed804
* https://sepolia.etherscan.io/tx/0x5c4cb4d96e2cf76f8cbd06bd8f48d72be4d2256017ddec420c42103b0261e4d9
* https://sepolia.etherscan.io/tx/0x7ce21d42b82460de4bb0eea5d3ddec7c3ff37ebf0522835239dac4c3f6fac962
* https://sepolia.etherscan.io/tx/0x722636c7e63744b264f89a93864321a36c56aa755b4de9503158732415c62a75
* https://sepolia.etherscan.io/tx/0x67b43894513111dade1274943550215f07c1931406e561840abcf19fdbe35747
* https://sepolia.etherscan.io/tx/0xd640b9e4da7ab06014919f18cfc72d647baa3faec41916443d33fb0d019d0bd3

## Grant role
https://sepolia.etherscan.io/tx/0xd555d1b944b373ae1ff7d64c8af9196c7d8e0d11871d75ba2cc7ce4c114540ba

## Delegate votes
* https://sepolia.etherscan.io/tx/0x6d58c363700212e015d0788136ba8977fa0168f0500553ec9088784527e0619d
* https://sepolia.etherscan.io/tx/0xd2c50c337a01f8d339805260d64fdafe583ce7131dd3721caa1d7b22d8a2d521

## Vote
The next transactions were done by the voters:

* 100 votes to ubuntu by @adelarja: https://sepolia.etherscan.io/tx/0x451c4ee8cca5da3817a2a5fc5da12138e5e2e0e266a7a61ec9f6bee5d2fbba87
* 90 votes to ubuntu by @adelarja: https://sepolia.etherscan.io/tx/0x162f9b748f24bb698899f8d2955cf94cced6bbd9262fd6cb2fa6a5bf5005c5e4
* 100 votes to macos by @rayman1104: https://sepolia.etherscan.io/tx/0x8bb465ce3098db1ace6a0c318177cf8fecda217c915e4ef1ecf2e39751e03f67

## Vote reverted
* "trying to vote with more votes than you have" by @adelarja: https://sepolia.etherscan.io/tx/0x73faaaf71242161f755aaaaea3d823b929669f104b5f436af9d94d12c776f9df
* "trying to vote with more votes than you have" by @rayman1104: https://sepolia.etherscan.io/tx/0x877beca6586f8f06ca61212b6631e091cfdb4c18e4b3f16722c0452639e52999

## Voting results
```
$ yarn run viewProposals 0x591428406E8D504b6C3DbC3Fa52c84aD391734eb 3
Using address 0x77909026Dec54D7D05e6e7FC065C4A5623c48f51
Wallet balance 0.504544946314067
Viewing proposals for contract: 0x591428406E8D504b6C3DbC3Fa52c84aD391734eb
Proposal 0: macos with 100000000000000000000 votes
Proposal 1: windows with 0 votes
Proposal 2: ubuntu with 190000000000000000000 votes
```

```
$ yarn run winner:proposal 0x591428406E8D504b6C3DbC3Fa52c84aD391734eb
Getting the winning proposal for 0x591428406E8D504b6C3DbC3Fa52c84aD391734eb
Using address 0x77909026Dec54D7D05e6e7FC065C4A5623c48f51
Wallet balance 0.504544946314067
Winning proposal is proposal 2: ubuntu with 190000000000000000000 votes
```

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
