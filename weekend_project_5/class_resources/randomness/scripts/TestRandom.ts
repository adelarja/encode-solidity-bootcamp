import { ethers } from "hardhat";
import { Random } from "../typechain-types";
import {mine} from "@nomicfoundation/hardhat-network-helpers";

export async function randao() {
    const contractFactory = await ethers.getContractFactory("Random");
    contractFactory.deploy().then(async (result) => {
      result.waitForDeployment().then(async (contract: Random) => {
        const currentBlock = await ethers.provider.getBlock("latest");
        const randomNumber = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock?.number}\nBlock difficulty: ${currentBlock?.difficulty}\nRandom number from this block difficulty: ${randomNumber}`
        );
        await mine(1);
        const currentBlock2 = await ethers.provider.getBlock("latest");
        const randomNumber2 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock2?.number}\nBlock difficulty: ${currentBlock2?.difficulty}\nRandom number from this block difficulty: ${randomNumber2}`
        );
        await mine(1);
        const currentBlock3 = await ethers.provider.getBlock("latest");
        const randomNumber3 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock3?.number}\nBlock difficulty: ${currentBlock3?.difficulty}\nRandom number from this block difficulty: ${randomNumber3}`
        );
        await mine(1);
        const currentBlock4 = await ethers.provider.getBlock("latest");
        const randomNumber4 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock4?.number}\nBlock difficulty: ${currentBlock4?.difficulty}\nRandom number from this block difficulty: ${randomNumber4}`
        );
        await mine(1);
        const currentBlock5 = await ethers.provider.getBlock("latest");
        const randomNumber5 = await contract.getRandomNumber();
        console.log(
          `Block number: ${currentBlock5?.number}\nBlock difficulty: ${currentBlock5?.difficulty}\nRandom number from this block difficulty: ${randomNumber5}`
        );
      });
    });
  }