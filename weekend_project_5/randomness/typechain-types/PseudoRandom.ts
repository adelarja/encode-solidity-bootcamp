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
} from "./common";

export interface PseudoRandomInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getCombinedRandomNumber"
      | "getRandomNumber"
      | "setSignature"
      | "verifyString"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCombinedRandomNumber",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSignature",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyString",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCombinedRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyString",
    data: BytesLike
  ): Result;
}

export interface PseudoRandom extends BaseContract {
  connect(runner?: ContractRunner | null): PseudoRandom;
  waitForDeployment(): Promise<this>;

  interface: PseudoRandomInterface;

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

  getCombinedRandomNumber: TypedContractMethod<
    [seed: string],
    [bigint],
    "view"
  >;

  getRandomNumber: TypedContractMethod<[seed: string], [bigint], "view">;

  setSignature: TypedContractMethod<
    [_v: BigNumberish, _r: BytesLike, _s: BytesLike],
    [void],
    "nonpayable"
  >;

  verifyString: TypedContractMethod<
    [message: string, v: BigNumberish, r: BytesLike, s: BytesLike],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getCombinedRandomNumber"
  ): TypedContractMethod<[seed: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRandomNumber"
  ): TypedContractMethod<[seed: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "setSignature"
  ): TypedContractMethod<
    [_v: BigNumberish, _r: BytesLike, _s: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verifyString"
  ): TypedContractMethod<
    [message: string, v: BigNumberish, r: BytesLike, s: BytesLike],
    [string],
    "view"
  >;

  filters: {};
}
