import React, { useContext, useState } from 'react'
import Nav from '../../Components/RecoverNav/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer';
import NavContext from '../../NavContext';
// import { KeyringController } from "../../../../../packages/web/dist/controllers/keyring.controller"

export default function Account() {

  const triaName = useParams()
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

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
    <div className="">
      <div className="bg-white w-full h-full min-h-screen dark:bg-fontLightColor rounded-2xl p-4 flex-col justify-between inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          {/* HomeBackgroundVector */}
        </div>
        <div className="flex-col justify-start gap-2">
          <Nav />
        </div>
        <div className="flex-col justify-center items-start gap-1 inline-flex">
          <div className="self-stretch justify-center items-center gap-2">
            <div className="text-center text-white text-opacity-80 text-2xl font-normal  font-['Montserrat'] leading-[28.80px]">Recover your account</div>
          </div>
        </div>
        <div className=" px-5 mt-auto py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch  py-3 flex-col justify-center items-start gap-4 flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-montserrat leading-snug">Enter Tria name & email</div>
            </div>
          </div>
          <div className=" px-2 justify-start items-center inline-flex">
            <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-montserrat">Enter your @tria name and recovery email and we’ll send you a 6 digit OTP to confirm your account.</div>
          </div>
          <div className="self-stretch  flex-col justify-center items-center flex">
            <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 rounded-[20px] px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-20 justify-start items-center flex">
                <div className="justify-start items-center flex">
                  <div className="mix-blend-difference text-center"><span className="text-zinc-500 text-opacity-90 text-base font-semibold font-montserrat leading-tight">kunaaal</span><span className="text-zinc-500 text-opacity-60 text-base font-normal font-montserrat leading-tight">@tria</span></div>
                </div>
              </div>
            </div>
            <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 rounded-[20px]  px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-20 justify-start items-center flex">
                <div className="justify-start items-center flex ">
                  <div className="mix-blend-difference text-center"><span className="text-zinc-500 text-opacity-90 text-base font-semibold font-montserrat leading-tight">yourname</span><span className="text-zinc-500 text-opacity-60 text-base font-normal font-montserrat leading-tight">@gmail.com</span></div>
                </div>
              </div>
              <div className=" px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-20 justify-center rounded-[20px] items-center flex">
                <div className="justify-center items-center flex rounded-2xl">
                  <div className="text-center text-stone-950 text-base font-semibold font-montserrat leading-tight ">Next</div>
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
