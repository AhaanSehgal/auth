import React, { useState } from 'react';
import Nav from '../../Components/SignUp/Nav';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

export default function SignUp() {
const navigate= useNavigate();
  return (
    <div>
      <div className="w-[448px] h-[840px] p-4 bg-white rounded-2xl flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center gap-2 flex">
        <div className="w-[416px] justify-between items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
            <div className=" relative" >
        <button onClick={()=>{navigate("/signUpUserName")}}> <img src='/icons/close.svg'></img> </button>
        </div>
                   </div>
                   <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
                        <img src='/icons/Shape.svg'></img>
                         </div>
                  </div>
          <Nav/>
          <div className="w-[376px] h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex">
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Creating your Tria account</div>
  </div>
</div>
<div className="w-[416px]  h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex">
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center  text-stone-950 text-opacity-90 text-lg font-normal font-Montserrat leading-snug">
      Hello,<span className="text-stone-950 text-opacity-90 text-lg font-semibold leading-snug"> kunaaal@tria</span>
    </div>
  </div>
</div>

        </div>
        
        <div className="self-stretch h-[243px]  flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch h-48 mb-2 flex-col justify-center items-center gap-3 flex">
               
              <div className="w-[416px] h-[209px] flex-col justify-center items-center gap-3 inline-flex">
  <div className="self-stretch h-[209px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex">
    <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-montserrat leading-snug">Set up your password</div>
      </div>
    </div>
    <div className="w-[376px] px-2 justify-start items-center inline-flex">
      <div className="grow shrink basis-0 mix-blend-difference">
        <span className="text-white text-opacity-50 text-sm font-normal font-montserrat">This is a mandatory additional layer of security that protects your </span>
        <span className="text-white text-opacity-90 text-sm font-bold font-montserrat">@tria</span>
        <span className="text-white text-opacity-50 text-sm font-normal font-montserrat">. You will need this to authorize most actions.</span>
      </div>
    </div>
    <div className="self-stretch h-16 flex-col justify-center items-center flex">
      <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
          <div className="justify-start items-center flex">
            <div className="mix-blend-difference text-center text-white text-opacity-50 text-base font-normal font-montserrat leading-tight">Password</div>
          </div>
        </div>
        <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
          <div className="justify-center items-center flex">
          <button onClick={()=>{navigate('/signUpConfirmPassword')}}><div className="text-center text-stone-950 text-base font-semibold font-montserrat leading-tight">Next</div></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
    <Footer/>
  </div>
</div>
        </div>
  );
}
