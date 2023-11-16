import React from 'react'

export default function LoginDetected() {
  return (
    <div><div className="w-80 h-[215.50px] bg-stone-950 rounded-2xl border flex-col justify-center items-center inline-flex">
    <div className="self-stretch pt-3 pb-1 flex-col justify-start items-center gap-2 flex">
      <div className="self-stretch px-5 justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0  justify-start items-center gap-2 flex">
            
          <div className="w-[19px]  relative rounded-[5px]" >
          <img src='/icons/tria.svg'></img>
</div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="text-center text-zinc-400 text-sm font-medium font-['Montserrat'] leading-[16.80px]">Sign in with Tria account</div>
           
            </div>
          </div>
        </div>
        <div className="p-3 rounded-[39px]  flex-col justify-center items-center gap-2 inline-flex" >
        <img src='/icons/ShapeB.svg'></img>
</div>
      </div>
      <div className="self-stretch  px-3 py-1 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch  border border-zinc-500 border-opacity-20"></div>
      </div>
    </div>
    <div className="self-stretch  px-5 pt-3 pb-5 flex-col justify-start items-center gap-2 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <img className="w-10  rounded-[25px]" src="/icons/user.svg" />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="text-center text-neutral-50 text-base font-semibold font-['Montserrat'] leading-tight">thekaypo</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch  px-5 pt-3 pb-5 flex-col justify-start items-center gap-2 flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <img className="w-10 rounded-[25px]" src="/icons/user_2.svg" />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="text-center text-neutral-50 text-base font-semibold font-['Montserrat'] leading-tight">navneet</div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}
