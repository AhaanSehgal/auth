import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  // const [showWallet, setShowWallet] = useState(false);
  const navigate= useNavigate();
  return (
    <div>
        <div className="w-[416px] justify-between items-start inline-flex">
           <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
        <div className=" relative" >
        <button onClick={()=>{navigate("/")}}> <img src='/icons/close.svg'></img> </button>
        </div>
        
      </div>
      <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
      <img src='/icons/Shape.svg'></img>
      </div>
        </div>
        <div className="h-[221px] px-5 py-6 flex-col justify-center  gap-4 flex">
            <div className="self-stretch py-2  justify-center  gap-2 inline-flex">
              <div className=" flex-col justify-center  gap-2 inline-flex">
                <img className="w-[95px] h-[95px]" src="https://www.empireofsight.com/assets/images/logo-icon.svg" />
              </div>
            </div>
            <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch justify-center  gap-2 inline-flex">
                <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Login to Empire of Sight</div>
              </div>
            </div>
          </div>
    </div>
  )
}


