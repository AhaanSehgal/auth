import React, { useEffect, useContext } from 'react'
import Loader from '../../Components/Loader'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from "axios"
import NavContext from '../../NavContext';
import { KeyringController } from '@tria-sdk/web';
import { eventTypes } from "@tria-sdk/connect";


export default function LoaderPage() {

  const walletType = {
    embedded: true,
  };

  const navigate = useNavigate()
  const param = useParams()
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

      console.log('search_params', searchParams)
      console.log('params', param.param)
      console.log('state without parse', state);

      if (param.param === "twitter") {
        //@ts-ignore
        localStorage.setItem('origin', JSON.parse(atob(state)).origin)
      } else {
        //@ts-ignore
        localStorage.setItem('origin', JSON.parse(state)?.origin)
      }
      //@ts-ignore
      if (code && scope && param.param === 'google') {
        const {
          data: { userId, isAccountExist, password, isPasswordRequired, accessToken },
        } = await axios.get(
          `${baseUrl}/api/v1/auth/google/callback?code=${code}&scope=${scope}`
        );
        console.log("res", userId, isAccountExist, password)
        if (isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          // console.log("account exists")
          // console.log("password", password)
          // console.log('userId', userId)
          // console.log('accessToken', accessToken)
          keyringController.postMessage({
            type: eventTypes.passMessage,
            message: {
              accountExists: isAccountExist,
              userId: userId,
              token: accessToken
            },
          }, true)
          //@ts-ignore
          await keyringController.getVault({ password: password, userId: userId, socialName: 'google', origin: JSON.parse(state)?.origin });
          setTimeout(() => {
            console.log("close stopped")
            //window.close()
          }, 2000)
        } else {
          //if Google account does not exist
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          keyringController.postMessage({
            type: eventTypes.passMessage,
            message: {
              accountExists: isAccountExist,
              userId: userId,
              token: accessToken,
            }
          })
          window.close()
          // navigate(`/signUpUserName/google/${userId}`)
        }

        // setActiveSocialMedia('google');
        // setId(userId);
        // setPassword(password);
        // setIsPasswordRequired(isPasswordRequired);
        // setIsExist(isAccountExist);
        // setFlag(false);
        // navigate('/');
        //@ts-ignore
      } else if (code && param.param === 'instagram') {
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
          
          //@ts-ignore
          await keyringController.getVault({ password: data.password, userId: data.userId, socialName: 'instagram', origin: JSON.parse(state)?.origin });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          
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
      } else if (code && param.param === 'discord') {
        const { data } = await axios.get(`${baseUrl}/api/v1/auth/discord/callback?code=${code}`);
        // console.log(data);
        if (data.isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          keyringController.postMessage({
            type: eventTypes.passMessage,
            message: {
              accountExists: data.isAccountExist,
              userId: data.userId,
              token: data.accessToken
            },
          }, true)
          console.log('data', data)
          console.log("account exists")
          console.log("password", data.password)
          console.log('userId', data.userId)
          console.log('access_token', data.accessToken)
          //@ts-ignore
          await keyringController.getVault({ password: data.password, userId: data.userId, socialName: 'discord', origin: JSON.parse(state)?.origin });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          //if Discord account does not exist
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          keyringController.postMessage({
            type: eventTypes.passMessage,
            message: {
              accountExists: data.isAccountExist,
              userId: data.userId,
              token: data.accessToken,
            }
          })
          window.close()
        }
        // setFlag(false);
      } else if (param.param === "twitter") {
        const oauth_token = searchParams.get('oauth_token');
        const oauth_verifier = searchParams.get('oauth_verifier');
        const { data } = await axios.get(
          `${baseUrl}/api/v1/auth/twitter/callback?state=${state}&oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`
        );
        if (data.isAccountExist === true) {
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          keyringController.postMessage({
            type: eventTypes.passMessage,
            message: {
              accountExists: data.isAccountExist,
              userId: data.userId,
              token: data.accessToken
            },
          }, true)
          console.log("account exists")
          console.log("password", data.password)
          console.log('userId', data.userId)
          //@ts-ignore
          await keyringController.getVault({ password: data.password, userId: data.userId, socialName: 'twitter', origin: JSON.parse(atob(state)).origin });
          setTimeout(() => {
            window.close()
          }, 2000)
        } else {
          //if Twitter account does not exist
          const keyringController = new KeyringController({
            baseUrl,
            walletType,
          });
          keyringController.postMessage({
            type: eventTypes.passMessage,
            message: {
              accountExists: data.isAccountExist,
              userId: data.userId,
              token: data.accessToken,
            }
          })
          window.close()
        }
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
