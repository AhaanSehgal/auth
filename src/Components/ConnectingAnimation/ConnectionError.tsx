import React from 'react'

export default function ConnectionError() {
  return (
    <div>
         <div className="w-[416px] h-[367px] px-5 py-6 flex-col justify-center items-center gap-4 inline-flex">
  <div className="self-stretch py-2 justify-center items-center gap-2 inline-flex">
    <div className=" flex-col justify-center items-center gap-2 inline-flex">
    <img  src="/icons/sea.png" />    </div>
    <div className="w-[100px] h-9 relative">
      <div className="w-[100px] h-[0px] left-0 top-[22px] absolute  border-zinc-500 border-opacity-30">
      <img src='/icons/line.svg'></img>

      </div>
      <div className="w-9 h-9 left-[34px] top-0 absolute">
        <div className="w-9 h-9 left-0 top-[0.75px] absolute">
            
        </div>
        <img src='/icons/danger.svg'></img>

      </div>
    </div>
    <div className="w-[95px] h-[95px] relative bg-blue-600 rounded-[65px] shadow border-4">
    <img className=" absolute" src="/icons/wallet4.svg" />    </div>
  </div>
  <div className="self-stretch h-[79px] py-3 mix-blend-difference flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Something's not right...</div>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-60 text-sm font-medium font-['Montserrat'] leading-[16.80px]">Please try again later!</div>
    </div>
  </div>
  <div className="self-stretch h-[97px] py-3 flex-col justify-center items-center gap-4 flex">
    <div className="h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center inline-flex">
      <div className="justify-center items-center flex">
        <div className="text-center text-white text-base font-semibold font-['Montserrat'] leading-tight">Try again</div>
      </div>
    </div>
    <div className="px-2 justify-start items-center inline-flex">
      <div className="text-center text-zinc-500 text-opacity-70 text-sm font-normal font-['Montserrat'] leading-[16.80px]">If the error persists, please try again later.</div>
    </div>
  </div>
</div>
    </div>
  )
}
