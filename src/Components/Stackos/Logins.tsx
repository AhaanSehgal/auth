import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSocialLoginConnectors, useSocialLoginConnectorsStack } from '../../socialLogins/socialLoginConnectors';
import { useEffect, useState, useContext } from 'react';
import NavContext from '../../NavContext';
import axios from "axios"
import Iframe from '../Iframe';
import { useConnect } from 'wagmi';

export default function Logins(props: any) {

    //@ts-ignore
    const { setView, authController, showOnboarding, connectWithEmail } = useContext(NavContext)
    const socialLogins = useSocialLoginConnectorsStack();
    const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState(false);
    //   const [email, setEmail] = useState("");
    const [openIframe, setOpenFrame] = useState(false)
    const [openLoginFrame, setOpenLoginFrame] = useState(false)

    //Wagmi Connector
    const { connect, connectors } = useConnect();


    const baseUrl = 'https://staging.tria.so'

    const socialLoginClicked = async (socialLoginIndex: number) => {
        const width = ((window.innerWidth) / 2.6);
        const top = 0;
        const left = 0;
        const height = window.innerHeight;
        // const width=(window.outerWidth/2)-225
        const socialNetwork = socialLogins[socialLoginIndex].type;
        localStorage.setItem('socialNetwork', socialNetwork);
        try {
            //window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}`, '_blank');
            setOpenFrame(true)
            const call = await axios.get(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}?origin=${window?.origin}`)
            //console.log('all',call)
            //@ts-ignore
            console.log('json', call?.data?.url)
            const redirect_url = call?.data?.url
            window.open(redirect_url, "SSO", `width=${width},height=${height},left=${left},top=${top}`);
            //window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}?origin=${window?.origin}`, "SSO", `width=${500},height=${600},left=${0},top=${top}`);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="w-full h-full px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">

            <div className="">
                {authenticated === false ? <div className=''>
                    {
                        socialLogins?.map((social, index) => {
                            return (
                                <div onClick={() => socialLoginClicked(index)}>
                                    <div className={`self-stretch cursor-pointer mb-2 rounded-2xl hover:bg-opacity-80  ${social.bgname && `bg-${social.bgname}`} flex-col justify-center   items-center gap-2 flex`}>
                                        <div className="self-stretch px-2 py-3  bg-opacity-60 rounded-2xl justify-center items-center gap-2 inline-flex">
                                            {social?.iconUrl}

                                            <div className="grow shrink basis-0 w-full px-2 py-3 rounded-[20px] justify-start items-center flex">
                                                <div className="justify-start items-center flex">
                                                    <div className="text-center text-white text-base font-semibold font-['Montserrat'] leading-tight">{social?.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className=" py-3 justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 border-2 border-white border-opacity-10"></div>
                        <div className="px-2 justify-center items-center flex">
                            <div className="text-center text-white text-opacity-40 text-xs font-semibold font-['Montserrat'] uppercase leading-[14.40px]">or</div>
                        </div>
                        <div className="grow shrink basis-0  border-2 border-white border-opacity-10"></div>
                    </div>
                    <div className="self-stretch justify-center items-center inline-flex">
                        <div onClick={() => { connect({ connector: connectors[2] }) }}>
                            <div className="grow shrink basis-0 h-16 px-1 py-3 justify-center cursor-pointer items-center gap-2 flex">
                                <div className="w-10 h-10 p-[3.33px] bg-white rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex">
                                    <div className="w-7 h-7 relative">
                                        <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-md">
                                            <div className="w-7 h-7 left-0 top-0 absolute">
                                                <img src='/icons/metamask.svg'></img>

                                                <div className="w-[22.05px] h-5 left-[2.98px] top-[3.12px] absolute">
                                                </div>
                                                <div className="w-[9.23px] h-[2.76px] left-[9.39px] top-[20.29px] absolute">
                                                </div>
                                                <div className="w-[13.89px] h-[7.50px] left-[7.06px] top-[14.25px] absolute">
                                                </div>
                                                <div className="w-[12.57px] h-[5.76px] left-[7.72px] top-[14.25px] absolute">
                                                </div>
                                                <div className="w-[22.41px] h-[10.37px] left-[2.79px] top-[3.12px] absolute">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 h-10 px-2 py-3 rounded-[20px] justify-start items-center flex">
                                    <div className="justify-start items-center flex">
                                        <div className="text-center text-white text-opacity-80 text-base font-medium font-['Montserrat'] leading-tight">Metamask</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div onClick={() => { connect({ connector: connectors[1] }) }}>
                            <div className="grow shrink basis-0 h-16 px-1 py-3 cursor-pointer justify-center items-center gap-2 flex">
                                <div className="w-10 h-10 p-[3.33px] bg-blue-500 rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex">
                                    <div className="w-7 h-7 relative">

                                        <div className="w-7 h-7 left-0 top-0 absolute  " />
                                        <img src='/icons/wallet3.svg'></img>

                                    </div>
                                </div>
                                <div className="grow shrink basis-0 h-10 px-2 py-3 rounded-[20px] justify-start items-center flex">
                                    <div className="justify-start items-center flex">
                                        <div className="text-center text-white text-opacity-80 text-base font-medium font-['Montserrat'] leading-tight">Wallet connect</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                    <div className='px-8 py-2 bg-green-400 text-green-700 font-bold font-Montserrat rounded-md'>
                        Authenticated
                    </div>}
            </div>

        </div>
    )
}
