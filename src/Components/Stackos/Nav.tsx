import React, { useContext } from 'react'
import NavContext from '../../NavContext'

export default function Nav() {

  const { dappLogo, dappName } = useContext(NavContext)

  return (
    <div>
      <div className="w-[416px] h-[39.50px] justify-end items-start inline-flex">
        {/* <div className="p-3 rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
          <img src='/icons/ShapeW.svg'></img>
        </div> */}
      </div>
      <div className="w-[416px]  px-5 py-6 flex-col justify-center items-center gap-4 inline-flex">
        <div className="w-[95px]  relative bg-stone-950 rounded-[67.31px] shadow">
          <img src={dappLogo}></img>
          <div className="w-[14.66px]  left-[40.17px] top-[40.17px] absolute bg-lime-400 rounded-full blur-[40.71px]" />
        </div>
        <div className="self-stretch  py-3 flex-col justify-center items-start gap-4 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Log in with {dappName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
