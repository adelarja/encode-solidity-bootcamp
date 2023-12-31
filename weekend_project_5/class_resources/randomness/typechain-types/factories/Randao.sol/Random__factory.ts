/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Random, RandomInterface } from "../../Randao.sol/Random";

const _abi = [
  {
    inputs: [],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "randomNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tossCoin",
    outputs: [
      {
        internalType: "bool",
        name: "heads",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063b41e8cad146037578063dbdff2c1146052575b600080fd5b603d605f565b60405190151581526020015b60405180910390f35b6040514481526020016049565b6000606a6002446070565b15919050565b600082608c57634e487b7160e01b600052601260045260246000fd5b50069056fea2646970667358221220c6baa8ec90bb6144dd296f7e6f18046c4e8beb2b6561aac63801cf1d03a73f3464736f6c63430008130033";

type RandomConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RandomConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Random__factory extends ContractFactory {
  constructor(...args: RandomConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Random & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Random__factory {
    return super.connect(runner) as Random__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomInterface {
    return new Interface(_abi) as RandomInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Random {
    return new Contract(address, _abi, runner) as unknown as Random;
  }
}
