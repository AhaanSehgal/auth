import React from 'react'
import Nav from '../../Components/SignUp/Nav'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer';

export default function Welcome() {
    const navigate= useNavigate();
  return (
    <div>
        <div className="w-[448px] h-[840px] p-4 bg-white dark:bg-fontLightColor rounded-2xl flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center gap-2 flex">
        <div className="w-[416px] justify-between items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
            <div className=" relative" >
        <button onClick={()=>{navigate("/")}}> <img src='/icons/close.svg'></img> </button>
        </div>
                   </div>
                   <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
                        {/* <img src='/icons/Shape.svg'></img> */}
                         </div>
                  </div>
          <Nav/>
          <div className="w-[376px] mb-auto h-[79px] py-3 flex-col justify-center items-start gap-1 inline-flex">
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-stone-950 text-opacity-90 text-2xl font-normal font-['Montserrat'] leading-[28.80px] dark:text-text">Welcome to Tria</div>
  </div>
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-stone-950 text-opacity-90 text-lg font-semibold font-['Montserrat'] leading-snug dark:text-text">kunaaal@tria</div>
  </div>
</div>

          </div>
          <div className="w-[416px] h-[231px] mt-auto px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[127px] flex-col justify-center items-center gap-3 flex">
    <div className="self-stretch h-[127px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
      <div className="self-stretch h-[53px] py-3 flex-col justify-center items-start gap-4 flex">
        <div className="self-stretch justify-center items-center gap-2 inline-flex">
          <div className="mix-blend-difference text-center text-white text-opacity-90 text-2xl font-normal font-Montserrat leading-[28.80px]">
            Continue to <span className="text-2xl font-medium leading-[28.80px]">Opensea!</span>
          </div>
        </div>
      </div>
      <div className="w-[376px] px-2 justify-start items-center inline-flex">
        <div className="grow shrink basis-0 mix-blend-difference">
          <span className="text-white text-opacity-50 text-sm font-normal font-Montserrat">Your </span>
          <span className="text-white text-opacity-90 text-sm font-bold font-Montserrat">@tria</span>
          <span className="text-white text-opacity-50 text-sm font-normal font-Montserrat"> wallet is created and can be used on any device and blockchain.</span>
        </div>
      </div>
    </div>
  </div>
  <div className="self-stretch h-16 flex-col justify-center items-center flex">
    <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex">
        <div className="justify-center items-center flex">
          <button onClick={()=>{navigate("/onboarding")}} ><div className="text-center text-white text-base font-semibold font-Montserrat leading-tight">Continue</div></button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="w-[416px] h-[78px] px-5 py-4 mix-blend-difference rounded-2xl border border-white border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[46px] py-3 flex-col justify-center items-center gap-4 flex">
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="w-[19px] h-[19px] relative rounded-[5px]" />
      <img src="/icons/teth2.svg" alt="logo" />
      <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Set up Tria Wallet</div>
    </div>
  </div>
</div>
<Footer/>
          </div>
    </div>
  )
}
