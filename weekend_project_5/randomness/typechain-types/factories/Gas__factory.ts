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
import type { NonPayableOverrides } from "../common";
import type { Gas, GasInterface } from "../Gas";

const _abi = [
  {
    inputs: [],
    name: "createPacked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createUnpacked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "highScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actions",
        type: "uint256",
      },
    ],
    name: "loopActions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "countValue",
        type: "uint256",
      },
    ],
    name: "updateNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "countValue",
        type: "uint256",
      },
    ],
    name: "updateNumberOptimized",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610669806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631db05a88146100675780631fca52781461007c5780634c6c2ff3146100975780636da4ddb1146100aa578063d1f108b91461030b578063fc63cdcc1461031e575b600080fd5b61007a610075366004610599565b6104e8565b005b61008560005481565b60405190815260200160405180910390f35b61007a6100a5366004610599565b61051e565b61007a600460405180610160016040528060006001600160801b03168152602001600060ff16815260200160006001600160401b03168152602001600060ff1681526020016000815260200160006001600160401b0316815260200160006001600160801b03168152602001600060ff16815260200160006001600160401b03168152602001600060ff168152602001600063ffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a81548160ff021916908360ff16021790555060408201518160000160116101000a8154816001600160401b0302191690836001600160401b0316021790555060608201518160000160196101000a81548160ff021916908360ff1602179055506080820151816001015560a08201518160020160006101000a8154816001600160401b0302191690836001600160401b0316021790555060c08201518160020160086101000a8154816001600160801b0302191690836001600160801b0316021790555060e08201518160020160186101000a81548160ff021916908360ff1602179055506101008201518160030160006101000a8154816001600160401b0302191690836001600160401b031602179055506101208201518160030160086101000a81548160ff021916908360ff1602179055506101408201518160030160096101000a81548163ffffffff021916908363ffffffff1602179055505050565b61007a610319366004610599565b610550565b6040805161016081018252600080825260208201818152928201818152606083018281526080840183815260a0850184815260c0860185815260e08701868152610100880187815261012089018881526101408a01898152600380546001810182559a8190529a517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9a909b02998a019a909a55995196516001600160801b03978816600160801b989091168802177fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c89015594517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d909701805494519351925191519551995198516001600160401b039889166001600160801b031990961695909517600160401b9489169490940293909317600160801b600160e01b0319169690911690940263ffffffff60c01b191694909417600160c01b63ffffffff909416939093029290921761ffff60e01b1916600160e01b60ff9283160260ff60e81b191617600160e81b95821695909502949094176001600160f01b0316600160f01b938516939093026001600160f81b031692909217600160f81b9390921692909202179055005b60015481111561051b57806104fc816105c8565b600180549193509091506000610511836105df565b91905055506104e8565b50565b6002545b8082111561054a5781610534816105c8565b9250508080610542906105df565b915050610522565b60025550565b600181111561051b576000546105679060016105f8565b6105719082610611565b60008082825461058191906105f8565b90915550819050610591816105c8565b915050610550565b6000602082840312156105ab57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000816105d7576105d76105b2565b506000190190565b6000600182016105f1576105f16105b2565b5060010190565b8082018082111561060b5761060b6105b2565b92915050565b60008261062e57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220d50b7b9e70ebd01a74bc99c589f7383fd01e55b42fdc7737bbb375de6305604364736f6c63430008130033";

type GasConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gas__factory extends ContractFactory {
  constructor(...args: GasConstructorParams) {
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
      Gas & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Gas__factory {
    return super.connect(runner) as Gas__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasInterface {
    return new Interface(_abi) as GasInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Gas {
    return new Contract(address, _abi, runner) as unknown as Gas;
  }
}