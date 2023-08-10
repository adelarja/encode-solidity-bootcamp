import * as dotenv from 'dotenv';
import { deployTokenizedBallotContract } from "./common";
dotenv.config();

async function main() {
  console.log("Deploying Ballot contract");

  const tokenizedBallotContract = await deployTokenizedBallotContract();
  
  const address = await tokenizedBallotContract.getAddress();
  console.log(`Contract deployed at address ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});