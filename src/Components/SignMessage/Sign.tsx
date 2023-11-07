import React,{useState,useEffect} from 'react';
import Navbar from './Nav';

interface params {
  chainName:string;
  message:string;
  loginType:string;
  triaName:string,
  socialName:string,
  userId:string,
  input:string,
  appDomain:string,
  appLogo:string
}

interface Props {
  params: params;
  signMessage: () => Promise<void>;
}

const Sign: React.FC<Props> = ({ params, signMessage }) => {

  console.log("params", params, signMessage );

  return (
    <div>
      <div className="w-[448px] h-[840px] bg-white dark:bg-fontLightColor rounded-2xl p-4 flex-col justify-between items-center inline-flex">
        <div className="w-[416px] justify-end items-start inline-flex">
          <div className="p-3 mix-blend-difference rounded-[39px] flex-col justify-center items-end gap-2 inline-flex" />
          {/* <img
              className="dark:invisible visible dark:w-0"
              src="/icons/Shape.svg"
            ></img>
            <img className="dark:visible invisible W-[0] dark:W-18px " src="/icons/ShapeW.svg"></img>       */}
              </div>
        <div className="h-[190px] px-5 py-2 flex-col justify-center items-center gap-4 flex">
          <Navbar />
          <div className="w-[212px] h-[60px] px-6 py-4 rounded-[52px] border-2 border-zinc-500 border-opacity-10 justify-center items-center gap-3 inline-flex">
            <img className="w-7 h-7 shadow" src="/icons/sea.svg" />
            <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">
              {params.appDomain}
            </div>
          </div>
        </div>
        <div className="h-[130px] px-5 py-4 flex-col justify-center items-center gap-4 flex">
          <div className="self-stretch h-[98px] py-3 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-center text-neutral-600 text-xl font-semibold font-montserrat leading-normal dark:text-text">
                Sign Message
              </div>
            </div>
            <div className="w-[376px] px-2 justify-start items-center inline-flex">
              <div className="grow shrink basis-0 text-center text-neutral-600 text-opacity-80 text-sm font-normal font-montserrat leading-[16.80px]">
                Only sign this message if you fully understand the content and trust the requesting
                site.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch h-[38px] px-4 py-2 flex-col justify-center items-center gap-4 flex">
              <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
                <div className="text-center text-neutral-600 text-lg font-medium font-montserrat leading-snug dark:text-text">
                  Message:
                </div>
              </div>
            </div>
            <div className="w-[416px]  grow shrink basis-0 px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center flex">
              <div className="self-stretch grow  shrink basis-0 py-2 justify-center items-start gap-2 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-2 justify-start items-center flex">
                  <div className="grow shrink basis-0 self-stretch text-neutral-600 text-opacity-90 text-base font-normal font-montserrat leading-tight">
                    {params?.message}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[416px] h-[53px] justify-center items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 h-[53px] p-5 bg-white rounded-[58px] border border-zinc-500 border-opacity-30 justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug">
                    Reject
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[53px] p-5 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[58px] justify-center items-center flex">
                <div className="justify-center items-center flex">
                  <div className="text-center text-white text-lg font-semibold font-montserrat leading-snug">
                    Approve
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 rounded-[44px] justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
              <div className="w-[19px] h-[19px] relative rounded-[5px]" />
              <img src="/icons/logo.svg"></img>
              <div className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px]">
                Powered by Tria
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Sign;