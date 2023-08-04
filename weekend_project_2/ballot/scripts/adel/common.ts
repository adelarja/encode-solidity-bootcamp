import { ethers } from "ethers";
import { Ballot, Ballot__factory } from "../../typechain-types";
import * as dotenv from 'dotenv';
dotenv.config();

export async function getWallet() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  
    console.log(`Using address ${wallet.address}`);
  
    const balanceBN = await provider.getBalance(wallet.address);
    const balance = Number(ethers.formatUnits(balanceBN));
  
    console.log(`Wallet balance ${balance}`);
  
    if (balance < 0.01) {
  
      throw new Error("Not enough ether");
  
    }
  
    return wallet;
}
  
export function getProposals() {
    const proposals = process.argv.slice(2);
  
    if (proposals.length < 2) {
  
      throw new Error("Need at least 2 proposals.");
  
    }
  
    return proposals;
}

export async function deployContract() {
  const proposals = getProposals();
  const wallet = await getWallet();

  const ballotFactory = new Ballot__factory(wallet);
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.encodeBytes32String)
  );
  await ballotContract.waitForDeployment();
  return ballotContract;
}

export async function getContractAt(contractAddress: string) {
  const wallet = await getWallet();

  const ballotFactory = new Ballot__factory(wallet);
  const ballotContract = ballotFactory.attach(contractAddress) as Ballot;
  return ballotContract;
}