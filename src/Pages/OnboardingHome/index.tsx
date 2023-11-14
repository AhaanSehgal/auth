import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../Components/Nav';
import ContinueWithTria from '../../Components/ContinueWithTria';
import EmailAndSocial from '../../Components/EmailAndSocial';
import ConnectWallet from '../../Components/ConnectWallet';
import HomeBackgroundVector from '../../Components/HomeBackgroundVector';
import Footer from '../../Components/Footer';
import { useListenerSO } from "@tria-sdk/connect"
import { useNavigate } from 'react-router-dom';
import NavContext from '../../NavContext';

export default function OnboardingHome() {
  const [continueWithTria, setContinueWithTria] = useState(true);
  const [emailAndSocial, setEmailAndSocial] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const navigate = useNavigate()
  const { setToken } = useContext(NavContext)


  const { eventData }: any = useListenerSO();

  useEffect(() => {
    if (eventData?.message?.accountExists === false) {
      console.log("message_event", eventData?.message)
      localStorage.setItem("accessToken", eventData?.message?.token)
      setToken(eventData?.message?.token)
      navigate(`/signUpUserName/google/${eventData?.message?.userId}`)
    } else {
      localStorage.setItem("accessToken", eventData?.message?.token)
      setToken(eventData?.message?.token)
    }
  }, [eventData])

  const toggleState = () => {
    setContinueWithTria(!continueWithTria);
    setEmailAndSocial(false);
    setConnectWallet(false)
  }
  const toggleState2 = () => {
    setContinueWithTria(false);
    setEmailAndSocial(!emailAndSocial);
    setConnectWallet(false)
  }
  const toggleState3 = () => {
    setContinueWithTria(false);
    setEmailAndSocial(false);
    setConnectWallet(!connectWallet);
  }

  return (

    // <div style={{ fontFamily: 'Montserrat' }} className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
    //   <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
    //     {' '}
    //     <HomeBackgroundVector />
    //   </div>
    //   <div className="flex-col justify-start gap-2 flex">
    //     <Nav />
    //   </div>
    //   {!continueWithTria && <div className='cursor-pointer' onClick={toggleState}>
    //     <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
    //       <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
    //         <div className="self-stretch justify-start items-center gap-2 inline-flex">
    //           <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Continue with Tria</div>
    //           <div className="px-2 py-1 bg-indigo-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
    //             <div className="text-center text-indigo-500 text-opacity-90 text-xs font-medium leading-[14.40px]">private</div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>}
    //   {continueWithTria && (
    //     <div >
    //       <ContinueWithTria toggleState={toggleState} />
    //     </div>
    //   )}
    //   {!emailAndSocial && <div className='cursor-pointer' onClick={toggleState2} >
    //     <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
    //       <div className="self-stretch h-[46px] py-3 flex-col justify-center items-center gap-4 flex">
    //         <div className="self-stretch justify-start items-center gap-2 inline-flex">
    //           <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Email & Social</div>
    //           <div className="h-[22px] px-2 py-1 bg-pink-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
    //             <div className="text-center text-pink-500 text-opacity-90 text-xs font-medium leading-[14.40px]">fast</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>}
    //   {emailAndSocial && (
    //     <div >
    //       <EmailAndSocial toggleState2={toggleState2} />
    //     </div>
    //   )}
    //   {!connectWallet && <div className='cursor-pointer' onClick={toggleState3}>
    //     <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
    //       <div className="self-stretch h-[46px] py-3 flex-col justify-start items-center gap-4 flex">
    //         <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
    //           <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Connect a Wallet</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>}
    //   {connectWallet && (
    //     <div>
    //       <ConnectWallet toggleState3={toggleState3} />
    //     </div>
    //   )}
    //   <div className="self-stretch h-[43px] py-3 rounded-[44px] flex-col justify-start items-start gap-3 flex">
    //     <div className="self-stretch justify-center gap-2 inline-flex">
    //       <div className="w-[19px] h-[19px] relative rounded-[5px]" />
    //       {/* Tria Logo */}
    //       <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g clip-path="url(#clip0_240_3997)">
    //           <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0H0V19H19V0ZM10.079 5.60869V8.07896L14.1585 6.47031V8.29788C14.1585 8.68991 13.9298 9.04048 13.5854 9.17628L10.079 10.559V8.73509C10.0767 8.34551 9.84853 7.99783 9.5059 7.86274L6.57263 6.70603C6.22823 6.57021 5.99951 6.21964 5.99951 5.82761V4.00003L10.079 5.60869ZM10.079 10.5699V11.0459H10.0848V16.2081H8.404V12.3894L6.57263 11.6672C6.22823 11.5314 5.99951 11.1809 5.99951 10.7888V8.96124L10.079 10.5699Z" fill="#808080" fill-opacity="0.4" />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_240_3997">
    //             <rect width="19" height="19" rx="5" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //       <div style={{ fontFamily: 'Montserrat' }} className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold leading-[16.80px]">
    //         Powered by Tria
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div className="w-[448px] rounded-2xl dark:bg-fontLightColor h-[840px] p-4 flex-col  justify-between inline-flex">
      <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
        {' '}
        <HomeBackgroundVector />
      </div>
      <div className="flex-col justify-start gap-2   flex">
        <div>
          <div className="w-[416px]  justify-between items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
              {/* <div className=" relative" >
                <button onClick={() => { navigate("/") }}> <img src='/icons/close.svg'></img> </button>
              </div> */}
            </div>
            <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
              {/* <img src='/icons/Shape.svg'></img> */}
            </div>
          </div>
          <div className="h-[221px] px-5 py-6 flex-col justify-center  gap-4 flex">
            <div className="self-stretch py-2  justify-center  gap-2 inline-flex">
              <div className=" flex-col justify-center  gap-2 inline-flex">
                <img className="w-[95px] h-[95px]" src="https://www.empireofsight.com/assets/images/logo-icon.svg" />
              </div>
            </div>
            <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch justify-center  gap-2 inline-flex">
                <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug dark:text-text">Login to Empire of Sight</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-auto'>
        <EmailAndSocial />
      </div>

      <Footer />
    </div>
  );
}
