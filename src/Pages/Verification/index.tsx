//@ts-nocheck
import React, { useEffect, useContext, useState } from 'react'
import Loader from '../../Components/Loader'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import NavContext from '../../NavContext';
import { KeyringController } from '@tria-sdk/web';
import { AuthController } from '@tria-sdk/core';
import Nav from '../../Components/SignUp/Nav';
import Footer from '../../Components/Footer';


export default function VerificationPage() {

    const walletType = {
        embedded: true,
    };

    const { storedPassword } = useContext(NavContext)

    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [recommendations, setRecommendations] = useState([])
    const [available, setAvailable] = useState()
    const [loader, setLoader] = useState(false)

    const [email, setEmail] = useState("")
    const [hash, setHash] = useState("")
    const [password, setPassword] = useState("")

    const { setToken } = useContext(NavContext)
    const location = useLocation();
    const baseUrl = 'https://staging.tria.so'


    const keyringController = new KeyringController({
        baseUrl,
        walletType,
    });
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/welcome')
    //     }, 2000)
    // }, [])

    const getNameRecommendations = async (name) => {
        try {
            const { data } = await axios.get(`${baseUrl}/api/v2/get-name-recommendation?name=${name}`)
            console.log("recommed", data?.data)
            setRecommendations(data?.data)
        } catch (err) {
            console.log(err)
        }
    }

    const checkIfAvailable = async (name) => {
        try {
            const { data } = await axios.post(`${baseUrl}/api/v1/did/check`, {
                did: name + "@tria"
            })
            console.log("did", data?.response?.availabilityStatus)
            setAvailable(data?.response?.availabilityStatus)
        } catch (err) {
            console.log(err)
        }
    }

    const call = async () => {
        const searchParams = new URLSearchParams(location.search);
        const email = searchParams.get('email');
        const token = searchParams.get('token');
        setEmail(email)
        console.log('Email', email);
        console.log('Token', token);
        const check = await keyringController.emailLinkVerification({ email: email, code: token })
        console.log('check', check)
        const auth = await keyringController.initiateEmailLinkAuth({
            email: email,
            password: localStorage.getItem('tempPass')
        })
        console.log('auth', auth)
        if (auth?.hash !== undefined) {
            setOpen(true)
            setHash(auth?.hash)
            setPassword(auth?.password)
        }
    }

    const call2 = async () => {
        if (name.length > 3) {
            setLoader(true)
            const searchParams = new URLSearchParams(location.search);
            const origin = searchParams.get('origin');
            const res = await keyringController.generateAccountByOTPOrLINK({
                triaName: name + "@tria",
                input: email,
                hash: hash,
                password: password,
                type: "link",
                origin: origin
            })
            console.log('res', res)
            window.open(`${origin}?verified=true`, "_self")
        }

        // const resp = await keyringController.getVault({
        //     input: email,
        //     link: true,
        //     hash: hash,
        //     password: password
        // })
        // console.log("resp", resp)
    }

    useEffect(() => {
        call()
        const searchParams = new URLSearchParams(location.search);
        const userEmail = searchParams.get('email');
        const refined_email = userEmail?.substring(0, userEmail.indexOf('@'));
        if (refined_email.length !== 0) {
            setName(refined_email)
            checkIfAvailable(refined_email)
            getNameRecommendations(refined_email)
        }
    }, []);

    const checkSpecialChar = (e) => {
        if (!/[0-9a-zA-Z]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <>
            {open === false ? <div>
                <div className='mt-80'><Loader /></div>
            </div> :
                <div>
                    <div className="w-[448px] h-[840px] p-4 bg-white dark:bg-fontLightColor rounded-2xl flex-col justify-between items-center inline-flex">
                        <div className="flex-col justify-start items-center gap-2 flex">
                            <div className="w-[416px] justify-between items-start inline-flex">
                                <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
                                    <div className=" relative" >
                                        <button > <img src='/icons/close.svg'></img> </button>
                                    </div>
                                </div>
                                <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
                                    <img src='/icons/Shape.svg'></img>
                                </div>
                            </div>
                            <Nav />
                            <div className="w-[376px] h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex">
                                <div className="self-stretch justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug dark:text-text">Login to Empire of Sight</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch  flex-col justify-center  items-center gap-2 flex">
                            <div className="self-stretch  flex-col justify-start  items-center gap-3 flex rounded-md">
                                <div className="w-[416px]  px-5 py-4 rounded-2xl mt-auto border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
                                    <div className="self-stretch py-3 flex-col justify-center items-start gap-4 flex">
                                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                            <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Create your username</div>
                                        </div>
                                    </div>
                                    <div className="w-[376px] px-2 justify-start items-center inline-flex">
                                        <div className="grow shrink basis-0 mix-blend-difference">
                                            <div>
                                                {/* <span style={{ color: 'white', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}>Your </span>
                                                <span style={{ color: 'white', opacity: 0.9, fontSize: '0.875rem', fontWeight: 'bold' }}>@tria</span> */}
                                                <span style={{ color: 'white', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}>This will be your in-game name.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch h-16 flex-col justify-center items-center flex">
                                        <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                                            <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-between items-center flex">
                                                <input onKeyDown={(e) => checkSpecialChar(e)} className='justify-start bg-transparent px-2 py-2 font-Montserrat focus:outline-none dark:text-text' placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value); getNameRecommendations(e.target.value); checkIfAvailable(e.target.value) }} />
                                                {/* <span className='justify-end' style={{ color: 'white', opacity: 0.4, fontSize: '1rem', fontWeight: 'normal' }}>@tria</span> */}
                                                {/* <div className='text-gray-700 font-bold font-Montserrat'>@tria</div> */}
                                            </div>
                                            <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
                                                <div className="justify-center items-center flex">
                                                    <button onClick={() => call2()} > <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">{loader === false ? <span>Next</span> :
                                                        <div className='ml-2' role="status">
                                                            <svg aria-hidden="true" className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                            </svg>
                                                        </div>
                                                    }</div></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {name.length !== 0 ? <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                        {available === true ? <div className="text-center text-green-600 text-sm font-semibold font-['Montserrat'] leading-[16.80px] flex gap-1 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#14AE5C" />
                                            </svg>
                                            username available</div> :
                                            <div className="text-center text-red-500 text-sm font-semibold font-['Montserrat'] leading-[16.80px] flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="#DA4343" />
                                                </svg>
                                                username not available</div>
                                        }
                                    </div> : null}
                                    {name.length > 0 ? <div>
                                        <div className="self-stretch justify-start items-center gap-2 inline-flex mt-4">
                                            <div className="mix-blend-difference text-center text-gray-400 text-sm font-medium font-Montserrat leading-snug">Recommended : </div>
                                        </div>
                                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                            <div className='flex flex-wrap gap-3 items-center w-[376px] px-2 '>
                                                {recommendations?.slice(0, 3)?.map((item, index) => {
                                                    return (
                                                        <div onClick={() => setName(item)} key={index} className="self-stretch cursor-pointer justify-start items-center gap-2 inline-flex mt-3">
                                                            <div className='bg-gray-100 rounded-full px-5 py-2 font-Montserrat'>
                                                                {item}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    </div> : null}
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
