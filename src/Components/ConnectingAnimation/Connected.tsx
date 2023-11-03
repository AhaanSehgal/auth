import React from 'react'

export default function Connected() {
  return (
    <div>
        <div className="w-[416px] h-[254px] px-5 py-6 flex-col justify-center items-center gap-4 inline-flex">
  <div className="self-stretch py-2 justify-center items-center gap-2 inline-flex">
    <div className=" flex-col justify-center items-center gap-2 inline-flex">
    <img  src="/icons/sea.png" />    </div>
    <div className="w-[100px] h-9 relative">
      <div className="w-[100px] h-[0px] left-0 top-[21px] absolute   border-zinc-500 border-opacity-30">
      <img src='/icons/line.svg'></img>
      </div>
      <div className="w-9 h-9 left-[32px] top-0 absolute">
      <img src='/icons/tick-circle.svg'></img>
        <div className="w-9 h-9 left-0 top-0 absolute">
            
        </div>
      </div>
    </div>
    <div className="w-[95px] h-[95px] relative bg-blue-600 rounded-[65px] shadow border-4">
    <img className=" absolute" src="/icons/wallet4.svg" />
    </div>
  </div>
  <div className="self-stretch h-[79px] py-3 mix-blend-difference flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Connected successfully!</div>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-60 text-sm font-medium font-['Montserrat'] leading-[16.80px]">You're all set to start exploring</div>
    </div>
  </div>
</div>
    </div>
  )
}
