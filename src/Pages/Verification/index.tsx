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
import io from 'socket.io-client';


export default function VerificationPage() {

    const socket = io('wss://staging.tria.so');

    const walletType = {
        embedded: true,
    };

    const { storedPassword, dappName } = useContext(NavContext)

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
        socket.emit('message', {
            "userId": email,
            "message": {
                token: token
            }
        })
        setOpen(true)
        // setEmail(email)
        // console.log('Email', email);
        // console.log('Token', token);
        // const check = await keyringController.emailLinkVerification({ email: email, code: token })
        // console.log('check', check)
        // const auth = await keyringController.initiateEmailLinkAuth({
        //     email: email,
        //     password: localStorage.getItem('tempPass')
        // })
        // console.log('auth', auth)
        // if (auth?.hash !== undefined) {
        //     setOpen(true)
        //     setHash(auth?.hash)
        //     setPassword(auth?.password)
        // }
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
            if (res.success === true) {
                const created_wallet_store = localStorage.getItem("tria.wallet.store")
                socket.emit('message', {
                    "userId": email,
                    "message": JSON.parse(created_wallet_store)
                })
                setTimeout(() => {
                    window.close()
                }, 2000)
            }
            //window.open(`${origin}?verified=true`, "_self")
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
        // console.log("tempPass", localStorage.getItem("tempPass"))
        // const searchParams = new URLSearchParams(location.search);
        // const userEmail = searchParams.get('email');
        // const refined_email = userEmail?.substring(0, userEmail.indexOf('@'));
        // if (refined_email.length !== 0) {
        //     setName(refined_email)
        //     checkIfAvailable(refined_email)
        //     getNameRecommendations(refined_email)
        // }
    }, []);

    const checkSpecialChar = (e) => {
        if (!/[0-9a-zA-Z]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <>
            {open === false ? <div className=''>
                <div className='mt-80'><Loader /></div>
            </div> :
                <div>
                    <div className="w-[448px] h-[840px] p-4 bg-white dark:bg-fontLightColor rounded-2xl flex-col justify-between items-center inline-flex">
                        <div className="flex-col justify-start items-center gap-2 flex">
                            <div className="w-[416px] justify-between items-start inline-flex">
                                <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
                                    {/* <div className=" relative" >
                                        <button > <img src='/icons/close.svg'></img> </button>
                                    </div> */}
                                </div>
                                <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
                                    <img src='/icons/Shape.svg'></img>
                                </div>
                            </div>
                            <Nav />
                            <div className="w-[376px] h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex">
                                <div className="self-stretch justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug dark:text-text">Login to {dappName}</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch  flex-col justify-center text-xl font-semibold items-center gap-2 flex text-lime-600 ">
                            <p className='px-10 text-center'>You have been successfully verified! You can close this tab and head back to your session.</p>
                            
                        </div>
                        <Footer />
                    </div>
                </div>
            }
        </>
    )
}
