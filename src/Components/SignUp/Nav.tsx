import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NavContext from '../../NavContext';

export default function Nav() {
  const navigate = useNavigate();

  const { dappLogo } = useContext(NavContext)
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
            <img className="" src={dappLogo} />
          </div>
          {/* <div className=" flex-col justify-center items-center gap-2 inline-flex">
                <img className="w-[95px] h-[95px]" src="https://www.empireofsight.com/assets/images/logo-icon.svg" />
              </div> */}
        </div>
      </div>
    </div>
  )
}
