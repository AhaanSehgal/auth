import React, { useEffect, useContext } from 'react'
import Loader from '../../Components/Loader'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import NavContext from '../../NavContext';
import { KeyringController } from '@tria-sdk/web';


export default function LoaderPage() {

  const walletType = {
    embedded: true,
  };

  const navigate = useNavigate()
  const { setToken } = useContext(NavContext)
  const location = useLocation();
  const baseUrl = 'https://staging.tria.so'

  // useEffect(() => {
  //     setTimeout(() => {
  //         navigate('/welcome')
  //     }, 2000)
  // }, [])

  useEffect(() => {
    console.log("useEffect called")
    async function submitData() {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      const scope = searchParams.get('scope');
      const state = searchParams.get('state');
      //@ts-ignore
      console.log('state', JSON.parse(state)?.platform);
      //@ts-ignore
      if (code && scope && JSON.parse(state)?.platform === 'google') {
        const {
          data: { userId, isAccountExist, password, isPasswordRequired, AccessToken },
        } = await axios.get(
          `${baseUrl}/api/v1/auth/google/callback?code=${code}&scope=${scope}`
        );
        console.log("res", userId, isAccountExist, password)
        if (isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          console.log("account exists")
          console.log("password", password)
          console.log('userId', userId)
          await keyringController.getVault({ password: password, userId: userId, socialName: 'google' });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          console.log("at", AccessToken)
          setToken(AccessToken)
          navigate(`/signUpUserName/google/${userId}`)
        }

        // setActiveSocialMedia('google');
        // setId(userId);
        // setPassword(password);
        // setIsPasswordRequired(isPasswordRequired);
        // setIsExist(isAccountExist);
        // setFlag(false);
        // navigate('/');
        //@ts-ignore
      } else if (code && JSON.parse(state)?.platform === 'instagram') {
        const { data } = await axios.get(
          `${baseUrl}/api/v1/auth/instagram/callback?code=${code}`
        );
        if (data.isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          console.log("account exists")
          console.log("password", data.password)
          console.log('userId', data.userId)
          await keyringController.getVault({ password: data.password, userId: data.userId, socialName: 'instagram' });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          setToken(data.AccessToken)
          navigate(`/signUpUserName/instagram/${data.userId}`)
        }
        // setId(id);
        // setActiveSocialMedia('instagram');
        // setPassword(password);
        // setIsPasswordRequired(isPasswordRequired);
        // setIsExist(isAccountExist);
        // setFlag(false);
        // navigate('/');
        //@ts-ignore
      } else if (code && JSON.parse(state)?.platform === 'discord') {
        const { data } = await axios.get(`${baseUrl}/api/v1/auth/discord/callback?code=${code}`);
        // console.log(data);
        if (data.isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          console.log("account exists")
          console.log("password", data.password)
          console.log('userId', data.userId)
          await keyringController.getVault({ password: data.password, userId: data.userId, socialName: 'discord' });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          setToken(data.AccessToken)
          navigate(`/signUpUserName/discord/${data.userId}`)
        }
        // setFlag(false);
      } else if (code) {
        const { data } = await axios.get(
          `${baseUrl}/api/v1/auth/twitter/callback?code=${code}&state=${state}`
        );
        if (data.isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          console.log("account exists")
          console.log("password", data.password)
          console.log('userId', data.userId)
          await keyringController.getVault({ password: data.password, userId: data.userId, socialName: 'twitter' });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          setToken(data.AccessToken)
          navigate(`/signUpUserName/twitter/${data.userId}`)
        }
        // console.log(data);
        // setId(data.userId);
        // setDiscordUsername(data.username)
        // setActiveSocialMedia('discord');
        // setPassword(data.password);
        // setIsPasswordRequired(data.isPasswordRequired);
        // setIsExist(data.isAccountExist);
        // // setFlag(false);
        // navigate('/');
      }
    }
    try {
      submitData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <div className='mt-80'><Loader /></div>
    </div>
  )
}
