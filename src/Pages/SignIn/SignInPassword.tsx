//@ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer';
import NavContext from '../../NavContext';
import { AuthController } from '@tria-sdk/core';
import { KeyringController } from '@tria-sdk/web';
import useWebSocket, { ReadyState } from "react-use-websocket"
// import { KeyringController } from "../../../../../packages/web/dist/controllers/keyring.controller"

export default function SignInPassword() {

  
  const triaName = useParams()

  //Socket
  const WS_URL = "wss://staging.tria.so"

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
    },
  )
  
  const [mainLoader, setMainLoader] = useState(true)
  const { setStoredPassword } = useContext(NavContext)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [signUp, setSignUp] = useState(false)
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false)
  const [showError, setShowError] = useState(false)

  //show or hide password fields
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  //password progress bar 
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? "Strong"
        : verifiedList.length >= 2
          ? "Medium"
          : "Weak";

    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);

  };

  const baseUrl = 'https://staging.tria.so';
  const walletType = {
    embedded: true,
  };

  const authController = new AuthController(
    baseUrl
  );

  const keyringController = new KeyringController({
    baseUrl,
    walletType,
  });

  useEffect(()=>{
    console.log("Connection state changed")
    if (readyState === ReadyState.OPEN) {
      // sendJsonMessage({
      //   event: "subscribe",
      //   data: {
      //     channel: "general-chatroom",
      //   },
      // })
      console.log("opened")
    }

  },[readyState])

  useEffect(() => {
    checkIfExists()
  }, [])



  const checkIfExists = async () => {
    try {
      const check = await authController.checkLinkEmailExists({ email: triaName?.param })
      console.log('check email', check)
      if (check === true) {
        setSignUp(false)
        setMainLoader(false)
      } else {
        setSignUp(true)
        setMainLoader(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const login = async () => {
    if (password.length !== 0 && /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      setLoader(true)
      if (signUp === false) {
        try {
          const check = await authController.checkLinkEmailExists({ email: triaName?.param })
          console.log('check email', check)

          const auth = await keyringController.initiateEmailLinkAuth({
            email: triaName?.param,
            password: password
          })
          console.log('auth', auth?.hash)
          console.log("input", triaName?.param)
          console.log("link", true)
          console.log("hash", auth?.hash)
          console.log("password", auth?.password)
          const vault = await keyringController.getVault({
            input: triaName?.param,
            link: true,
            hash: auth?.hash,
            password: auth?.password,
            origin: document.referrer
          })
          console.log('vault', vault)

        } catch (err) {
          console.log(err)
        }
      } else {
        if (password === confirmPassword) {
          try {
            console.log("Sign up")
            localStorage.setItem("email", triaName?.param)
            const auth = await keyringController.initiateEmailLinkAuth({
              email: triaName?.param,
              password: password,
              origin: document.referrer
            })
            navigate('/verifyAccount')
          } catch (err) {
            console.log(err)
          }
        }
      }
    } else {
      setShowError(true)
      setPassword("")
      setConfirmPassword("")
    }
  }

  // const walletType = {
  //   embedded: true,
  // };
  // const baseUrl = 'https://staging.tria.so';

  // const login = async () => {
  //   const vault = await getTriaAccount();
  //   console.log({ decryptedData: vault?.data });
  //   // if (!vault?.exists) {
  //   //   await createTriaAccount();
  //   // }
  // };

  // async function getTriaAccount() {
  //   console.log('Get Tria Account!!');
  //   const keyringController = new KeyringController({
  //     baseUrl,
  //     walletType,
  //   });
  //   console.log({ triaName, password });
  //   if (triaName && password) {
  //     const vault = await keyringController.getVault({ triaName, password });
  //     console.log({ vault });
  //     return vault;
  //   }
  // }

  return (
    <div>
      <div className="w-[448px] bg-white dark:bg-fontLightColor rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
        <div className="flex-col justify-start gap-2 flex">
          <Nav />
        </div>
        {showError === true ? <div className=' mt-28'>
          <div id="toast-danger" className="flex items-center  p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-black" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">Password should contain minimum eight characters, at least one letter, one number and one special character</div>
            <button onClick={() => setShowError(false)} type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-black dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        </div> : null}
        {mainLoader === false ? <div className="w-[416px] mt-auto h-[275px] flex-col justify-center  items-center gap-3 inline-flex">
          <div className=" self-stretch h-[275px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug -mt-16 ">{signUp === false ? <span>Login with email</span> : <span>Sign up with email</span>}</div>
              </div>
            </div>

            <div className="self-stretch h-32 flex-col justify-center items-center flex">
              <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                  <div className="justify-start items-center flex">
                    <div className="mix-blend-difference text-center text-white text-opacity-90 text-base font-semibold font-Montserrat leading-tight">{triaName?.param}</div>
                  </div>
                </div>
              </div>
              {signUp && <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                <div className='grow shrink basis-0 h-10 px-5  py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex font-Montserrat text-white'>
                  <input title="Minimum eight characters, at least one letter, one number and one special character" className="w-full grow shrink basis-0 h-10 bg-transparent focus:outline-none font-Montserrat text-white" placeholder="Password" type={showConfirmPassword === false ? "password" : "text"} onChange={(e) => { setConfirmPassword(e.target.value); handlePassword(e.target.value) }} />
                  <img onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='ml-2 cursor-pointer' src="/icons/eye-slash.svg" alt="eye-slash" />
                </div>

                {/* <input title="Minimum eight characters, at least one letter, one number and one special character" className="w-full grow shrink basis-0 h-10 bg-transparent focus:outline-none font-Montserrat text-white" placeholder='Password' type="password" onChange={(e) => { setConfirmPassword(e.target.value); }} /> */}
                {/* <img onClick={() => setShowPassword(!showPassword)} className='ml-2 cursor-pointer' src="/icons/eye-slash.svg" alt="eye-slash" /> */}

                {/* <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
                  <div className="justify-center items-center flex">
                    <button onClick={() => checkEmail()}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">

                      {loader === false ? <span>Log in</span>
                        :
                        <div className='ml-2' role="status">
                          <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                        </div>
                      }

                    </div> </button>
                  </div>
                </div> */}

              </div>}
              {confirmPassword.length !== 0 ? <div className='ml-3 self-stretch flex gap-2 items-center '>
                <div className={message === "Weak" ? "w-16 h-2 bg-red-500 rounded-3xl" : message === "Medium" ? "w-16 h-2 bg-yellow-500 rounded-3xl" : message === "Strong" ? "w-16 h-2 bg-lime-600 rounded-3xl" : null}></div>
                <div className={message === "Weak" ? "w-16 h-2 bg-zinc-500 rounded-3xl" : message === "Medium" ? "w-16 h-2 bg-yellow-500 rounded-3xl" : message === "Strong" ? "w-16 h-2 bg-lime-600 rounded-3xl" : null}></div>
                <div className={message === "Weak" ? "w-16 h-2 bg-zinc-500 rounded-3xl" : message === "Medium" ? "w-16 h-2 bg-zinc-500 rounded-3xl" : message === "Strong" ? "w-16 h-2 bg-lime-600 rounded-3xl" : null}></div>
                <span className={message === "Medium" ? 'text-yellow-500 font-semibold text-sm' : message === "Strong" ? 'text-lime-600 font-semibold text-sm' : message === "Weak" ? 'text-red-500 font-semibold text-sm' : null}>{message}</span>
              </div> : null}
              <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                <div className='grow shrink basis-0 h-10 px-5  py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex font-Montserrat text-white'>
                  <input title="Minimum eight characters, at least one letter, one number and one special character" className="w-full grow shrink basis-0 h-10 bg-transparent focus:outline-none font-Montserrat text-white" placeholder={signUp === false ? 'Password' : 'Confirm Password'} type={showPassword === false ? "password" : "text"} onChange={(e) => { setPassword(e.target.value); localStorage.setItem('tempPass', e.target.value); }} />
                  <img onClick={() => setShowPassword(!showPassword)} className='ml-2 cursor-pointer' src="/icons/eye-slash.svg" alt="eye-slash" />
                </div>
                <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
                  <div className="justify-center items-center flex">
                    {signUp === false ? <button onClick={() => { login() }}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">
                      {loader === false ? <span>Log in</span>
                        :
                        <div className='ml-2' role="status">
                          <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                        </div>
                      }
                    </div>
                    </button> : <button disabled={confirmPassword !== password} onClick={() => { login() }}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">
                      {loader === false ? <span>Sign up</span>
                        :
                        <div className='ml-2' role="status">
                          <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                        </div>
                      }
                    </div>
                    </button>}
                    
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="self-stretch py-2 rounded-[44px] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-[17px] justify-start items-center flex">
                <div className="mix-blend-difference text-center text-white text-opacity-80 text-sm font-normal font-Montserrat leading-[16.80px]">Forgot Password?</div>
              </div>
            </div> */}
          </div>
        </div> : <div role="status" className="flex justify-center mb-auto mt-20">
          <svg aria-hidden="true" className="w-[7.75rem] h-[7.7rem] mr-2 text-gray-200 animate-spin dark:text-zinc-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div>}
        <Footer />
      </div>
    </div>
  )
}
