import React from 'react'

export default function OpeningWallet() {
  return (
    <div>
        <div className="w-[416px] h-[318px] px-5 py-6 flex-col justify-center items-center gap-4 inline-flex">
  <div className="self-stretch py-2 justify-center items-center gap-2 inline-flex">
    <div className=" flex-col justify-center items-center gap-2 inline-flex">
      <img  src="/icons/sea.png" />
    </div>
    <div className="w-[100px] h-[0px]  border-zinc-500 border-opacity-30">
        <img src='/icons/line.svg'></img>
    </div>
    <div className="w-[95px] h-[95px] relative bg-blue-600 rounded-[65px] shadow border-4">
      <img className=" absolute" src="/icons/wallet4.svg" />
    </div>
  </div>
  <div className="self-stretch h-[79px] py-3 mix-blend-difference flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Opening coinbase wallet...</div>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-60 text-sm font-medium font-['Montserrat'] leading-[16.80px]">Confirm connection in the extension</div>
    </div>
  </div>
  <div className="w-12 h-12 p-2 mix-blend-difference rounded-xl justify-center items-center inline-flex">
    <div className="w-8 h-8 justify-center items-start gap-1 inline-flex">
      <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
      <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
      <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
