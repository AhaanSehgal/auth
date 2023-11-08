import React, { useContext, useState } from 'react'
import Nav from '../../Components/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer';
import NavContext from '../../NavContext';
// import { KeyringController } from "../../../../../packages/web/dist/controllers/keyring.controller"

export default function SignInPassword() {

  const triaName = useParams()
  console.log(triaName)
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
    <div>
      <div className="w-[448px] bg-white dark:bg-fontLightColor rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
        <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
        <div className="flex-col justify-start gap-2 flex">
          <Nav />
         </div>
         <div className="w-[416px] mt-auto h-[255px] flex-col justify-center  items-center gap-3 inline-flex">
          <div className=" self-stretch h-[255px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug ">Login with email</div>
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
              <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                <input className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex font-Montserrat dark:text-text" placeholder='Password' />
                <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
                  <div className="justify-center items-center flex">
                    <button onClick={() => navigate('/welcome')}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">Log in</div> </button>
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


        </div>
        <Footer />
      </div>
    </div>
  )
}
