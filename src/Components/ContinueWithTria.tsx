import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ContinueWithTria(props: any) {
  const navigate = useNavigate();
  const [triaName, setTriaName] = useState("")



  return (
    <div>
      <button>
        <div className="self-stretch  flex-col  w-[26rem]  gap-3 flex">
          <div className="self-stretch  h-[191px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col   gap-2 flex">
            <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch justify-start  gap-2 inline-flex">
                <div onClick={props.toggleState} className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Continue with Tria</div>
                <div className="h-[22px] px-2 py-1 bg-indigo-500 bg-opacity-10 rounded-[22px] justify-center  gap-2 flex">
                  <div className="text-center text-indigo-500 text-opacity-90 text-xs font-medium font-Montserrat leading-[14.40px]">private</div>
                </div>
              </div>
            </div>
            <div className="self-stretch py-3 justify-center  gap-2 inline-flex">
              <input className="grow shrink basis-0 h-10 px-5 py-3 bg-stone-950 bg-opacity-5 rounded-[20px] justify-start font-Montserrat flex" placeholder='@tria name' value={triaName} onChange={(e) => setTriaName(e.target.value)} />
              {/* <div className="justify-start  flex">
                  <div className="text-center text-stone-950 text-opacity-30 text-base font-normal font-Montserrat leading-tight">@tria name</div>
                </div> */}
              {/* </div> */}
              <div className="w-[99px] h-10 bg-stone-950 bg-opacity-90 rounded-[20px] justify-center  flex">
                <div className="justify-center  flex">
                  <button onClick={() => { navigate(`/signInPassword/${triaName}`) }}> <div className="text-center text-white text-base font-semibold font-Montserrat leading-tight">Log in</div></button>
                </div>
              </div>
            </div>
            <div className="self-stretch py-2 rounded-[44px] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-[17px] justify-start  flex">
                <div className="text-center">
                  <button onClick={() => { navigate('/signUpUserName') }}><span style={{ color: 'text-stone-950', opacity: 0.8, fontSize: 'text-sm', fontWeight: 'font-normal', fontFamily: 'font-Montserrat', lineHeight: '16.80px' }}>
                    Get started
                  </span></button>
                  <span> </span>
                  <span style={{ color: 'text-stone-950', opacity: 0.6, fontSize: 'text-sm', fontWeight: 'font-normal', fontFamily: 'font-Montserrat', lineHeight: '16.80px' }}>
                    with Tria
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}