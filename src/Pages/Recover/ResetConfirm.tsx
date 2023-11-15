import React from 'react'
import Footer from '../../Components/Footer'
import Nav from '../../Components/RecoverNav/Nav'
import { useNavigate } from 'react-router-dom'

export default function ResetConfirm() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-[448px] h-[840px] p-4 dark:bg-fontLightColor bg-white rounded-2xl flex-col justify-between items-center inline-flex">
                <div className="flex-col justify-start items-center gap-2 flex">

                    <Nav />
                    
                        <div className="self-stretch mt-12 justify-center items-center gap-2 inline-flex">
                            <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug dark:text-text">Reset your password</div>
                        </div>
                    
                  

                </div>

                <div className="self-stretch mt-auto  flex-col justify-center items-center gap-2 flex">
                    <div className="self-stretch flex-col justify-center items-center gap-3 flex">
                        <div className="w-[416px]  flex-col justify-center items-center gap-3 inline-flex">
                            <div className="self-stretch   px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex">
                                <div className="self-stretch py-3 flex-col justify-center items-start gap-4 flex">
                                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                        <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Set up your password</div>
                                    </div>
                                </div>
                                <div className="w-[376px] px-2 justify-start items-center inline-flex">
                                    <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-Montserrat">This is a mandatory additional layer of security that protects your <span className="text-white text-opacity-90 text-sm font-bold"> @tria </span> You will need this to authorize most actions.</div>
                                </div>
                                <div className="self-stretch  flex-col justify-center items-center flex">
                                    <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0  px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                                            <div className="justify-start items-center flex">
                                                <div className="mix-blend-difference text-center text-white text-opacity-50 text-base font-normal font-Montserrat leading-tight">Password</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0  px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex">
                                            <div className="justify-start items-center flex">
                                                <div className="mix-blend-difference text-center text-white text-opacity-50 text-base font-normal font-Montserrat leading-tight">Confirm password</div>
                                            </div>
                                        </div>
                                        <div className="w-[99px] px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
                                            <div className="justify-center items-center flex">
                                                <button onClick={() => { navigate('/welcome') }}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">Sign up</div></button>
                                            </div>
                                        </div>
                                    </div>
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
