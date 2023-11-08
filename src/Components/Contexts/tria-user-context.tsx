import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import React from 'react';
/* Types */
import type { PropsWithChildren } from 'react';
import { GetAllAddressesResponse, RampnalysisAssets, UserController } from '@tria-sdk/core';

/* Data Things */
// import { GetAllAddressesResponse, RampnalysisAssets, UserController } from '@tria-sdk/core';
import { GetTotalBalanceResponse } from '@tria-sdk/core';
import { SDK_BASE_URL } from './constants';
import { Asset, GetAssetDetailResponse, TriaNameResponse } from './User';

interface TriaUserContext {
 getAssetBalanceForATriaName(
    triaName: string,
    chainName: string,
    tokenAddress?: string
  ): Promise<number>;

  getAssetDetails(
    chainName: string, 
    tokenAddress?: string,
    triaName?: string
): Promise<Asset[]>

getUserByAddress(
 address:string,
 triaName: string
): Promise<string>
}

const initialValue = {
 getAssetBalanceForATriaName:()=>Promise.reject(null),
 getUserByAddress : () => Promise.reject(null),
 getAssetDetails: () => Promise.reject(null)
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const TriaUserContext = createContext<TriaUserContext>(initialValue);

// This hook can be used to access the user info.
export const useTriaUser = () => useContext(TriaUserContext);

const userController = new UserController(SDK_BASE_URL ?? '', );
console.log('co', userController);
export function UserProvider(props: PropsWithChildren) {
  // const router = useTriaRouter()
  // const { setToastData, openToastMessage } = useToast();
  const [unauthHandlerId, setUnauthHandlerId] = useState<number | undefined>(undefined);
  

  // const getAssetForChain = useCallback(async (chainName: string, tokenAddress?: string) => {
  //   try {
  //     const response = (await userController.getAsset(chainName, tokenAddress)) as WithSuccess<{
  //       asset: ChainAssets;
  //     }>;

  //     if (!response.success) {
  //       throw new Error((response as unknown as Error).message);
  //     }

  //     return response.asset;
  //   } catch (error) {
  //     console.error(error);
  //     const { message } = error as Error;
  //     return Promise.reject(String(message || error));
  //   }
  // }, []);

  const getAssetDetails = useCallback( async( chainName:string, tokenAddress?:string, triaName?: string) => {
   try{
    const response = (await userController.getAssetDetails(
     chainName, tokenAddress,triaName
    )) as GetAssetDetailResponse;
    if(!response.success){
     throw new Error("No address found!");
    }
    return response.data;
   }catch(error){
    console.error(error);
    const { message } = error as Error;
    return Promise.reject(String(message || error));
   }
    },[])



  const getAssetBalanceForATriaName = useCallback(
    async (triaName: string, chainName: string, tokenAddress?: string): Promise<number> => {
      try {
        const response = (await userController.getAssetBalanceForATriaName(
          triaName,
          chainName,
          tokenAddress
        )) as unknown as number;

        return response;
      } catch (error) {
        console.error(error);
        const { message } = error as Error;
        return Promise.reject(String(message || error));
      }
    },
    []
  );

  const getUserByAddress = useCallback(async(address:string, chainName:string) =>{
   try{
    const response = (await userController.getUserByAddress(address, chainName)) as TriaNameResponse
    if(!response.success || response.triaName.length==0){
     throw new Error("No address found!");
    }
    return response.triaName
   }catch(error){
    console.error(error);
    const { message } = error as Error;
    return Promise.reject(String(message || error));
   }
  },[]) 
  

 
  
  // const getAddressByChainName = useCallback(async(triaName:string, chainName:string) => {
  //   try{
  //     const response = (await userController.getAddressByChainName(triaName, chainName)) as {address: string}
  //     // if(response.address.length == 0){
  //     //   throw new Error("No address found!");
  //     // }
  //     return (response.address);
  //   }catch(error){
  //     console.error(error);
  //     const { message } = error as Error;
  //     return Promise.reject(String(message || error));
  //   }
  // },[]) 

  // const searchBuyToken = useCallback(async(tokenName:string, currentChain:string) =>{
  //   try{
  //     const response = (await userController.searchBuyToken(tokenName, currentChain)) as SearchBuyTokenResponse
  //     return response;
  //   }catch(error){
  //     console.error(error);
  //     const { message } = error as Error;
  //     return Promise.reject(String(message || error));
  //   }
  // },[])



  const value = useMemo(
    () => ({
   
      getAssetBalanceForATriaName,
      getUserByAddress,
      getAssetDetails
   
    }),
    [
      getAssetBalanceForATriaName,
      getUserByAddress,
      getAssetDetails
    ]
  );

  return <TriaUserContext.Provider value={value}>{props.children}</TriaUserContext.Provider>;
}
