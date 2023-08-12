import * as dotenv from 'dotenv';
import { getTokenizedBallotContractAt } from "./common";
dotenv.config();

async function main() {
  const [contractAddress, proposal, amount] = process.argv.slice(2);

  console.log(`Voting on contract: ${contractAddress} for proposal ${proposal} `);

  const ballotContract = await getTokenizedBallotContractAt(contractAddress);
  await ballotContract.vote(proposal, amount, {gasLimit: 50000});
  
  console.log("Voted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});