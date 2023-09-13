import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

import * as dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    hardhat:{},
    sepolia:{
      url: process.env.RPCENPOINT,
      gasPrice: 30000000,
      accounts: {
        mnemonic:process.env.MNEMONIC
      }
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN
  }
};

export default config;
