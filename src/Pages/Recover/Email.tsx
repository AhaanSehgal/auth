import React from 'react'
import Nav from '../../Components/RecoverNav/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Footer from '../../Components/Footer'

export default function Email() {
  return (
    <div>
      <div className="w-full h-full min-h-screen dark:bg-fontLightColor bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
        <div className="flex-col w-full h-full  justify-start items-center gap-2 flex">
          <Nav />
        </div>
        {/* <div className="w-[376px]  py-3 ml-auto flex-col justify-center items-start gap-1 inline-flex"> */}
        <div className="self-stretch justify-center mb-auto mt-12 items-center gap-2 inline-flex">
          <div className="text-center text-white text-opacity-80 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Recover your account</div>
        </div>
        {/* </div> */}
        <div className="flex-col w-full h-full  items-center gap-3 flex">
          <div className=" flex-col w-full h-full justify-center items-center gap-3 flex">
            <div className="self-stretch px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch  py-3 flex-col justify-center items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Confirm your email</div>
                </div>
              </div>
              <div className="px-2 justify-start items-center inline-flex">
                <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']">This is a mandatory step of security that helps you onboard. You will need this to authorize the account integrity.</div>
              </div>
              <div className="self-stretch flex-col justify-center items-center flex">
              <div className="self-stretch py-3 justify-center items-center gap-4 inline-flex">
  <div className="grow shrink basis-0 h-10 w-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-full" />
  <div className="grow shrink basis-0 h-10 w-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-full" />
  <div className="grow shrink basis-0 h-10 w-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-full" />
  <div className="grow shrink basis-0 h-10 w-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-full" />
  <div className="grow shrink basis-0 h-10 w-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-full" />
  <div className="grow shrink basis-0 h-10 w-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-full" />
</div>

              </div>
              <div className=" px-2 justify-start items-center inline-flex">
                <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']">Didn’t get an email?</div>
                <div className="mix-blend-difference text-white text-opacity-80 text-sm font-medium font-['Montserrat']">Resend code</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
