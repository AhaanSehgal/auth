import React from 'react'

export default function LoginWith() {
  return (
    
    <div className="w-[416px] h-[222px] py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[46px] px-5 py-3 flex-col justify-center items-center gap-4 flex">
    <div className="self-stretch justify-start items-center gap-2 inline-flex">
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Log in with</div>
      <div className="h-[22px] px-2 py-1 bg-pink-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
        <div className="text-center text-pink-500 text-opacity-90 text-xs font-medium font-['Montserrat'] leading-[14.40px]">fast</div>
      </div>
    </div>
  </div>
  <div className="self-stretch h-16 px-10 py-3 bg-neutral-800 bg-opacity-20 flex-col justify-start items-center gap-2 flex">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <div className="w-10 h-10 relative">
        <img className="w-10 h-10 left-0 top-0 absolute rounded-[25px]" src="/icons/user.svg" />
        <div className="w-[18px] h-[18px] p-[1.50px] left-[26px] top-[24px] absolute bg-neutral-50 rounded-xl shadow justify-center items-center gap-[1.50px] inline-flex">
          <div className="w-[10.80px] h-[10.80px] relative" />
          <img src='/icons/google.svg'></img>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-neutral-50 text-opacity-50 text-base font-semibold font-['Montserrat'] leading-tight">thekaypo</div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-neutral-600 text-xs font-medium font-['Montserrat'] leading-[14.40px]">logged out</div>
        </div>
      </div>
      <div className="opacity-60 justify-start items-center gap-2 flex">
        <div className="w-[47px] text-center"><span className="text-neutral-50 text-opacity-40 text-[10px] font-normal font-Montserrat leading-3">via </span><span className="text-neutral-50 text-opacity-60 text-[10px] font-semibold font-Montserrat leading-3">gmail</span></div>
      </div>
    </div>
  </div>
  <div className="self-stretch h-16 px-10 py-3 flex-col justify-start items-center gap-2 flex">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <div className="w-10 h-10 relative">
        <img className="w-10 h-10 left-0 top-0 absolute rounded-[25px]" src="/icons/user_2.svg" />
        <div className="w-[18px] h-[18px] p-[1.50px] left-[26px] top-[24px] absolute bg-indigo-500 rounded-xl justify-center items-center gap-[1.50px] inline-flex">
          <div className="w-[10.50px] h-[8.13px] relative">

            <div className="w-[10.50px] h-[8.13px] left-0 top-[-0px] absolute">
            <img src='/icons/discord_2.svg'></img>

            </div>
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-center text-neutral-50 text-base font-semibold font-['Montserrat'] leading-tight">navneet</div>
        </div>
      </div>
      <div className="justify-start items-center gap-2 flex">
        <div className="text-center"><span className="text-neutral-50 text-opacity-60 text-[10px] font-semibold font-Montserrat leading-3">via </span><span className="text-neutral-50 text-opacity-60 text-[10px] font-semibold font-Montserrat leading-3">discord</span></div>
      </div>
    </div>
  </div>
</div>
  )
}
