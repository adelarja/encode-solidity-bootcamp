import { ethers } from "hardhat";
import { Ballot, Ballot__factory } from "../typechain-types";
import { HDNodeWallet } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

async function attachContract(wallet: HDNodeWallet, contractAddress: string) {
  const ballotFactory = new Ballot__factory(wallet);
  const ballotContract = ballotFactory.attach(contractAddress) as Ballot;
  return ballotContract;
}

const PROPOSALS_LENGTH = 3;

async function main() {
  const parameter = process.argv.slice(2);
  const contractAddress = parameter[0];
  const voteFor = parseInt(parameter[1], 10);

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

  console.log("Attaching to Ballot contract");
  const ballotContract = await attachContract(wallet, contractAddress);
  console.log("Proposals: ");
  for (let index = 0; index < PROPOSALS_LENGTH; index++) {
    const proposal = await ballotContract.proposals(index);
    const name = ethers.decodeBytes32String(proposal.name)
    const { voteCount } = proposal;
    console.log({ index, name, voteCount });
  }

  if (0 <= voteFor && voteFor < PROPOSALS_LENGTH) {
    console.log(`Voting for the ${voteFor} proposal`);
    await ballotContract.vote(voteFor);
    console.log("Done!")
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
