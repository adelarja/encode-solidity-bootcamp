/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenizedBallot,
  TokenizedBallotInterface,
} from "../../../contracts/TokenizedBallot.sol/TokenizedBallot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_targetBlockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetBlockNumber",
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
        name: "proposal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "votingPower",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "votingPowerSpent",
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
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d3d38038062000d3d833981810160405281019062000037919062000383565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555060005b8351811015620001155760016040518060400160405280868481518110620000ae57620000ad620003fe565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080806200010c906200045c565b91505062000081565b50505050620004a9565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001838262000138565b810181811067ffffffffffffffff82111715620001a557620001a462000149565b5b80604052505050565b6000620001ba6200011f565b9050620001c8828262000178565b919050565b600067ffffffffffffffff821115620001eb57620001ea62000149565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b620002168162000201565b81146200022257600080fd5b50565b60008151905062000236816200020b565b92915050565b6000620002536200024d84620001cd565b620001ae565b90508083825260208201905060208402830185811115620002795762000278620001fc565b5b835b81811015620002a6578062000291888262000225565b8452602084019350506020810190506200027b565b5050509392505050565b600082601f830112620002c857620002c762000133565b5b8151620002da8482602086016200023c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200031082620002e3565b9050919050565b620003228162000303565b81146200032e57600080fd5b50565b600081519050620003428162000317565b92915050565b6000819050919050565b6200035d8162000348565b81146200036957600080fd5b50565b6000815190506200037d8162000352565b92915050565b6000806000606084860312156200039f576200039e62000129565b5b600084015167ffffffffffffffff811115620003c057620003bf6200012e565b5b620003ce86828701620002b0565b9350506020620003e18682870162000331565b9250506040620003f4868287016200036c565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004698262000348565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200049e576200049d6200042d565b5b600182019050919050565b61088480620004b96000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a72003511161005b578063a7200351146100ef578063b384abef1461011f578063c07473f61461013b578063e2ba53f01461016b5761007d565b8063013cf08b146100825780632a8cd29e146100b3578063609ff1bd146100d1575b600080fd5b61009c600480360381019061009791906104a4565b610189565b6040516100aa9291906104f9565b60405180910390f35b6100bb6101bd565b6040516100c89190610522565b60405180910390f35b6100d96101c3565b6040516100e69190610522565b60405180910390f35b6101096004803603810190610104919061059b565b61024b565b6040516101169190610522565b60405180910390f35b610139600480360381019061013491906105c8565b610263565b005b6101556004803603810190610150919061059b565b610344565b6040516101629190610522565b60405180910390f35b610173610435565b6040516101809190610608565b60405180910390f35b6001818154811061019957600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60025481565b6000806000905060005b6001805490508110156102465781600182815481106101ef576101ee610623565b5b9060005260206000209060020201600101541115610233576001818154811061021b5761021a610623565b5b90600052602060002090600202016001015491508092505b808061023e90610681565b9150506101cd565b505090565b60036020528060005260406000206000915090505481565b8061026d33610344565b10156102ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a59061074c565b60405180910390fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102fd919061076c565b92505081905550806001838154811061031957610318610623565b5b90600052602060002090600202016001016000828254610339919061076c565b925050819055505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a8846002546040518363ffffffff1660e01b81526004016103e39291906107af565b602060405180830381865afa158015610400573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042491906107ed565b61042e919061081a565b9050919050565b600060016104416101c3565b8154811061045257610451610623565b5b906000526020600020906002020160000154905090565b600080fd5b6000819050919050565b6104818161046e565b811461048c57600080fd5b50565b60008135905061049e81610478565b92915050565b6000602082840312156104ba576104b9610469565b5b60006104c88482850161048f565b91505092915050565b6000819050919050565b6104e4816104d1565b82525050565b6104f38161046e565b82525050565b600060408201905061050e60008301856104db565b61051b60208301846104ea565b9392505050565b600060208201905061053760008301846104ea565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105688261053d565b9050919050565b6105788161055d565b811461058357600080fd5b50565b6000813590506105958161056f565b92915050565b6000602082840312156105b1576105b0610469565b5b60006105bf84828501610586565b91505092915050565b600080604083850312156105df576105de610469565b5b60006105ed8582860161048f565b92505060206105fe8582860161048f565b9150509250929050565b600060208201905061061d60008301846104db565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061068c8261046e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036106be576106bd610652565b5b600182019050919050565b600082825260208201905092915050565b7f546f6b656e697a656442616c6c6f743a20747279696e6720746f20766f74652060008201527f77697468206d6f726520766f746573207468616e20796f7520686176652e0000602082015250565b6000610736603e836106c9565b9150610741826106da565b604082019050919050565b6000602082019050818103600083015261076581610729565b9050919050565b60006107778261046e565b91506107828361046e565b925082820190508082111561079a57610799610652565b5b92915050565b6107a98161055d565b82525050565b60006040820190506107c460008301856107a0565b6107d160208301846104ea565b9392505050565b6000815190506107e781610478565b92915050565b60006020828403121561080357610802610469565b5b6000610811848285016107d8565b91505092915050565b60006108258261046e565b91506108308361046e565b925082820390508181111561084857610847610652565b5b9291505056fea2646970667358221220a9243675594a75a4c6c7fc4d503bb8e19632a16362b28526b8b3d801af0356a964736f6c63430008130033";

type TokenizedBallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenizedBallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenizedBallot__factory extends ContractFactory {
  constructor(...args: TokenizedBallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    proposalNames: BytesLike[],
    _tokenContract: AddressLike,
    _targetBlockNumber: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      proposalNames,
      _tokenContract,
      _targetBlockNumber,
      overrides || {}
    );
  }
  override deploy(
    proposalNames: BytesLike[],
    _tokenContract: AddressLike,
    _targetBlockNumber: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      proposalNames,
      _tokenContract,
      _targetBlockNumber,
      overrides || {}
    ) as Promise<
      TokenizedBallot & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenizedBallot__factory {
    return super.connect(runner) as TokenizedBallot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenizedBallotInterface {
    return new Interface(_abi) as TokenizedBallotInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenizedBallot {
    return new Contract(address, _abi, runner) as unknown as TokenizedBallot;
  }
}