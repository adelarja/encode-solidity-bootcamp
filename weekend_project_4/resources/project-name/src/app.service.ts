import { Injectable } from '@nestjs/common';
import * as tokenJson from './assets/MyToken.json';
import * as ballotJson from './assets/TokenizedBallot.json';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();
const TOKEN_ADDRESS = '0x8DC05594Eb309909A0f411A05E5ccF8B2A9aa59a';

@Injectable()
export class AppService {
  provider: ethers.Provider;
  wallet: ethers.Wallet;
  contract: ethers.Contract;
  ballotContract: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      process.env.RPC_ENDPOINT_URL ?? ',',
    );
    this.wallet = new ethers.Wallet(
      process.env.PRIVATE_KEY ?? '',
      this.provider,
    );
    this.contract = new ethers.Contract(
      TOKEN_ADDRESS,
      tokenJson.abi,
      this.wallet,
    );
  }

  getHello(): string {
    return 'Hello World!';
  }

  getAnotherThing(): string {
    return 'Other Thing';
  }

  getTokenAddress(): any {
    return { address: TOKEN_ADDRESS };
  }

  getTotalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  getTokenBalance(address: string): Promise<bigint> {
    return this.contract.balanceOf(address);
  }

  async mintTokens(address: string): Promise<any> {
    const tx = await this.contract.mint(address, ethers.parseEther('1'));
    const receipt = await tx.wait();
    console.log(JSON.stringify(receipt));
    return { success: true, txHash: receipt.hash };
  }

  async grantRole(address: string): Promise<any> {
    const tx = await this.contract.grantRole(
      this.contract.MINTER_ROLE(),
      address,
    );
    const receipt = await tx.wait();
    return { success: true, txHash: receipt.hash };
  }

  async delegateVotes(address: string): Promise<any> {
    const tx = await this.contract.delegate(address);
    const receipt = await tx.wait();
    return { success: true, txHash: receipt.hash };
  }

  encodeProposals(proposals: string[]) {
    if (proposals.length < 2) {
      throw new Error('Need at least 2 proposals.');
    }
    return proposals.map(ethers.encodeBytes32String);
  }

  async deployTokenizedBallot(
    proposals: string[],
    address: string,
  ): Promise<any> {
    const ballotContract = new ethers.ContractFactory(
      ballotJson.abi,
      ballotJson.bytecode,
      this.wallet,
    );
    const blockNumber = await this.provider.getBlockNumber();
    const tx = await ballotContract.deploy(
      this.encodeProposals(proposals),
      address,
      blockNumber,
    );
    await tx.waitForDeployment();
    return { success: true, address: await tx.getAddress() };
  }

  async voteProposal(
    address: string,
    proposal: number,
    amountOfVotes: number,
  ): Promise<any> {
    const ballotContract = new ethers.Contract(
      address,
      ballotJson.abi,
      this.wallet,
    );
    const tx = await ballotContract.vote(
      proposal,
      ethers.parseUnits(String(amountOfVotes)),
    );
    const receipt = await tx.wait();
    return { success: true, txHash: receipt.hash };
  }

  async getWinningProposal(address: string): Promise<any> {
    const updatedAddress = address.slice(1);
    const ballotContract = new ethers.Contract(
      updatedAddress,
      ballotJson.abi,
      this.wallet,
    );
    const tx = await ballotContract.proposals(
      await ballotContract.winningProposal(),
    );
    // const receipt = await tx.wait();
    const proposalName = ethers.decodeBytes32String(tx.name);
    const votesCount = String(tx.voteCount);
    return {
      success: true,
      txHash: tx.hash,
      proposalName: proposalName,
      votesCount: votesCount,
    };
  }
}
