/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface GNSReferralsInterfaceV6_2Interface extends utils.Interface {
  functions: {
    "distributePotentialReward(address,uint256,uint256,uint256)": FunctionFragment;
    "getPercentOfOpenFeeP(address)": FunctionFragment;
    "getTraderReferrer(address)": FunctionFragment;
    "registerPotentialReferrer(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "distributePotentialReward"
      | "getPercentOfOpenFeeP"
      | "getTraderReferrer"
      | "registerPotentialReferrer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "distributePotentialReward",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPercentOfOpenFeeP",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTraderReferrer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPotentialReferrer",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "distributePotentialReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPercentOfOpenFeeP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTraderReferrer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerPotentialReferrer",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GNSReferralsInterfaceV6_2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GNSReferralsInterfaceV6_2Interface;

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
    distributePotentialReward(
      trader: PromiseOrValue<string>,
      volumeDai: PromiseOrValue<BigNumberish>,
      pairOpenFeeP: PromiseOrValue<BigNumberish>,
      tokenPriceDai: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPercentOfOpenFeeP(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTraderReferrer(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { referrer: string }>;

    registerPotentialReferrer(
      trader: PromiseOrValue<string>,
      referral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  distributePotentialReward(
    trader: PromiseOrValue<string>,
    volumeDai: PromiseOrValue<BigNumberish>,
    pairOpenFeeP: PromiseOrValue<BigNumberish>,
    tokenPriceDai: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPercentOfOpenFeeP(
    trader: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTraderReferrer(
    trader: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  registerPotentialReferrer(
    trader: PromiseOrValue<string>,
    referral: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    distributePotentialReward(
      trader: PromiseOrValue<string>,
      volumeDai: PromiseOrValue<BigNumberish>,
      pairOpenFeeP: PromiseOrValue<BigNumberish>,
      tokenPriceDai: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPercentOfOpenFeeP(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTraderReferrer(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    registerPotentialReferrer(
      trader: PromiseOrValue<string>,
      referral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    distributePotentialReward(
      trader: PromiseOrValue<string>,
      volumeDai: PromiseOrValue<BigNumberish>,
      pairOpenFeeP: PromiseOrValue<BigNumberish>,
      tokenPriceDai: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPercentOfOpenFeeP(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTraderReferrer(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerPotentialReferrer(
      trader: PromiseOrValue<string>,
      referral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    distributePotentialReward(
      trader: PromiseOrValue<string>,
      volumeDai: PromiseOrValue<BigNumberish>,
      pairOpenFeeP: PromiseOrValue<BigNumberish>,
      tokenPriceDai: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPercentOfOpenFeeP(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTraderReferrer(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerPotentialReferrer(
      trader: PromiseOrValue<string>,
      referral: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
