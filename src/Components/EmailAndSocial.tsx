import { useNavigate, useLocation } from 'react-router-dom';
import { useSocialLoginConnectors } from '../socialLogins/socialLoginConnectors';
import { useEffect, useState } from 'react';
import axios from "axios"


export default function EmailAndSocial(props: any) {
  const navigate = useNavigate();
  const socialLogins = useSocialLoginConnectors();
  const [authenticated, setAuthenticated] = useState(false)
  const location = useLocation();

  const baseUrl = 'https://staging.tria.so'

  const socialLoginClicked = async (socialLoginIndex: number) => {
    // const left = window.screenX + (window.outerWidth) / 2;
    const top = window.screenY + (window.outerHeight) / 2.5;
    const socialNetwork = socialLogins[socialLoginIndex].type
    localStorage.setItem('socialNetwork', socialNetwork);
    try {
      //window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}`, '_blank');
      window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}`, "SSO", `width=${500},height=${600},left=${0},top=${top}`);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("useEffect called")
    async function submitData() {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      const scope = searchParams.get('scope');
      const state = searchParams.get('state');
      console.log('state', state);
      if (code && scope && state === 'google') {
        const {
          data: { userId, isAccountExist, password, isPasswordRequired },
        } = await axios.get(
          `${baseUrl}/api/v1/auth/google/callback?code=${code}&scope=${scope}`
        );
        console.log("Res",userId,isAccountExist,password)
        
        // setActiveSocialMedia('google');
        // setId(userId);
        // setPassword(password);
        // setIsPasswordRequired(isPasswordRequired);
        // setIsExist(isAccountExist);
        // setFlag(false);
        // navigate('/');
      } else if (code && state === 'instagram') {
        const { data } = await axios.get(
          `${baseUrl}/api/v1/auth/instagram/callback?code=${code}`
        );
        console.log(data);
        // setId(id);
        // setActiveSocialMedia('instagram');
        // setPassword(password);
        // setIsPasswordRequired(isPasswordRequired);
        // setIsExist(isAccountExist);
        // setFlag(false);
        // navigate('/');
      }
    }
    try {
      submitData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      setTimeout(() => {
        setAuthenticated(false)
      }, 4000)
    }
  }, [authenticated])

  return (
    <div>
      <button>
        <div className="w-[416px] h-[260px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-[376px] h-[54px] py-3 justify-center items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
              <div onClick={props.toggleState2} className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Email & Social</div>
              <div className="h-[22px] px-2 py-1 bg-pink-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
                <div className="text-center text-pink-500 text-opacity-90 text-xs font-medium font-['Montserrat'] leading-[14.40px]">fast</div>
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="px-3 py-1.5 bg-stone-950 bg-opacity-20 rounded-tl-[20px] rounded-bl-[20px] justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] justify-center items-center flex">
                  <img src='/icons/sms.svg'></img>
                  <div className="w-[18px] h-[18px] relative">
                  </div>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-stone-950 bg-opacity-5 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-2 flex">
                <div className="w-[18px] h-[18px] justify-center items-center flex">
                  <img src='/icons/call.svg'></img>
                  <div className="w-[18px] h-[18px] relative">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
            <input className="grow shrink basis-0 h-10 px-5 py-3 font-Montserrat bg-stone-950 bg-opacity-5 rounded-[20px] justify-start items-center flex" type="email" placeholder='your@email.com' />
            {/* <div className="justify-start items-center flex">
                <div className="text-center text-stone-950 text-opacity-30 text-base font-normal font-Montserrat leading-tight">your@email.com</div>
                <input type='email' ></input>
              </div> */}
            {/* </div> */}
            <div className="w-[99px] h-10 px-5 py-3 bg-stone-950 bg-opacity-90 rounded-[20px] justify-center items-center flex">
              <div className="justify-center items-center flex">
                <button onClick={() => { navigate("/confirmEmail") }}><div className="text-center text-white text-base font-semibold font-Montserrat leading-tight">Log in</div></button>
              </div>
            </div>
          </div>
          <div className="self-stretch py-3 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[0px] border-2 border-stone-950 border-opacity-5"></div>
            <div className="px-2 justify-center items-center flex">
              <div className="text-center text-stone-950 text-opacity-40 text-xs font-semibold font-Montserrat uppercase leading-[14.40px]">or</div>
            </div>
            <div className="grow shrink basis-0 h-[0px] border-2 border-stone-950 border-opacity-5"></div>
          </div>
          <div className="">
            {authenticated === false ? <div className='self-stretch px-5 py-2 justify-center items-center gap-5 inline-flex'>
              {
                socialLogins?.map((social, index) => {
                  return (
                    <div key={index} className="w-10 h-10 bg-neutral-50 rounded-[28.33px] shadow flex justify-center items-center ">
                      <div onClick={() => socialLoginClicked(index)} className="w-6 h-6"  >
                        <img src={social?.iconUrl} />
                      </div>
                    </div>
                  )
                })
              }
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
