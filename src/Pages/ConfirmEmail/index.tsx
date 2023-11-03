import React from 'react'
import Nav from '../../Components/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Footer from '../../Components/Footer'

export default function index() {
  return (
    <div>
        <div className="w-[448px] h-[840px] bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
  <div className="flex-col justify-start items-center gap-2 flex">
    <Nav/>
  </div>
  <div className="h-[289px] flex-col  items-center gap-3 flex">
    <div className="h-[234px] flex-col justify-center items-center gap-3 flex">
      <div className="self-stretch h-[234px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex">
        <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Confirm your email</div>
          </div>
        </div>
        <div className="w-[376px] px-2 justify-start items-center inline-flex">
          <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']">This is a mandatory step of security that helps you onboard. You will need this to authorize the account integrity.</div>
        </div>
        <div className="self-stretch h-16 flex-col justify-center items-center flex">
          <div className="self-stretch py-3 justify-center items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" />
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" />
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" />
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" />
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" />
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" />
          </div>
        </div>
        <div className="w-[376px] px-2 justify-start items-center inline-flex">
          <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']">Didn’t get an email?</div>
          <div className="mix-blend-difference text-white text-opacity-80 text-sm font-medium font-['Montserrat']">Resend code</div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</div>
    </div>
  )
}
