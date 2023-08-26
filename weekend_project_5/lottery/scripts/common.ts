import { ethers } from "ethers";
import { Lottery, LotteryToken__factory, Lottery__factory } from "../typechain-types";
import * as dotenv from 'dotenv';
dotenv.config();

const TOKEN_RATIO = 1n;
const BET_PRICE = 1;
const BET_FEE = 0.2;

const loadWallet = (provider: ethers.JsonRpcProvider) => {
  if (process.env.PRIVATE_KEY != undefined) {
    return new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  }

  if (process.env.MNEMONIC != undefined) {
    if (typeof process.env.MNEMONIC === 'string' && process.env.MNEMONIC.length > 0) {
      const MNEMONIC: string = process.env.MNEMONIC;
      return ethers.Wallet.fromPhrase(MNEMONIC, provider);
    }

  }

  return ethers.Wallet.createRandom(provider);
}

export async function getProvider(){
  return new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL);
}

export async function getWallet() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL);
  const wallet = loadWallet(provider);
  console.log(`Using address ${wallet.address}`);

  const balanceBN = await provider.getBalance(wallet.address);
  const balance = Number(ethers.formatUnits(balanceBN));

  console.log(`Wallet balance ${balance}`);

  if (balance < 0.01) {

    throw new Error("Not enough ether");

  }

  return wallet;
}

export async function deployLotteryContract() {
  const wallet = await getWallet();

  const lotteryFactory = new Lottery__factory(wallet);
  const lotteryContract = await lotteryFactory.deploy(
    "Lottery Token",
    "LT0",
    TOKEN_RATIO,
    ethers.parseUnits(BET_PRICE.toFixed(18)),
    ethers.parseUnits(BET_FEE.toFixed(18))
  );
  await lotteryContract.waitForDeployment();
  return lotteryContract;
}

export async function getTokenContractAt(contractAddress: string) {
  const wallet = await getWallet();

  const tokenFactory = new Lottery__factory(wallet);
  const tokenContract = tokenFactory.attach(contractAddress) as Lottery;
  return tokenContract;
}

console.log(ethers.parseUnits(BET_PRICE.toFixed(18)));
