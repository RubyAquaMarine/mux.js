/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IGNSPairsStorageV6 {
  export type FeeStruct = {
    name: PromiseOrValue<string>;
    openFeeP: PromiseOrValue<BigNumberish>;
    closeFeeP: PromiseOrValue<BigNumberish>;
    oracleFeeP: PromiseOrValue<BigNumberish>;
    nftLimitOrderFeeP: PromiseOrValue<BigNumberish>;
    referralFeeP: PromiseOrValue<BigNumberish>;
    minLevPosDai: PromiseOrValue<BigNumberish>;
  };

  export type FeeStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    name: string;
    openFeeP: BigNumber;
    closeFeeP: BigNumber;
    oracleFeeP: BigNumber;
    nftLimitOrderFeeP: BigNumber;
    referralFeeP: BigNumber;
    minLevPosDai: BigNumber;
  };

  export type GroupStruct = {
    name: PromiseOrValue<string>;
    job: PromiseOrValue<BytesLike>;
    minLeverage: PromiseOrValue<BigNumberish>;
    maxLeverage: PromiseOrValue<BigNumberish>;
    maxCollateralP: PromiseOrValue<BigNumberish>;
  };

  export type GroupStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    name: string;
    job: string;
    minLeverage: BigNumber;
    maxLeverage: BigNumber;
    maxCollateralP: BigNumber;
  };

  export type FeedStruct = {
    feed1: PromiseOrValue<string>;
    feed2: PromiseOrValue<string>;
    feedCalculation: PromiseOrValue<BigNumberish>;
    maxDeviationP: PromiseOrValue<BigNumberish>;
  };

  export type FeedStructOutput = [string, string, number, BigNumber] & {
    feed1: string;
    feed2: string;
    feedCalculation: number;
    maxDeviationP: BigNumber;
  };

  export type PairStruct = {
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    feed: IGNSPairsStorageV6.FeedStruct;
    spreadP: PromiseOrValue<BigNumberish>;
    groupIndex: PromiseOrValue<BigNumberish>;
    feeIndex: PromiseOrValue<BigNumberish>;
  };

  export type PairStructOutput = [
    string,
    string,
    IGNSPairsStorageV6.FeedStructOutput,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    from: string;
    to: string;
    feed: IGNSPairsStorageV6.FeedStructOutput;
    spreadP: BigNumber;
    groupIndex: BigNumber;
    feeIndex: BigNumber;
  };
}

export interface IGNSPairsStorageV6Interface extends utils.Interface {
  functions: {
    "currentOrderId()": FunctionFragment;
    "fees(uint256)": FunctionFragment;
    "feesCount()": FunctionFragment;
    "groups(uint256)": FunctionFragment;
    "groupsCount()": FunctionFragment;
    "pairs(uint256)": FunctionFragment;
    "pairsCount()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "currentOrderId"
      | "fees"
      | "feesCount"
      | "groups"
      | "groupsCount"
      | "pairs"
      | "pairsCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "currentOrderId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "feesCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "groups",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "groupsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pairs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pairsCount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "currentOrderId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "groups", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "groupsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairsCount", data: BytesLike): Result;

  events: {};
}

export interface IGNSPairsStorageV6 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGNSPairsStorageV6Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    currentOrderId(overrides?: CallOverrides): Promise<[BigNumber]>;

    fees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IGNSPairsStorageV6.FeeStructOutput]>;

    feesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IGNSPairsStorageV6.GroupStructOutput]>;

    groupsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    pairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IGNSPairsStorageV6.PairStructOutput]>;

    pairsCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  currentOrderId(overrides?: CallOverrides): Promise<BigNumber>;

  fees(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IGNSPairsStorageV6.FeeStructOutput>;

  feesCount(overrides?: CallOverrides): Promise<BigNumber>;

  groups(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IGNSPairsStorageV6.GroupStructOutput>;

  groupsCount(overrides?: CallOverrides): Promise<BigNumber>;

  pairs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IGNSPairsStorageV6.PairStructOutput>;

  pairsCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    currentOrderId(overrides?: CallOverrides): Promise<BigNumber>;

    fees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IGNSPairsStorageV6.FeeStructOutput>;

    feesCount(overrides?: CallOverrides): Promise<BigNumber>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IGNSPairsStorageV6.GroupStructOutput>;

    groupsCount(overrides?: CallOverrides): Promise<BigNumber>;

    pairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IGNSPairsStorageV6.PairStructOutput>;

    pairsCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    currentOrderId(overrides?: CallOverrides): Promise<BigNumber>;

    fees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feesCount(overrides?: CallOverrides): Promise<BigNumber>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groupsCount(overrides?: CallOverrides): Promise<BigNumber>;

    pairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairsCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    currentOrderId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    groupsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
