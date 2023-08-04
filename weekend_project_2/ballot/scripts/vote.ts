import * as dotenv from 'dotenv';
import { getContractAt } from "./common";
dotenv.config();

async function main() {
  const [contractAddres, proposal] = process.argv.slice(2);

  console.log(`Voting on contract: ${contractAddres} for proposal ${proposal}`);

  const ballotContract = await getContractAt(contractAddres);
  ballotContract.vote(proposal);
  
  console.log("Voted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});