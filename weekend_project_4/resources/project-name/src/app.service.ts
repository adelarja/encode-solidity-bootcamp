import { Injectable } from '@nestjs/common';
import * as tokenJson from './assets/MyToken.json'
import { ethers } from 'ethers';

const TOKEN_ADDRESS = "0x8DC05594Eb309909A0f411A05E5ccF8B2A9aa59a";
const TOKENIZED_BALLOT_ADDRESS = "";

@Injectable()
export class AppService {
  provider: ethers.Provider;
  wallet: ethers.Wallet;
  contract: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? ",");
    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? '', this.provider);
    this.contract = new ethers.Contract(TOKEN_ADDRESS, tokenJson.abi, this.wallet);
  }

  getHello(): string {
    return 'Hello World!';
  }

  getAnotherThing(): string {
    return "Other Thing";
  }

  getTokenAddress(): any {
    return {address: TOKEN_ADDRESS};
  }

  getTotalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  getTokenBalance(address: string): Promise<bigint> {
    return this.contract.balanceOf(address);
  }

  async mintTokens(address: string): Promise<any> {
    const tx = await this.contract.mint(address, ethers.parseEther("1"));
    const receip = await tx.wait();
    return {success: true, txHash: receip.hash};
  }

  async grantRole(address: string): Promise<any> {
    const tx = await this.contract.grantRole(this.contract.MINTER_ROLE(), address);
    const receipt = await tx.wait();
    return {success: true, txHash: receipt.hash};
  }
}
