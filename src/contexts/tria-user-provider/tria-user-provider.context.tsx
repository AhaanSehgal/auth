import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import React from 'react';
/* Types */
import type { PropsWithChildren } from 'react';

/* Data Things */
import { GetAllAddressesResponse, RampnalysisAssets, UserController } from '@tria-sdk/core';
import { GetTotalBalanceResponse } from '@tria-sdk/core';

 interface GetAssetDetailsResponse {
  success: boolean
  data?: {
    balanceInTokens: number
    balanceInUSD: number
    balanceOfTokensInUnits: string
    chainLogo: string
    chainName: string
    decimals: number
    isFavorite: boolean
    isNativeToken: boolean
    isSpam: boolean
    logoUrl: string
    name: string
    percentChangeIn24hr: number
    quoteRate: number
    symbol: string
    tokenAddress: string
  }
  message?: string
}


interface TriaUserContext {
  getAssetDetails(
    chainName: string,
    tokenAddress?: string,
    triaName?: string
  ): Promise<Required<GetAssetDetailsResponse>['data']>;

  getUserByAddress(address: string,
    chainName: string):any
}

const initialValue = {
  getAssetDetails: () => Promise.reject(null),
  getUserByAddress:()=>Promise.reject(null)
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const TriaUserContext = createContext<TriaUserContext>(initialValue);

// This hook can be used to access the user info.
export const useTriaUser = () => useContext(TriaUserContext);
const SDK_BASE_URL = 'https://staging.tria.so'
const userController = new UserController(SDK_BASE_URL ?? '' );
console.log('co', userController);
export function UserProvider(props: PropsWithChildren) {
  // const router = useTriaRouter()

  const getAssetDetails = useCallback(async (chainName: string, tokenAddress?: string,  triaName?: string) => {
    try {
      console.log("userController",userController);
      const response = (await userController.getAssetDetails(
        chainName,
        tokenAddress, 
        triaName
      )) as GetAssetDetailsResponse;

      if (!response.success || !response.data) {
        throw new Error(response.message);
      }
console.log("resp-------->",response);
      return response.data;
    } catch (error) {
      console.error(error);
      const { message } = error as Error;
      return Promise.reject(String(message || error));
    }
  }, []);

  const getUserByAddress = useCallback(
    async (address: string,
         chainName: string) => {
      try {
        const response = (await (userController.getUserByAddress as any)(
          address,
          chainName
        ));
  
        if (!response.success) {
          throw new Error((response as unknown as Error).message);
        }
      console.log("resp------------>",response.triaName);
        return response.triaName;
      } catch (error) {
        console.error(error);
        const { message } = error as Error;
        return Promise.reject(String(message || error));
      }
    },
    []
  );

 

  const value = useMemo(
    () => ({
      getAssetDetails,
      getUserByAddress
    }),
    []
  );

  return <TriaUserContext.Provider value={value}>{props.children}</TriaUserContext.Provider>;
}
