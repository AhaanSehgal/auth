import React, { useContext } from 'react'
import Nav from '../../Components/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom'
import NavContext from '../../NavContext'

export default function Index() {

  const navigate = useNavigate()
  const { setContinueOnIncognito } = useContext(NavContext)

  return (
    <div>
      <div className="w-[448px] h-[840px] dark:bg-fontLightColor bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
        <div className="flex-col justify-start items-center gap-2 flex">
          <Nav />
        </div>
        {/* <div className="h-[289px] flex-col  items-center gap-3 flex"> */}
        <div className="w-[416px] mb-auto  px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch py-3 justify-center items-center gap-4 inline-flex">
            <div className="grow shrink basis-0  justify-center items-center gap-2 flex">
              <div className="w-7 relative">

                <img src='/icons/danger.svg'></img>

              </div>
              <div className="text-center text-neutral-50 text-2xl font-medium font-['Montserrat'] leading-[28.80px]">Attention!</div>
            </div>
          </div>
          <div className=" px-2 py-3 flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch mix-blend-difference text-zinc-400 text-sm font-semibold font-['Montserrat']">You might lose access your account if you are logging in or signing to this application from an Incognito tab.</div>
            <div className="self-stretch mix-blend-difference text-zinc-400 text-sm font-normal font-['Montserrat']">If you still want to, you can continue.</div>
          </div>
          <div className="self-stretch  flex-col justify-center items-center flex">
            <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
              <div onClick={() => { navigate("/"); setContinueOnIncognito(true) }} className="grow shrink basis-0 cursor-pointer  px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <div className="text-center text-white text-base font-semibold font-['Montserrat'] leading-tight">Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* </div> */}
      </div>
    </div>
  )
}
