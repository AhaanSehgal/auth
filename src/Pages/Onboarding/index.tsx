import React, { useContext } from 'react'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom'
import NavContext from '../../NavContext'

export default function Onboarding() {
  const navigate = useNavigate();
  const { setView } = useContext(NavContext)

  return (
    <div>  <div className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
      <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
        {' '}
        <HomeBackgroundVector />
      </div>
      <div className="flex-col justify-start gap-2 flex">
        {/* <Nav /> */}
        {/* <div className="w-[376px] h-[79px] py-3 flex-col justify-center items-start gap-1 inline-flex">
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-stone-950 text-opacity-90 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Welcome to Opensea</div>
  </div>
  <div className="self-stretch justify-center items-center gap-2 inline-flex">
    <div className="text-center text-stone-950 text-opacity-90 text-lg font-semibold font-['Montserrat'] leading-snug">kunaaal@tria</div>
  </div>
</div> */}
        <div className="w-[416px] h-10 justify-between items-start inline-flex">
          <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="relative" >
              <button onClick={() => setView("Welcome")}> <img src='/icons/close.svg'></img> </button>
            </div>
          </div>
          <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
            <img src='/icons/Shape.svg'></img>
          </div>
        </div>


        <div className="w-[416px] h-[254px] px-5 py-6 flex-col justify-center items-center gap-4 inline-flex">
          <div className="self-stretch py-2  justify-center items-center inline-flex">
            <div className=" flex-col justify-center items-center gap-2 inline-flex">
              <img className="w-[95px] h-[95px]" src="/icons/sea.png" />
            </div>
          </div>
          <div className="self-stretch h-[79px] py-3 flex-col justify-center items-start gap-1 flex">
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-90 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Welcome to Opensea</div>
            </div>
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-90 text-lg font-semibold font-['Montserrat'] leading-snug">kunaaal@tria</div>
            </div>
          </div>
        </div>


      </div>
      <div className="w-[416px] h-[455px] px-5 py-4 rounded-2xl border  border-violet-400 border-opacity-30 flex-col justify-between items-center inline-flex">
        <div className="self-stretch h-[348px] flex-col justify-start items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-stone-100 overflow-y-scroll gap-4 flex">
          <div className="self-stretch h-[92px] py-3 flex-col justify-start items-center gap-4 flex">
            <div className="w-[376px] px-2 justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-stone-950 text-opacity-80 text-sm font-semibold font-Montserrat">
                Opensea
                <span className="text-zinc-500 text-opacity-80 text-sm font-normal font-Montserrat"> </span>
                <span className="text-zinc-500 text-opacity-80 text-sm font-medium font-Montserrat">
                  is excited to have you as a member of the community. To continue to the application, please fill the following form so that we could serve you better.
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[382px] flex-col justify-start items-center  gap-4 flex">
            <div className="self-stretch h-[65px] flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch px-2 justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]">Name</div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                  <div className="h-[11px] justify-start items-center flex">
                    <div className="text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight">kunaaal</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[65px] flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch px-2 justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]">Email</div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                  <div className="h-[11px] justify-start items-center flex">
                    <div className="text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight">
                      kunaaal
                      <span className="text-zinc-500 text-opacity-60 text-base font-normal font-Montserrat leading-tight">@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[65px] flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch px-2 justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]">Gender</div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-between items-center flex">
                  <div className="h-[11px] justify-start items-center flex">
                    <div className="text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight">Male</div>
                  </div>
                  <div className="w-[18px] h-[18px] justify-center items-center flex">
                    <div className="w-[18px] h-[18px] relative"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[65px] flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch px-2 justify-start items-center gap-2 inline-flex">
                <div className="text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]">DOB</div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="w-20 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                  <div className="h-[11px] justify-start items-center flex">
                    <div className="text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight">DD</div>
                  </div>
                </div>
                <div className="w-20 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                  <div className="h-[11px] justify-start items-center flex">
                    <div className="text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight">MM</div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                  <div className="h-[11px] justify-start items-center flex">
                    <div className="text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight">YYYY</div>
                  </div>
                </div>
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative"></div>
                  <img src='/icons/calendar.svg'></img>
                </div>
              </div>
            </div>
            <div className="self-stretch py-3 justify-center items-center gap-3 inline-flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative"></div>
                <img src='/icons/no-tick-square.svg'></img>
              </div>
              {/* <img src='/icons/tick-square.svg'></img> */}
              <div className="grow shrink basis-0 text-zinc-500 text-sm font-medium font-Montserrat">
                I agree to receive marketing and promotional emails sent from Opensea.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-16 flex-col justify-center items-center flex">
          <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex">
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-base font-semibold font-Montserrat leading-tight">Continue</div>
              </div>
            </div>
          </div>


        </div>

      </div>
      <Footer />

    </div>


    </div>
  )
}
