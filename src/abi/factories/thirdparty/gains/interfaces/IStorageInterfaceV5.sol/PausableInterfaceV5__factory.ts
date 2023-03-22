/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  PausableInterfaceV5,
  PausableInterfaceV5Interface,
} from "../../../../../thirdparty/gains/interfaces/IStorageInterfaceV5.sol/PausableInterfaceV5";

const _abi = [
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class PausableInterfaceV5__factory {
  static readonly abi = _abi;
  static createInterface(): PausableInterfaceV5Interface {
    return new utils.Interface(_abi) as PausableInterfaceV5Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PausableInterfaceV5 {
    return new Contract(address, _abi, signerOrProvider) as PausableInterfaceV5;
  }
}
