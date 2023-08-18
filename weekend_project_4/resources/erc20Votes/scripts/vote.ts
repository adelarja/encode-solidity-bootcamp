import * as dotenv from 'dotenv';
import { getTokenizedBallotContractAt } from "./common";
import { ethers } from 'hardhat';
dotenv.config();

async function main() {
  const [contractAddress, proposal, amount] = process.argv.slice(2);

  console.log(`Voting on contract: ${contractAddress} for proposal ${proposal} `);

  const ballotContract = await getTokenizedBallotContractAt(contractAddress);
  await ballotContract.vote(proposal, ethers.parseUnits(amount));
  
  console.log("Voted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});