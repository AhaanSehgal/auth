import React,{useState,useEffect} from "react";
import Navbar from "../../Components/Navbar";
import { useLocation } from 'react-router-dom';
import { FeeController, WalletController } from '@tria-sdk/web';
import { Send } from '@tria-sdk/web';
import { useParams } from 'react-router-dom'

interface param{
  chainName: string;
   payload: Send;
}

const walletType = { embedded: true };
const baseUrl = 'https://staging.tria.so';

export default function SendAsset() {


const chainName = "POLYGON";
const payload = {
    fromTriaName: "dev0@tria",
    recipientTriaName: "dev@tria",
    amount: .00001,
    tokenAddress: ""
};

const encodedParams = btoa(JSON.stringify({ chainName, payload }));
console.log("eecc",encodedParams);

console.log(encodedParams);
   const location = useLocation();
  const [params, setParams] = useState();

  const param = useParams();
  console.log("pa",param);


  const sendToken = async () => {
    console.log('sending token..!!');
    const wallet = new WalletController({
      baseUrl,
      walletType,
    });
    // await wallet.init();
    // const res = await wallet.send(params?.chainName, params?.payload);
    // console.log({ res });
  };

  const getSendFee = async (params) => {
    const fee = new FeeController({
      baseUrl,
      walletType,
    });
    console.log("fee");
    const payload = { ...params?.payload, amount: parseFloat(params?.payload?.amount) };

    const res = await fee.getSendFee(params?.chainName, payload);
    console.log({ res });
  };


  const setStateParams = async () => {
    // console.log("called");
    // const searchParams = new URLSearchParams(location.search);
    // console.log("sdf",searchParams);
    // const encodedParams = searchParams.get('params');
    const encodedParams=param.param;
    console.log("en",encodedParams);
    if (encodedParams) {
      // Decode the string
      const jsonString = atob(encodedParams);
      console.log("jsonString",jsonString);
      // Parse the JSON
     const jsonData = JSON.parse(jsonString);
      console.log("jsonData",jsonData);
      setParams(jsonData);
      getSendFee(jsonData);
    }
  };

  useEffect(() => {
    setStateParams();
  }, [param]);

  return (
      <div className="w-[448px] h-[840px] p-4 flex-col bg-white dark:bg-fontLightColor rounded-2xl justify-between items-center inline-flex">
        <div className=" px-5 flex-col justify-center items-center flex">
          <div className="w-[416px] justify-end items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-end gap-2 inline-flex" />
            <img
              className="dark:invisible visible dark:w-0"
              src="/icons/Shape.svg"
            ></img>
            <img className="dark:visible invisible W-[0] dark:W-18px " src="/icons/ShapeW.svg"></img>{" "}
          </div>
          <div className="self-stretch h-[166px] flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch border-b-2 border-zinc-500 border-opacity-10 justify-center items-center gap-4 inline-flex">
              <Navbar />
            </div>
            <div className="self-stretch h-[84px] py-3 flex-col justify-center items-center gap-4 flex">
              <div className="w-[212px] h-[60px] px-6 py-4 rounded-[52px] border-2 border-zinc-500 border-opacity-10 justify-center items-center gap-3 inline-flex">
                <img className="w-7 h-7 shadow" src="/icons/sea.svg" />
                <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">
                  https://opensea.io
                </div>
              </div>
            </div>
            <div className="self-stretch justify-center  items-center gap-2 inline-flex">
              <div className="text-center mb-2 text-stone-950 text-opacity-90 text-xl font-semibold font-montserrat leading-normal dark:text-text">
                Send Transaction
              </div>
            </div>
          </div>
          <div className="self-stretch h-[444px] py-2 flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch h-[215px] px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center flex">
              <div className="h-20 py-3 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-stone-950 text-opacity-90 text-2xl font-semibold font-montserrat leading-[28.80px] dark:text-text">
                    $1.07
                  </div>
                </div>
                <div className="self-stretch justify-center items-center gap-1 inline-flex">
                  <div className="text-center text-stone-950 text-opacity-60 text-base font-medium font-montserrat leading-tight dark:text-text">
                    2 MATIC
                  </div>
                </div>
              </div>
              <div className="w-[376px] justify-center items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-3 inline-flex">
                  <img
                    className="w-[50px] h-[50px] rounded-[50px]"
                    src="/icons/boy.svg"
                  />
                  <div className="px-2 justify-start items-center inline-flex">
                    <div className="text-center text-zinc-500 text-sm font-semibold font-montserrat leading-[16.80px] ">
                      thekaypo@tria
                    </div>
                  </div>
                </div>
                <div className="py-6 flex-col justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative">
                    <img
                      className="dark:invisible visible dark:w-0"
                      src="/icons/arrow-right.svg"
                    ></img>
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
                <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-3 inline-flex">
                  <img
                    className="w-[50px] h-[50px] rounded-[50px]"
                    src="/icons/man.svg"
                  />
                  <div className="px-2 justify-start items-center inline-flex">
                    <div className="text-center text-zinc-500 text-sm font-semibold font-montserrat leading-[16.80px]">
                      avi@tria
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[205px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug dark:text-text">
                      Network Fee
                    </div>
                    <div className="w-[18px] h-[18px] relative">
                      <div className="font-montserrat">
                        <img
                          className="dark:invisible visible dark:w-0"
                          src="/icons/info-circle.svg"
                        ></img>
                        <img
                          className="dark:visible invisible w-0 dark:w-[18px]"
                          src="/icons/info-circle-dark.svg"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-20 text-xs font-medium font-montserrat leading-[14.40px] dark:text-text">
                      Refreshes in: 30
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-end items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal font-montserrat leading-snug dark:text-text">
                      $0.024
                    </div>
                    <div className="w-[18px] h-[18px] relative">
                      <div className="font-montserrat">
                        <img
                          className="dark:invisible visible dark:w-0"
                          src="/icons/setting-2.svg"
                        ></img>
                        <img
                          className="dark:visible  invisible w-0 dark:w-[18px]"
                          src="/icons/setting-2-dark.svg"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-end items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-montserrat leading-[16.80px] dark:text-text">
                      0 MATIC
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
                  <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug dark:text-text">
                    Total Cost
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
                  <div className="text-center text-stone-950 text-opacity-60 text-lg font-medium font-montserrat leading-snug dark:text-text">
                    $1.094
                  </div>
                  <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-montserrat leading-[16.80px] dark:text-text">
                    2 MATIC
                  </div>
                </div>
              </div>
              <div className="w-[376px] px-2 justify-center items-center gap-2 inline-flex">
                <div className="justify-center items-center gap-0.5 flex">
                  <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-['Red Hat Display'] text-zinc-500">
                    More
                  </div>
                  <div className="w-[18px] h-[18px] relative">
                    <div className="font-montserrat">
                      <img
                        className="dark:invisible visible dark:w-0"
                        src="/icons/arrow-down.svg"
                      ></img>
                      <img
                        className="dark:visible invisible w-0 dark:w-[18px]"
                        src="/icons/arrow-down-dark.svg"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[104px] mt-20  flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch mt-auto h-[53px] flex-col justify-center items-center gap-4 flex">
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
            <div className="self-stretch  py-3 rounded-[44px] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
                <div className="w-[19px] h-[19px] relative rounded-[5px]" />
                <img src="/icons/logo.svg"></img>
                <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px] text-zinc-500">
                  Powered by Tria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
