import React from 'react'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'

export default function index() {
  return (
    <div>
             <div className="w-[448px] h-[840px] bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
        <Nav/>
  <div className="flex-col pt-20 justify-start items-center gap-2 flex">
    
   

  
  <div className="w-[416px] h-[356px]  px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[46px] pt-auto py-3 mix-blend-difference flex-col justify-center items-center gap-4 flex">
    <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-montserrat leading-snug">Create a Wallet</div>
    </div>
  </div>
  <div className="self-stretch py-3 justify-start items-center gap-2 inline-flex">
    <div className="px-2 justify-start items-center flex">
      <div className="text-center text-zinc-500 text-sm font-normal font-montserrat leading-[16.80px]">Choose one of the wallet providers to continue...</div>
    </div>
  </div>
  <div className="self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex">
    <div className="w-7 h-7 relative">
      <img className="absolute" src="/icons/teth3.svg" alt="Tria Wallet Icon" />
    </div>
    <div className="grow shrink basis-0 h-[19px] justify-start items-center flex">
      <div className="mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-montserrat leading-tight">Tria Wallet</div>
    </div>
  </div>
  <div className="self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex">
    <div className="w-7 h-7 relative bg-blue-600 rounded-md border">
      <img className=" absolute" src="/icons/wallet1.svg" alt="Coinbase Wallet Icon" />
    </div>
    <div className="grow shrink basis-0 h-[19px] justify-start items-center flex">
      <div className="mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-montserrat leading-tight">Coinbase Wallet</div>
    </div>
  </div>
  <div className="self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex">
    <div className="w-7 h-7 bg-white rounded-md justify-center items-center flex">
      <div className="w-7 h-7 relative flex-col justify-start items-start flex">
      <img className="  absolute" src="/icons/wallet2.svg" />

        <div className="w-[22.05px] h-5 relative"></div>
        <div className="w-[22.41px] h-[10.37px] relative"></div>
        <div className="w-[13.89px] h-[7.50px] relative"></div>
        <div className="w-[12.57px] h-[5.76px] relative"></div>
        <div className="h-[2.76px] relative"></div>
      </div>
    </div>
    <div className="grow shrink basis-0 h-[19px] justify-start items-center flex">
      <div className="mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-montserrat leading-tight">Metamask</div>
    </div>
  </div>
  <div className="self-stretch py-3 justify-start items-center gap-2 inline-flex">
    <div className="px-2 justify-start items-center flex">
      <div className="text-center"><span className="text-zinc-500 text-opacity-70 text-sm font-normal font-montserrat leading-[16.80px]">Not sure? </span><span className="text-zinc-500 text-opacity-70 text-sm font-normal font-montserrat underline leading-[16.80px]">Read more.</span></div>
    </div>
  </div>
</div>
</div>
<Footer/>
    </div>
    </div>
  )
}
