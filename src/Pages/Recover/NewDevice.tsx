import React from 'react'
import Nav from '../../Components/RecoverNav/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Footer from '../../Components/Footer'

export default function index() {
  return (
    <div>
        <div className="w-[448px] h-[840px] dark:bg-fontLightColor bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
  <div className="flex-col justify-start items-center gap-2 flex">
    <Nav/>
  </div>
  <div className="w-[376px] mb-auto mt-10 py-3 flex-col justify-center items-start gap-1 inline-flex">
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-white text-opacity-80 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Welcome back</div>
  </div>
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-white text-opacity-80 text-lg font-semibold font-['Montserrat'] leading-snug">kunaaal@tria</div>
  </div>
</div>
  <div className=" flex-col  items-center gap-3 flex">
  <div className="w-[416px]  px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch  flex-col justify-center items-center gap-3 flex">
    <div className="self-stretch  px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
      <div className="self-stretch py-3 flex-col justify-center items-start gap-4 flex">
        <div className="self-stretch justify-center items-center gap-2 inline-flex">
          <div className="mix-blend-difference text-center text-white text-opacity-90 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">New device detected!</div>
        </div>
      </div>
      <div className="w-[376px] px-2 justify-start items-center inline-flex">
        <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']">Seems like you are logging on this device/ browser for the first time. Please recover your account or login on the browser you used previously.</div>
      </div>
    </div>
  </div>
  <div className="self-stretch  flex-col justify-center items-center flex">
    <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
      <div className="grow shrink basis-0  px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex">
        <div className="justify-center items-center flex">
          <div className="text-center text-white text-base font-semibold font-['Montserrat'] leading-tight">Recover account</div>
        </div>
      </div>
    </div>
  </div>
</div>
    <Footer/>
  </div>
</div>
    </div>
  )
}
