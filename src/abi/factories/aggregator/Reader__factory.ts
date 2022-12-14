/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Reader, ReaderInterface } from "../../aggregator/Reader";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IProxyFactory",
        name: "aggregatorFactory_",
        type: "address",
      },
      {
        internalType: "contract IGmxVault",
        name: "gmxVault_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "weth_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "usdg_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "aggregatorFactory",
    outputs: [
      {
        internalType: "contract IProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGmxPositionRouter",
        name: "gmxPositionRouter",
        type: "address",
      },
      {
        internalType: "contract IGmxOrderBook",
        name: "gmxOrderBook",
        type: "address",
      },
      {
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
    ],
    name: "getAggregatorSubAccountsOfAccount",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "proxyAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isLiquidating",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "cumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtEntryFunding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proxyCollateralBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proxyEthBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "sizeUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lastIncreasedTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryFundingRate",
                type: "uint256",
              },
            ],
            internalType: "struct Reader.GmxCoreAccount",
            name: "gmx",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "orderHistoryKey",
                type: "bytes32",
              },
              {
                internalType: "bool",
                name: "isFillOrCancel",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "triggerAboveThreshold",
                type: "bool",
              },
            ],
            internalType: "struct Reader.GmxAdapterOrder[]",
            name: "gmxOrders",
            type: "tuple[]",
          },
        ],
        internalType: "struct Reader.AggregatorSubAccount[]",
        name: "subAccounts",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGmxPositionRouter",
        name: "gmxPositionRouter",
        type: "address",
      },
      {
        internalType: "contract IGmxOrderBook",
        name: "gmxOrderBook",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "proxyAddresses",
        type: "address[]",
      },
    ],
    name: "getAggregatorSubAccountsOfProxy",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "proxyAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetAddress",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isLiquidating",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "cumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtEntryFunding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proxyCollateralBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proxyEthBalance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "sizeUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lastIncreasedTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "entryFundingRate",
                type: "uint256",
              },
            ],
            internalType: "struct Reader.GmxCoreAccount",
            name: "gmx",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "orderHistoryKey",
                type: "bytes32",
              },
              {
                internalType: "bool",
                name: "isFillOrCancel",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "triggerAboveThreshold",
                type: "bool",
              },
            ],
            internalType: "struct Reader.GmxAdapterOrder[]",
            name: "gmxOrders",
            type: "tuple[]",
          },
        ],
        internalType: "struct Reader.AggregatorSubAccount[]",
        name: "subAccounts",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IGmxBasePositionManager",
        name: "gmxPositionManager",
        type: "address",
      },
      {
        internalType: "contract IGmxPositionRouter",
        name: "gmxPositionRouter",
        type: "address",
      },
      {
        internalType: "contract IGmxOrderBook",
        name: "gmxOrderBook",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aggregatorCollateralAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "gmxTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getGmxAdapterStorage",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "boostFeeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialMarginRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maintenanceMarginRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liquidationFeeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "totalBorrow",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Reader.MuxCollateral[]",
            name: "collaterals",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "totalTokenWeights",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minProfitTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minExecutionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liquidationFeeUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_marginFeeBasisPoints",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "swapFeeBasisPoints",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "stableSwapFeeBasisPoints",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "taxBasisPoints",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "stableTaxBasisPoints",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "usdgSupply",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "minProfit",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "weight",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxUsdgAmounts",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxGlobalShortSize",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxGlobalLongSize",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "reservedAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "usdgAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "redemptionAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "bufferAmounts",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "globalShortSize",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "contractMinPrice",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "contractMaxPrice",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "guaranteedUsd",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "fundingRate",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "cumulativeFundingRate",
                    type: "uint256",
                  },
                ],
                internalType: "struct Reader.GmxToken[]",
                name: "tokens",
                type: "tuple[]",
              },
            ],
            internalType: "struct Reader.GmxCoreStorage",
            name: "gmx",
            type: "tuple",
          },
        ],
        internalType: "struct Reader.GmxAdapterStorage",
        name: "store",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gmxVault",
    outputs: [
      {
        internalType: "contract IGmxVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdg",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Reader__factory {
  static readonly abi = _abi;
  static createInterface(): ReaderInterface {
    return new utils.Interface(_abi) as ReaderInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Reader {
    return new Contract(address, _abi, signerOrProvider) as Reader;
  }
}
