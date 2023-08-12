import * as dotenv from 'dotenv';
import { getTokenContractAt } from "./common";
dotenv.config();

async function main() {
  const [contractAddress, recipient] = process.argv.slice(2);
  console.log(`Granting role to ${recipient}...`);

  const tokenContract = await getTokenContractAt(contractAddress);
  const minterRole = await tokenContract.MINTER_ROLE();
  const mintTx = await tokenContract.grantRole(minterRole, recipient);
  await mintTx.wait();

  console.log("Role granted...");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});