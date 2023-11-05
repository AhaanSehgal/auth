import React from 'react';

export default function Connect({ setConnect }) {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-[100%] h-[100%] p-4 flex-col justify-center items-center gap-3 inline-flex bg-white rounded-xl font-montserrat">
        <div className="w-[100%] flex-col justify-start items-center flex"></div>
        <div className="w-[448px] h-[840px] p-4 flex-col justify-between items-center inline-flex">
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="w-[416px] justify-between items-start inline-flex">
              <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
                {/* <div className="w-6 h-6 relative" /> */}
                <img src="/icons/Arrow_left.svg"></img>
              </div>

              <div className="p-3 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" />
              <img src="/icons/Shape.svg"></img>
            </div>

            <div className="h-[258px]  py-6 flex-col justify-center items-center gap-4 flex">
              <div className="self-stretch py-2  justify-center items-center inline-flex">
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                  <img className="w-[95px] h-[95px] absolute" src="/icons/tetherene.svg" />
                </div>

                <div className=" flex-col justify-center items-center gap-2 inline-flex">
                  <img className="w-[95px] h-[95px] " src="/icons/sea.png" />
                </div>
              </div>
              <div className="self-stretch h-[83px] py-3 mix-blend-difference flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-opacity-80 text-2xl font-semibold font-['Montserrat'] leading-[28.80px]">
                    Connect to website
                  </div>
                </div>
                <div className="self-stretch justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-opacity-60 text-lg font-medium font-['Montserrat'] leading-snug">
                    opensea.io
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[444px] flex-col justify-center items-center gap-2 flex">
            <div className="h-[284px] px-5 py-6 flex-col justify-center items-center gap-4 flex">
              <div className="self-stretch py-3 justify-start items-center gap-4 inline-flex">
                <div className="p-2 bg-white rounded-[30px] border border-zinc-500 border-opacity-30 justify-center items-start gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-[-0px] top-[-0px] absolute">
                      <img src="/icons/bank.svg"></img>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-stone-950 text-opacity-60 text-lg font-medium font-['Montserrat'] leading-snug">
                    Let it see your wallet balance and activity
                  </div>
                </div>
              </div>
              <div className="self-stretch py-3 justify-start items-center gap-4 inline-flex">
                <div className="p-2 bg-white rounded-[30px] border border-zinc-500 border-opacity-30 justify-center items-start gap-2 flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src="/icons/tick-circle.svg"></img>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-stone-950 text-opacity-60 text-lg font-medium font-['Montserrat'] leading-snug">
                    Let it send you requests for transactions
                  </div>
                </div>
              </div>
              <div className="self-stretch py-3 justify-start items-center gap-4 inline-flex">
                <div className="p-2 bg-white rounded-[30px] border border-zinc-500 border-opacity-30 justify-center items-start gap-2 flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src="/icons/close-circle.svg"></img>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-11 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-stone-950 text-opacity-60 text-lg font-medium font-['Montserrat'] leading-snug">
                    Funds will not leave your wallet until you execute a transaction
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[101px] px-5 py-6 flex-col justify-center items-center gap-4 flex">
              <div className="self-stretch justify-center items-center gap-6 inline-flex">
                <div className="grow shrink basis-0 w-[11rem] h-[53px] p-5 bg-white rounded-[58px] border border-zinc-500 border-opacity-30 justify-center items-center flex">
                  <div className="justify-center items-center flex">
                    <div className="text-center text-stone-950 text-opacity-80 text-lg font-bold font-['Montserrat'] leading-snug">
                      Deny
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[53px] w-[11rem] p-5 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[58px] justify-center items-center flex">
                  <div className="justify-center items-center flex">
                    <div
                      className="text-center text-white text-lg font-semibold font-['Montserrat'] leading-snug cursor-pointer"
                      onClick={() => setConnect(false)}>
                      Connect
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch py-3 rounded-[44px] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
                <div className="w-[19px] h-[19px] relative rounded-[5px]" />
                <img src="/icons/logo.svg"></img>
                <div className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]">
                  Powered by Tria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
