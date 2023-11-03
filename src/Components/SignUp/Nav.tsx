import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
    const navigate=useNavigate();
  return (
    <div>
        {/* <div className="w-[416px] justify-between items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
            <div className=" relative" >
        <button onClick={()=>{navigate("/")}}> <img src='/icons/close.svg'></img> </button>
        </div>
                   </div>
                   <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
                        <img src='/icons/Shape.svg'></img>
                         </div>
                  </div> */}
                     <div className="h-[221px] px-5 py-6 flex-col justify-center items-center gap-4 flex">
               <div className="self-stretch py-2  justify-center items-center inline-flex">
              <div className="w-[95px] h-[95px] relative rounded-[127px] ">
                <div className="w-[95px] h-[95px] left-0 top-0 absolute">
                  <img className="w-[95px] h-[95px] left-[28px]  absolute" src="/icons/img.svg" />
                </div>
              </div>
              <div className=" flex-col justify-center items-center gap-2 inline-flex">
                <img className="w-[95px] h-[95px]" src="/icons/sea.svg" />
              </div>
            </div>
    </div>
    </div>
  )
}
