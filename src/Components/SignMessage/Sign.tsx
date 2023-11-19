import React,{useState,useEffect,useContext} from 'react';
import Navbar from '../Navbar/index';
import NavContext from "../../NavContext";

interface params {
  chainName:string;
  message:string;
  tokenAddress: String;
}


interface AssetDetails {
  balanceInTokens: number;
  balanceInUSD: number;
  balanceOfTokensInUnits: string;
  chainLogo: string;
  chainName: string;
  decimals: number;
  isFavorite: boolean;
  isNativeToken: boolean;
  isSpam: boolean;
  logoUrl: string;
  name: string;
  percentChangeIn24hr: number;
  quoteRate: number;
  symbol: string;
  tokenAddress: string;
}
interface dappDetails{
  dappDomain:string,
  dappLogo :string,
  triaName:string
}


interface Props {
  dappDetails:dappDetails,
  params: params;
  signMessage: () => Promise<void>;
  tokenDetails?:AssetDetails;
  sendMessageToParent: () => void;
}

const Sign: React.FC<Props> = ({dappDetails, params, signMessage,tokenDetails ,sendMessageToParent}) => {

  console.log("params", params, signMessage );

  return (
    <div>
      <div className="w-[448px] h-[840px] bg-white dark:bg-fontLightColor rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div className="w-[416px] justify-end items-start inline-flex">
            <img className="dark:visible invisible W-[0] dark:W-18px cursor-pointer" src="/icons/ShapeW.svg" onClick={()=>sendMessageToParent()}></img>      
          </div>
        <div className="h-[190px] px-5 py-2 flex-col justify-center items-center gap-4 flex">
          <Navbar dappDetails={dappDetails} params={params} tokenDetails={tokenDetails} />
          <div className="w-[212px] h-[60px] px-6 py-4 rounded-[52px] border-2 border-zinc-500 border-opacity-10 justify-center items-center gap-3 inline-flex">
            <img className="w-7 h-7 shadow" src={dappDetails?.dappLogo} />
            <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">
              {dappDetails?.dappDomain}
            </div>
          </div>
        </div>
        <div className="h-[130px] px-5 py-4 flex-col justify-center items-center gap-4 flex">
          <div className="self-stretch h-[98px] py-3 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-center text-neutral-600 text-xl font-semibold font-montserrat leading-normal dark:text-text">
                Sign Message
              </div>
            </div>
            <div className="w-[376px] px-2 justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-center text-neutral-600 text-opacity-80 text-sm font-normal font-montserrat leading-[16.80px]">
                Only sign this message if you fully understand the content and trust the requesting
                site.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch h-[38px] px-4 py-2 flex-col justify-center items-center gap-4 flex">
              <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
                <div className="text-center text-neutral-600 text-lg font-medium font-montserrat leading-snug dark:text-text">
                  Message:
                </div>
              </div>
            </div>
            <div className="w-[416px]  grow shrink basis-0 px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center flex">
              <div className="self-stretch grow  shrink basis-0 py-2 justify-center items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-2 justify-start items-center flex">
                  <div className="grow shrink basis-0 self-stretch text-neutral-600 text-opacity-90 text-base font-normal font-montserrat leading-tight">
                  {typeof params?.message === 'string' ? params?.message : <pre>{JSON.stringify(params?.message, null, 2)}</pre>}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[416px] h-[53px] justify-center items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[53px] p-5 bg-white rounded-[58px] border border-zinc-500 border-opacity-30 justify-center items-center flex cursor-pointer"
              onClick={()=>sendMessageToParent()}>
                <div className="justify-center items-center flex">
                  <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug">
                    Reject
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[53px] p-5 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[58px] justify-center items-center flex cursor-pointer"
              onClick={()=>signMessage()}>
                <div className="justify-center items-center flex">
                  <div className="text-center text-white text-lg font-semibold font-montserrat leading-snug">
                    Approve
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 rounded-[44px] justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
              <div className="w-[19px] h-[19px] relative rounded-[5px]" />
              <img src="/icons/logo.svg"></img>
              <div className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px]">
                Powered by Tria
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Sign;