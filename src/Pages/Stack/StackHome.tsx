import React , { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Stackos/Nav'
import Logins from '../../Components/Stackos/Logins'
import Footer from '../../Components/Footer'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import { useListenerSO } from "@tria-sdk/connect"
import { useNavigate, useLocation } from 'react-router-dom';
import NavContext from '../../NavContext';
import { detectIncognito } from "detectincognitojs";


export default function StackHome() {

  const navigate = useNavigate()
  const location = useLocation();
  const { setToken, setUsername, setDappLogo, setDappName, dappName, dappLogo, connectWithEmail, setConnectWithEmail, continueOnIncognito } = useContext(NavContext)


  const { eventData }: any = useListenerSO();

  useEffect(() => {
    if (dappName === "" && dappLogo === "") {
      const searchParams = new URLSearchParams(location.search);
      const email = searchParams.get('connectWithEmail');
      setConnectWithEmail(!Boolean(email))
      const name = searchParams.get('dappName');
      setDappName(name)
      const logo = searchParams.get('dappLogo');
      setDappLogo(logo)
      const ui = searchParams.get('stackui');
     
    }

    //Test logs
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('dappName');
    const logo = searchParams.get('dappLogo');
    const email = searchParams.get('connectWithEmail');
    console.log("DappName", name)
    console.log("Logo", logo)
    console.log("email", !Boolean(email))

    if (continueOnIncognito === false) {
      detectIncognito().then((result) => {
        console.log(result.browserName, result.isPrivate);
        if (result.isPrivate === true) {
          navigate("/incognito")
        }
      });
    }

  }, [])

  useEffect(() => {
    if (eventData?.message?.accountExists === false) {
      console.log("message_event", eventData?.message)
      localStorage.setItem("accessToken", eventData?.message?.token)
      setUsername(eventData?.message?.username)
      setToken(eventData?.message?.token)
      navigate(`/signUpUserName/google/${eventData?.message?.userId}`)
    } else {
      localStorage.setItem("accessToken", eventData?.message?.token)
      setToken(eventData?.message?.token)
    }
  }, [eventData])

  
  return (
    <div className="w-[448px] rounded-2xl drop dark:bg-fontLightColor h-[840px] p-4 flex-col justify-between inline-flex">
    <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
      {' '}
      <HomeBackgroundVector />
    </div>
    <div className="flex-col justify-start gap-2 flex">
      <Nav/>
     
    </div>
    <div className='mt-auto'>
      <Logins />
    </div>
    <Footer />
  </div>
  )
}
