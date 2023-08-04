
import { ethers } from 'hardhat';
import { Ballot__factory } from "../../typechain-types";
import * as dotenv from 'dotenv';
import { getContractAt, getProposals } from "./common";
dotenv.config();

async function main() {
  const [contractAddress] = process.argv.slice(2);

  console.log(`Getting the winning proposal for ${contractAddress}`);

  const ballotContract = await getContractAt(contractAddress);
  const winningProposalIndex = await ballotContract.winningProposal();
  const winningProposal = await ballotContract.proposals(winningProposalIndex);

  console.log(`Winning proposal is -> Index: ${winningProposalIndex} Name: ${ethers.decodeBytes32String(winningProposal.name)} Votes: ${winningProposal.voteCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});