import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ConnectWallet() {
  const navigate= useNavigate();
  return (
    <div>
        <div className="w-[416px] h-[435px] px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[46px] py-3 mix-blend-difference flex-col justify-center items-center gap-4 flex">
    <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-montserrat leading-snug">Connect a Wallet</div>
    </div>
  </div>
  <div className="w-[244px] h-[244px] relative">
    <img className="w-[244px] h-[244px] left-0 top-0 absolute" src="/icons/qr.svg" alt="Wallet Image" />
    <div className="w-20 h-20 left-[82px] top-[82px] absolute bg-blue-600 rounded-[17.14px] border-2">
      <img className="w-14 h-14 left-[12px] top-[12px] absolute" src="/icons/wallet1.svg" alt="Wallet Icon" />
    </div>
  </div>
  <div className="self-stretch h-[97px] py-3 flex-col justify-center items-center gap-4 flex">
    <div className="h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center inline-flex">
      <div className="justify-center items-center flex">
        <button onClick={()=>{navigate("/connectingAnimation")}}><div className="text-center text-white text-base font-semibold font-montserrat leading-tight">Open app</div></button>
      </div>
    </div>
    <div className="px-2 justify-start items-center inline-flex">
      <div className="text-center"><span className="text-zinc-500 text-opacity-70 text-sm font-normal font-montserrat leading-[16.80px]">Don’t have a wallet? </span><a href="#" className="text-zinc-500 text-opacity-80 text-sm font-medium font-montserrat underline leading-[16.80px]">Download Coinbase</a></div>
    </div>
  </div>
</div>

    </div>
  )
}
