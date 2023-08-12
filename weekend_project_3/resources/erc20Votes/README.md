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
## Contract tokenizedBallot Address: 0x1CBfD193458179C3D8B90E840392FaCfC7A5Ebc4

## Contract deployment

https://sepolia.etherscan.io/tx/0xf8676e2c6b1a57642ddadf201ad614b7d3e80ff52157ed133639dabf32abbf4d

## Give right to vote

The next transactions were done by the chairman:

https://sepolia.etherscan.io/tx/0x8977dcebd1ecfbf9df0aa3102de8d1e7d50ab726fa711a1216cbd163c95b05bf
https://sepolia.etherscan.io/tx/0x4c05881b01df65a531b10f07f79d4ff49428c3c3db9dfe3d33dbb8d6381e1dd6
https://sepolia.etherscan.io/tx/0xd258ad75b6d641d0b7b050cbba4ae701cb86820948ff1e864bd71ca6e6e77956
https://sepolia.etherscan.io/tx/0x3d2e0bf2da6a05abc836200b5bcda9b5c86ac517cfb7aa6180818714df1fd789

## Vote

The next transactions were done by the voters (including the chairman):

https://sepolia.etherscan.io/tx/0x7f3a6d1ba87641f2301be080a558a22c44dd55c2f64bbcfdf7b0f4172d9ff9ea
https://sepolia.etherscan.io/tx/0x5055dd0eb40979d642fc4a149d900699c065def1cd7c7d3b638d6413d15de40d
https://sepolia.etherscan.io/tx/0x408526b8a76d762ccd62a3e50d368f70486d74ef1d1ef8e86ae6f07755ce1534

## Rejected give right to vote:

This transaction was made by a participant who was not the chairman. As expected, it was rejected:

https://sepolia.etherscan.io/tx/0x0d00d1b20901fe16e55107da6bed517696cfb0bddce53ca6329990f80586e579

## Rejected vote: already voted.

This transaction was made by a participant who had already voted. As expected, it was rejected:

https://sepolia.etherscan.io/tx/0xe1f7e3f5e454027790a6f55417ee0707fed75c9f0077b90cf70172eac5c4e19b

## Rejected delegate vote: already voted.

This transaction was made by a participant who had already voted. As expected, it was rejected:

https://sepolia.etherscan.io/tx/0x75ff7d704b3671156d13dc30f4e768e07f7cd6edd29c7b831a02cb6e0ece23cb

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
