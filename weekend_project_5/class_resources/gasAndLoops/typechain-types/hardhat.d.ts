/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CorrectSortedBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CorrectSortedBallot__factory>;
    getContractFactory(
      name: "Gas",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Gas__factory>;
    getContractFactory(
      name: "OverflowTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OverflowTest__factory>;
    getContractFactory(
      name: "SortedBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SortedBallot__factory>;

    getContractAt(
      name: "CorrectSortedBallot",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CorrectSortedBallot>;
    getContractAt(
      name: "Gas",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Gas>;
    getContractAt(
      name: "OverflowTest",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OverflowTest>;
    getContractAt(
      name: "SortedBallot",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SortedBallot>;

    deployContract(
      name: "CorrectSortedBallot",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CorrectSortedBallot>;
    deployContract(
      name: "Gas",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Gas>;
    deployContract(
      name: "OverflowTest",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OverflowTest>;
    deployContract(
      name: "SortedBallot",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SortedBallot>;

    deployContract(
      name: "CorrectSortedBallot",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CorrectSortedBallot>;
    deployContract(
      name: "Gas",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Gas>;
    deployContract(
      name: "OverflowTest",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OverflowTest>;
    deployContract(
      name: "SortedBallot",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SortedBallot>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
