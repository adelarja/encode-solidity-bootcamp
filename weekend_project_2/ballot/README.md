# Homework week 2
# Commands 
```
yarn run deploy <prop1> <prop2> <prop3>  ...
yarn run vote <contract:string> <vote:number
yarn run giveRightToVote <contract:string> <address:string>
yarn run delegate <contract:string> <address:string>
yarn run winner:proposal <contract:string>
yarn run winner:name <contract:string> 
```
## Contract Address: 0xE380Db20c6D3c99199BDA9672C99965decc205a7

## Test
```
    Ballot
    when the contract is deployed
      ✔ has the provided proposals
      ✔ has zero votes for all proposals
      ✔ sets the deployer address as chairperson
      ✔ sets the voting weight for the chairperson as 1
    when the chairperson interacts with the giveRightToVote function in the contract
      ✔ gives right to vote for another address
      ✔ can not give right to vote for someone that has voted (44ms)
      ✔ can not give right to vote for someone that has already voting rights
    when the voter interacts with the vote function in the contract
      ✔ should register the vote
    when the voter interacts with the delegate function in the contract
      ✔ should transfer voting power
    when an account other than the chairperson interacts with the giveRightToVote function in the contract
      ✔ should revert
    when an account without right to vote interacts with the vote function in the contract
      ✔ should revert
    when an account without right to vote interacts with the delegate function in the contract
      ✔ should revert
    when someone interacts with the winningProposal function before any votes are cast
      ✔ should return 0
    when someone interacts with the winningProposal function after one vote is cast for the first proposal
      ✔ should return 0
    when someone interacts with the winnerName function before any votes are cast
      ✔ should return name of proposal 0
    when someone interacts with the winnerName function after one vote is cast for the first proposal
      ✔ should return name of proposal 0
    when someone interacts with the winningProposal function and winnerName after 5 random votes are cast for the proposals
      ✔ should return the name of the winner proposal (84ms)
  ### 17 passing (2s)
