const { writeFileSync } = require("fs");
import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { NFT__factory } from "../typechain-types";
dotenv.config();



async function main() {
  const tellorAddress =  process.env.ORACLE ? process.env.ORACLE:"";
  const [deployer] = await ethers.getSigners();
  const oracleContractFactory = new NFT__factory(deployer);
  const oracleContract = await oracleContractFactory.deploy(
    tellorAddress
  );
  await oracleContract.waitForDeployment();
  const address = await oracleContract.getAddress();
  console.log("NFT was deployed successfully at " + address);
  writeFileSync("NFT.json", JSON.stringify({ address: oracleContract.target }),{flag:'w'});
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
