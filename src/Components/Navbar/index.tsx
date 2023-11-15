import React from 'react'


interface params {
  chainName:string;
  message:string;
  triaName:string,
  appDomain:string,
  appLogo:string,
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


interface Props {
  params: params;
  tokenDetails?:AssetDetails
}


const Nav: React.FC<Props> =({params,tokenDetails})=> {
  return (
    <div>
        <div className="w-[376px] h-[74px] border-b-2 border-zinc-500 border-opacity-10 justify-center items-center gap-4 inline-flex">
  <div className="grow shrink basis-0 h-[74px] py-3 justify-start items-center gap-3 flex">
    <div className="w-[50px] h-[50px] relative">
      <img className="w-[50px] h-[50px] left-0 top-0 absolute rounded-[50px]" src="/icons/boy.svg" />
      <div className="w-[26.07px] h-[26.07px] pl-[0.69px] pr-[0.52px] pt-[0.86px] pb-[0.35px] left-[33.51px] top-[-13px] absolute origin-top-left    justify-center items-center inline-flex">
        <img src={tokenDetails?.logoUrl}></img>
        <div className="w-[19.55px] h-[19.55px] relative origin-top-left rotate-[-19.05deg] flex-col justify-start items-start flex" />
      </div>
    </div>
    <div className="flex-col justify-center items-start gap-1 inline-flex">
      <div className="h-[17px] px-2 flex-col justify-center items-start flex">
        <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">{params.chainName}</div>
      </div>
      <div className="px-2 justify-start items-center inline-flex">
        <div className="text-center text-neutral-600 text-sm font-semibold font-montserrat leading-[16.80px]">{params.triaName}</div>
      </div>
    </div>
  </div>
  <div className="py-3 flex-col justify-center items-end gap-1 inline-flex">
    <div className="px-2 flex-col justify-center items-end flex">
      <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">Balance</div>
    </div>
    <div className="px-2 justify-start items-center inline-flex">
      <div className="text-center text-neutral-600 text-sm font-semibold font-montserrat leading-[16.80px]"> {tokenDetails?.balanceInTokens.toFixed(8)} {tokenDetails?.symbol} </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Nav;