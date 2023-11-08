import { useNavigate } from 'react-router-dom';
import { useSocialLoginConnectors } from '../socialLogins/socialLoginConnectors';
import { useEffect, useState, useContext } from 'react';
import NavContext from '../NavContext';
import axios from "axios"
import Iframe from './Iframe';
import { useConnect } from 'wagmi';


export default function EmailAndSocial(props: any) {

  //@ts-ignore
  const { setView, authController, email, setEmail, showOnboarding } = useContext(NavContext)
  const socialLogins = useSocialLoginConnectors();
  const [authenticated, setAuthenticated] = useState(false);
  // const [email, setEmail] = useState("");
  const [openIframe, setOpenFrame] = useState(false)
  const [openLoginFrame, setOpenLoginFrame] = useState(false)

  //Wagmi Connector
  const { connect, connectors } = useConnect();


  const baseUrl = 'https://staging.tria.so'

  const socialLoginClicked = async (socialLoginIndex: number) => {
    // const left = window.screenX + (window.outerWidth) / 2;
    const top = window.screenY + (window.outerHeight) / 2.5;
    const socialNetwork = socialLogins[socialLoginIndex].type
    localStorage.setItem('socialNetwork', socialNetwork);
    try {
      //window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}`, '_blank');
      setOpenFrame(true)
      window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}?origin=${window?.origin}`, "SSO", `width=${500},height=${600},left=${0},top=${top}`);
    } catch (err) {
      console.log(err);
    }
  };


  // useEffect(() => {
  //   async function submitData() {
  //     const searchParams = new URLSearchParams(location.search);
  //     const code = searchParams.get('code');
  //     const scope = searchParams.get('scope');
  //     const state = searchParams.get('state');
  //     console.log('state', state);
  //     if (code && scope && state === 'google') {
  //       const {
  //         data: { userId, isAccountExist, password, isPasswordRequired },
  //       } = await axios.get(
  //         `${baseUrl}/api/v1/auth/google/callback?code=${code}&scope=${scope}`
  //       );
  //       console.log(userId);
  //       // setActiveSocialMedia('google');
  //       // setId(userId);
  //       // setPassword(password);
  //       // setIsPasswordRequired(isPasswordRequired);
  //       // setIsExist(isAccountExist);
  //       // setFlag(false);
  //       // navigate('/');
  //     } else if (code && state === 'instagram') {
  //       const { data } = await axios.get(
  //         `${baseUrl}/api/v1/auth/instagram/callback?code=${code}`
  //       );
  //       console.log(data);
  //       // setId(id);
  //       // setActiveSocialMedia('instagram');
  //       // setPassword(password);
  //       // setIsPasswordRequired(isPasswordRequired);
  //       // setIsExist(isAccountExist);
  //       // setFlag(false);
  //       // navigate('/');
  //     }
  //   }
  //   try {
  //     submitData();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);
  useEffect(() => {
    if (authenticated) {
      setTimeout(() => {
        setAuthenticated(false)
      }, 4000)
    }
  }, [authenticated]);

  const checkEmailExists = async () => {
    //  const res=await authController.
  }

  return (
    <div>
      {openIframe === true ? <Iframe /> : null}
      {openLoginFrame === true ?
        <div className="mb-4 mr-2 absolute right-0 bottom-0 left-0 bg-black">
          <iframe width="450" height="1000" src={`https://auth-7rin.vercel.app/signInPassword/${email}`} />
        </div>
        : null}
      <button>
        <div className="w-[416px] h-[260px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-[376px] h-[54px] py-3 justify-center items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
              <div onClick={props.toggleState2} className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Continue with email</div>
              {/* <div className="h-[22px] px-2 py-1 bg-pink-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
                <div className="text-center text-pink-500 text-opacity-90 text-xs font-medium font-['Montserrat'] leading-[14.40px]">fast</div>
              </div> */}
            </div>
            <div className="justify-start items-start flex">
              <div className="px-3 py-1.5 bg-stone-950 bg-opacity-20 rounded-tl-[20px] rounded-bl-[20px] justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] justify-center items-center flex">
                  {/* <img src='/icons/sms.svg'></img> */}
                  <div className="w-[18px] h-[18px] relative">
                  </div>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-stone-950 bg-opacity-5 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] justify-center items-center flex">
                  {/* <img src='/icons/call.svg'></img> */}
                  <div className="w-[18px] h-[18px] relative">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
            <input className="grow shrink basis-0 h-10 px-5 py-3 font-Montserrat bg-white bg-opacity-5 rounded-[20px] justify-start items-center flex" type="email" placeholder='your@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* <div className="justify-start items-center flex">
                <div className="text-center text-stone-950 text-opacity-30 text-base font-normal font-Montserrat leading-tight">your@email.com</div>
                <input type='email' ></input>
              </div> */}
            {/* </div> */}
            <div onClick={() => setOpenLoginFrame(true)} className="w-[99px] h-10 px-5 py-3 bg-white rounded-[20px] justify-center items-center flex">
              <div className="justify-center items-center flex">
                <button><div className="text-center text-black text-base font-semibold font-Montserrat leading-tight" onClick={checkEmailExists}>Next</div></button>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[0px] border-2 border-white border-opacity-25"></div>
            <div className="px-2 justify-center items-center flex">
              <div className="text-center text-white text-opacity-25 text-xs font-semibold font-Montserrat uppercase leading-[14.40px]">OR</div>
            </div>
            <div className="grow shrink basis-0 h-[0px] border-2 border-white border-opacity-25"></div>
          </div>
          <div className="">
            {authenticated === false ? <div className='self-stretch px-5 py-2 justify-center items-center gap-5 inline-flex'>
              {
                socialLogins?.map((social, index) => {
                  return (
                    <div onClick={() => socialLoginClicked(index)}>
                      {social?.iconUrl}
                    </div>
                  )
                })
              }
              {/* Metamask Login */}

              {/* <div onClick={() => { connect({ connector: connectors[2] }) }}>
                <div className='h-10 w-10 bg-white rounded-full flex center justify-center items-center'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" fill="#1E1E1E" />
                    <g id="Email - sign up">
                      <path d="M-338 -827C-338 -828.105 -337.105 -829 -336 -829H2281C2282.1 -829 2283 -828.105 2283 -827V228C2283 229.105 2282.1 230 2281 230H-336C-337.105 230 -338 229.105 -338 228V-827Z" fill="#404040" />
                      <g id="Card" filter="url(#filter0_ddd_1_2)">
                        <g clip-path="url(#clip0_1_2)">
                          <rect x="-270" y="-711" width="448" height="840" rx="20" fill="#101010" />
                          <g id="Frame 45">
                            <g id="Modal Content - initial - Black bg">
                              <g id="Frame 1800">
                                <g id="div.relative" clip-path="url(#clip1_1_2)">
                                  <g id="Frame 1801" filter="url(#filter1_dd_1_2)">
                                    <rect x="-6" y="-6" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
                                    <g id="Frame 1000003111">
                                      <g id="Wallet">
                                        <rect width="28" height="28" rx="6" fill="white" />
                                        <g id="metamask-fox 1">
                                          <path id="Vector" d="M24.0892 3.12012L15.3447 9.61478L16.9618 5.78302L24.0892 3.12012Z" fill="#E2761B" stroke="#E2761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <g id="Group">
                                            <path id="Vector_2" d="M3.9021 3.12012L12.5763 9.6763L11.0383 5.78302L3.9021 3.12012Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_3" d="M20.943 18.1748L18.614 21.7429L23.5971 23.1139L25.0296 18.2539L20.943 18.1748Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_4" d="M2.97925 18.2539L4.40298 23.1139L9.38603 21.7429L7.05709 18.1748L2.97925 18.2539Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_5" d="M9.10488 12.1458L7.71631 14.2462L12.6642 14.4659L12.4884 9.14893L9.10488 12.1458Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_6" d="M18.8862 12.1458L15.4587 9.0874L15.3445 14.4659L20.2836 14.2462L18.8862 12.1458Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_7" d="M9.38599 21.7429L12.3565 20.2928L9.79025 18.2891L9.38599 21.7429Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_8" d="M15.6345 20.2928L18.6138 21.7429L18.2007 18.2891L15.6345 20.2928Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                          <g id="Group_2">
                                            <path id="Vector_9" d="M18.6138 21.7426L15.6345 20.2925L15.8718 22.2347L15.8454 23.0521L18.6138 21.7426Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_10" d="M9.38599 21.7426L12.1543 23.0521L12.1368 22.2347L12.3565 20.2925L9.38599 21.7426Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                          <path id="Vector_11" d="M12.1983 17.0058L9.71997 16.2763L11.4689 15.4766L12.1983 17.0058Z" fill="#233447" stroke="#233447" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <path id="Vector_12" d="M15.7927 17.0058L16.5222 15.4766L18.2799 16.2763L15.7927 17.0058Z" fill="#233447" stroke="#233447" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <g id="Group_3">
                                            <path id="Vector_13" d="M9.38607 21.7424L9.80791 18.1743L7.05713 18.2534L9.38607 21.7424Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_14" d="M18.1921 18.1743L18.614 21.7424L20.9429 18.2534L18.1921 18.1743Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_15" d="M20.2838 14.2461L15.3447 14.4658L15.8017 17.0057L16.5312 15.4765L18.2889 16.2762L20.2838 14.2461Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_16" d="M9.72007 16.2762L11.4778 15.4765L12.1984 17.0057L12.6642 14.4658L7.71631 14.2461L9.72007 16.2762Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                          <g id="Group_4">
                                            <path id="Vector_17" d="M7.71631 14.2461L9.79038 18.2888L9.72007 16.2762L7.71631 14.2461Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_18" d="M18.2888 16.2762L18.2009 18.2888L20.2838 14.2461L18.2888 16.2762Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_19" d="M12.6643 14.4658L12.1985 17.0057L12.7785 20.0025L12.9103 16.0565L12.6643 14.4658Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_20" d="M15.3447 14.4658L15.1074 16.0477L15.2129 20.0025L15.8017 17.0057L15.3447 14.4658Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                          <path id="Vector_21" d="M15.8017 17.0058L15.2129 20.0027L15.6347 20.2927L18.201 18.2889L18.2888 16.2764L15.8017 17.0058Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <path id="Vector_22" d="M9.71997 16.2764L9.79028 18.2889L12.3565 20.2927L12.7784 20.0027L12.1983 17.0058L9.71997 16.2764Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <path id="Vector_23" d="M15.8455 23.0522L15.8719 22.2348L15.6522 22.0415H12.3389L12.1368 22.2348L12.1543 23.0522L9.38599 21.7427L10.3527 22.5336L12.3125 23.8958H15.6785L17.6471 22.5336L18.6139 21.7427L15.8455 23.0522Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <path id="Vector_24" d="M15.6348 20.2925L15.2129 20.0024H12.7785L12.3567 20.2925L12.137 22.2347L12.3391 22.0414H15.6523L15.8721 22.2347L15.6348 20.2925Z" fill="#161616" stroke="#161616" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <g id="Group_5">
                                            <path id="Vector_25" d="M24.4581 10.0366L25.2051 6.45094L24.089 3.12012L15.6345 9.39507L18.8862 12.1459L23.4826 13.4905L24.5021 12.304L24.0626 11.9877L24.7657 11.3461L24.2208 10.9243L24.9239 10.3882L24.4581 10.0366Z" fill="#763D16" stroke="#763D16" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Vector_26" d="M2.79468 6.45094L3.5417 10.0366L3.06712 10.3882L3.7702 10.9243L3.2341 11.3461L3.93718 11.9877L3.49775 12.304L4.50843 13.4905L9.10478 12.1459L12.3565 9.39507L3.90202 3.12012L2.79468 6.45094Z" fill="#763D16" stroke="#763D16" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                          <path id="Vector_27" d="M23.4828 13.4901L18.8864 12.1455L20.2838 14.2459L18.2009 18.2886L20.9429 18.2535H25.0296L23.4828 13.4901Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <path id="Vector_28" d="M9.1048 12.1455L4.50844 13.4901L2.97925 18.2535H7.05709L9.7903 18.2886L7.71622 14.2459L9.1048 12.1455Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                          <path id="Vector_29" d="M15.3447 14.4657L15.6347 9.39477L16.9705 5.78271H11.0383L12.3566 9.39477L12.6642 14.4657L12.7697 16.0652L12.7784 20.0024H15.2128L15.2304 16.0652L15.3447 14.4657Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0878845" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <rect x="-253.25" y="-201.25" width="414.5" height="258.5" rx="15.25" stroke="url(#paint0_linear_1_2)" stroke-opacity="0.3" stroke-width="1.5" />
                              </g>
                            </g>
                          </g>
                        </g>
                        <rect x="-269" y="-710" width="446" height="838" rx="19" stroke="url(#paint1_linear_1_2)" stroke-width="2" />
                      </g>
                      <path d="M-336 -828H2281V-830H-336V-828ZM2282 -827V228H2284V-827H2282ZM2281 229H-336V231H2281V229ZM-337 228V-827H-339V228H-337ZM-336 229C-336.552 229 -337 228.552 -337 228H-339C-339 229.657 -337.657 231 -336 231V229ZM2282 228C2282 228.552 2281.55 229 2281 229V231C2282.66 231 2284 229.657 2284 228H2282ZM2281 -828C2281.55 -828 2282 -827.552 2282 -827H2284C2284 -828.657 2282.66 -830 2281 -830V-828ZM-336 -830C-337.657 -830 -339 -828.657 -339 -827H-337C-337 -827.552 -336.552 -828 -336 -828V-830Z" fill="white" fill-opacity="0.1" />
                    </g>
                    <defs>
                      <filter id="filter0_ddd_1_2" x="-300" y="-739" width="508" height="900" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.2 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="15" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.08 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.03 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_1_2" result="effect3_dropShadow_1_2" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_2" result="shape" />
                      </filter>
                      <filter id="filter1_dd_1_2" x="-11" y="-11" width="50" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4.99999" />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_1_2" result="effect2_dropShadow_1_2" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_1_2" x1="-254" y1="-202" x2="162" y2="58" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#9F8BFF" />
                        <stop offset="1" stop-color="#7053FF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1_2" x1="-270" y1="-711" x2="388.451" y2="-485.496" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#808080" stop-opacity="0.05" />
                        <stop offset="0.523776" stop-color="#808080" stop-opacity="0" />
                        <stop offset="1" stop-color="#808080" stop-opacity="0.15" />
                      </linearGradient>
                      <clipPath id="clip0_1_2">
                        <rect x="-270" y="-711" width="448" height="840" rx="20" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_1_2">
                        <rect width="376" height="56" fill="white" transform="translate(-234 -14)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div> */}

              {/* Wallet Connect */}
              {/* <div onClick={() => { connect({ connector: connectors[1] }) }}>
                <div className='h-10 w-10 bg-[#3B99FC] rounded-full flex center justify-center items-center'>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="6" fill="#3B99FC" />
                    <path d="M8.38969 10.3737C11.4882 7.27518 16.5118 7.27518 19.6103 10.3737L19.9832 10.7466C20.1382 10.9015 20.1382 11.1527 19.9832 11.3076L18.7076 12.5833C18.6301 12.6607 18.5045 12.6607 18.4271 12.5833L17.9139 12.0701C15.7523 9.90851 12.2477 9.90851 10.0861 12.0701L9.53655 12.6197C9.45909 12.6971 9.3335 12.6971 9.25604 12.6197L7.98039 11.344C7.82547 11.1891 7.82547 10.9379 7.98039 10.783L8.38969 10.3737ZM22.2485 13.0118L23.3838 14.1472C23.5387 14.3021 23.5387 14.5533 23.3838 14.7082L18.2645 19.8275C18.1096 19.9825 17.8584 19.9825 17.7035 19.8276C17.7035 19.8276 17.7035 19.8276 17.7035 19.8276L14.0702 16.1942C14.0314 16.1555 13.9686 16.1555 13.9299 16.1942C13.9299 16.1942 13.9299 16.1942 13.9299 16.1942L10.2966 19.8275C10.1417 19.9825 9.89053 19.9825 9.73561 19.8276C9.7356 19.8276 9.7356 19.8276 9.7356 19.8276L4.61619 14.7081C4.46127 14.5532 4.46127 14.302 4.61619 14.1471L5.75152 13.0118C5.90645 12.8569 6.15763 12.8569 6.31255 13.0118L9.94595 16.6452C9.98468 16.6839 10.0475 16.6839 10.0862 16.6452C10.0862 16.6452 10.0862 16.6452 10.0862 16.6452L13.7194 13.0118C13.8743 12.8568 14.1255 12.8568 14.2805 13.0118C14.2805 13.0118 14.2805 13.0118 14.2805 13.0118L17.9139 16.6452C17.9526 16.6839 18.0154 16.6839 18.0541 16.6452L21.6874 13.0118C21.8424 12.8569 22.0936 12.8569 22.2485 13.0118Z" fill="white" />
                  </svg>
                </div>
              </div> */}

            </div> :
              <div className='px-8 py-2 bg-green-400 text-green-700 font-bold font-Montserrat rounded-md'>
                Authenticated
              </div>}
          </div>
          {/* <div className="w-10 h-10 p-[3.33px] bg-neutral-50 rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex">
              <div onClick={() => authGoogle()} className="w-6 h-6 relative"  >
                <img src="/icons/google.svg" />
              </div>

            </div>
            <div className="w-10 h-10 p-[3.33px] bg-neutral-50 rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex">
              <div className="w-5 h-[18.07px] relative" >
                <img src='/icons/x.svg' />
              </div>
            </div>
            <div className="w-10 h-10 p-[3.33px] bg-neutral-50 rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex">
              <div className="w-[23.33px] h-[18.08px] relative">
                <img src="/icons/discord.svg" />
                <div className="w-[23.33px] h-[18.08px] left-0 top-0 absolute">
                </div>
              </div>
            </div> */}
        </div>
      </button>
    </div>
  )
}
