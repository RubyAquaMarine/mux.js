/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGNSPairsStorageV6,
  IGNSPairsStorageV6Interface,
} from "../../../../thirdparty/gains/interfaces/IGNSPairsStorageV6";

const _abi = [
  {
    inputs: [],
    name: "currentOrderId",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "fees",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "openFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oracleFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nftLimitOrderFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "referralFeeP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minLevPosDai",
            type: "uint256",
          },
        ],
        internalType: "struct IGNSPairsStorageV6.Fee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feesCount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "groups",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "job",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "minLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxCollateralP",
            type: "uint256",
          },
        ],
        internalType: "struct IGNSPairsStorageV6.Group",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "groupsCount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "pairs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "from",
            type: "string",
          },
          {
            internalType: "string",
            name: "to",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "feed1",
                type: "address",
              },
              {
                internalType: "address",
                name: "feed2",
                type: "address",
              },
              {
                internalType: "enum IGNSPairsStorageV6.FeedCalculation",
                name: "feedCalculation",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "maxDeviationP",
                type: "uint256",
              },
            ],
            internalType: "struct IGNSPairsStorageV6.Feed",
            name: "feed",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "spreadP",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "groupIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeIndex",
            type: "uint256",
          },
        ],
        internalType: "struct IGNSPairsStorageV6.Pair",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pairsCount",
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
];

export class IGNSPairsStorageV6__factory {
  static readonly abi = _abi;
  static createInterface(): IGNSPairsStorageV6Interface {
    return new utils.Interface(_abi) as IGNSPairsStorageV6Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGNSPairsStorageV6 {
    return new Contract(address, _abi, signerOrProvider) as IGNSPairsStorageV6;
  }
}
