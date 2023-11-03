import React, { useState } from 'react';
import Nav from '../../Components/SignUp/Nav';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { KeyringController } from '@tria-sdk/web';
import axios from "axios"
import { useParams } from 'react-router-dom'


export default function SignUp() {

  // const [showPassword,setShowPassword]= useState(false);
  // const [showEmail,setShowEmail]=useState(false);
  // const toggleState=()=>{
  //     setShowPassword(!showPassword);
  //     setShowEmail(false);
  //   }

  const baseUrl = 'https://staging.tria.so';

  const [recommendations, setRecommendations] = useState([])
  const [available, setAvailable] = useState()
  const [name, setName] = useState("")
  
  const userId = useParams()

  console.log("id",userId)
  const walletType = {
    embedded: true,
  };

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
        did: name
      })
      console.log("did", data?.response?.availabilityStatus)
      setAvailable(data?.response?.availabilityStatus)
    } catch (err) {
      console.log(err)
    }
  }
  const [Id, setId] = useState('');

  async function createAccountWithoutPassword() {
    const keyringController = new KeyringController({
      baseUrl,
      walletType,
    });

    const res = await keyringController.socialogin({
      triaName: name,
      platform: 'google',
       //@ts-ignore
      userId: userId?.param,
      isPasswordLess: true,
      //@ts-ignore
      password: null,
    });
    console.log('res', res);
    // setUserData({ address: res.address });
  }
  const navigate = useNavigate();

  return (

    <div>
      <div className="w-[448px] h-[840px] p-4 bg-white rounded-2xl flex-col justify-between items-center inline-flex">
        <div className="flex-col justify-start items-center gap-2 flex">
          <div className="w-[416px] justify-between items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
              <div className=" relative" >
                <button onClick={() => { navigate("/") }}> <img src='/icons/close.svg'></img> </button>
              </div>
            </div>
            <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
              <img src='/icons/Shape.svg'></img>
            </div>
          </div>
          <Nav />
          <div className="w-[376px] h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex">
            <div className="self-stretch justify-center items-center gap-2 inline-flex">
              <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Creating your Tria account</div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-96 flex-col justify-center items-center gap-2 flex">
          <div className="self-stretch h-80 flex-col justify-start items-center gap-3 flex rounded-md">
            <div className="w-[416px] h-48 px-5 py-4 rounded-2xl  border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
              <div className="self-stretch py-3 flex-col justify-center items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug">Create your tria name</div>
                </div>
              </div>
              <div className="w-[376px] px-2 justify-start items-center inline-flex">
                <div className="grow shrink basis-0 mix-blend-difference">
                  <div>
                    <span style={{ color: 'white', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}>Your </span>
                    <span style={{ color: 'white', opacity: 0.9, fontSize: '0.875rem', fontWeight: 'bold' }}>@tria</span>
                    <span style={{ color: 'white', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}> is like Gmail, for Web3. Pay, receive and log-in to apps on any device, and blockchain.</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-16 flex-col justify-center items-center flex">
                <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-between items-center flex">
                    <input className='justify-start bg-transparent px-2 py-2 font-Montserrat' placeholder="Your name" value={name} onChange={(e) => { setName(e.target.value); getNameRecommendations(e.target.value); checkIfAvailable(e.target.value) }} />
                    {/* <span className='justify-end' style={{ color: 'white', opacity: 0.4, fontSize: '1rem', fontWeight: 'normal' }}>@tria</span> */}
                    <div className='text-gray-700 font-bold font-Montserrat'>@tria</div>
                  </div>
                  <div className="w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex">
                    <div className="justify-center items-center flex">
                      <button onClick={() => { createAccountWithoutPassword(); }}> <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">Next</div></button>
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
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="mix-blend-difference text-center text-gray-400 text-sm font-medium font-Montserrat leading-snug">Recommended : </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className='flex gap-3 items-center w-[376px] overflow-x-scroll h-20 '>
                    {recommendations?.map((item, index) => {
                      return (
                        <div onClick={() => {setName(item); getNameRecommendations(item); checkIfAvailable(item)}} key={index} className="self-stretch cursor-pointer justify-start items-center gap-2 inline-flex mt-3">
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
  );
}
