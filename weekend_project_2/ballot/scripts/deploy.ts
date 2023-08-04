import { ethers } from "hardhat";
import { HDNodeWallet } from "ethers";
import * as dotenv from 'dotenv';
import { Ballot__factory } from "../typechain-types";

dotenv.config();

async function deployContract(wallet: HDNodeWallet, proposals: string[]) {
  const ballotFactory = new Ballot__factory(wallet);
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.encodeBytes32String)
  );
  await ballotContract.waitForDeployment();
  return ballotContract;
}

async function main() {
  // const proposals = process.argv.slice(2);
  const proposals = ["macos", "windows", "linux"];
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal ${index + 1}: ${element}`);
  });

  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
  const wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC ?? "", provider);
  const lastBlock = await provider.getBlock("latest");
  console.log({lastBlock});

  console.log(`Using address ${wallet.address}`);
  const balanceBN = await provider.getBalance(wallet.address);
  const balance = Number(ethers.formatUnits(balanceBN));
  console.log(`Wallet balance ${balance}`);
  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  const ballotContract = await deployContract(wallet, proposals);
  const address = await ballotContract.getAddress();
  console.log(`Deployed Ballot contract to ${address} address`);
  for (let index = 0; index < proposals.length; index++) {
    const proposal = await ballotContract.proposals(index);
    const name = ethers.decodeBytes32String(proposal.name)
    const { voteCount } = proposal;
    console.log({ name, voteCount })
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
