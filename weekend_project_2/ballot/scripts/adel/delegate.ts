
import { ethers } from "ethers";
import { Ballot__factory } from "../../typechain-types";
import * as dotenv from 'dotenv';
import { getContractAt } from "./common";
dotenv.config();

async function main() {
  const [contractAddress, to] = process.argv.slice(2);

  console.log(`Delegating on contract: ${contractAddress} for proposal ${to}`);

  const ballotContract = await getContractAt(contractAddress);
  ballotContract.delegate(to);
  
  console.log("Delegated!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});