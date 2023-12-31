/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface TokenizedBallotInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "proposals"
      | "targetBlockNumber"
      | "vote"
      | "votingPower"
      | "votingPowerSpent"
      | "winnerName"
      | "winningProposal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "targetBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votingPower",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "votingPowerSpent",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "winnerName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "winningProposal",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPowerSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "winnerName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "winningProposal",
    data: BytesLike
  ): Result;
}

export interface TokenizedBallot extends BaseContract {
  connect(runner?: ContractRunner | null): TokenizedBallot;
  waitForDeployment(): Promise<this>;

  interface: TokenizedBallotInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  proposals: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { name: string; voteCount: bigint }],
    "view"
  >;

  targetBlockNumber: TypedContractMethod<[], [bigint], "view">;

  vote: TypedContractMethod<
    [proposal: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  votingPower: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  votingPowerSpent: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  winnerName: TypedContractMethod<[], [string], "view">;

  winningProposal: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { name: string; voteCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "targetBlockNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [proposal: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "votingPower"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingPowerSpent"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "winnerName"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "winningProposal"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
