# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts


```
## Test
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
