import * as dotenv from 'dotenv';
import { getTokenizedBallotContractAt } from "./common";
dotenv.config();

async function main() {
  const [contractAddres, proposal, amount] = process.argv.slice(2);

  console.log(`Voting on contract: ${contractAddres} for proposal ${proposal} `);

  const ballotContract = await getTokenizedBallotContractAt(contractAddres);
  await ballotContract.vote(proposal, amount, {gasLimit: 50000});
  
  console.log("Voted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});