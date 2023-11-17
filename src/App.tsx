import React, { useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import { useEffect, useState } from "react";
import ConfirmEmail from './Pages/ConfirmEmail';
import SignUpUserName from './Pages/SignUp/SignUpUserName';
import PasswordPage from './Pages/SignUp/SignUpPassword';
import SignInPassword from './Pages/SignIn/SignInPassword';
import SignUpPassword from './Pages/SignUp/SignUpPassword';
import Welcome from './Pages/WelcomePage/Welcome';
import Onboarding from './Pages/Onboarding';
import ConnectWallet from './Pages/ConnectWallet';
import ConnectingAnimation from './Pages/ConnectWallet/ConnectingAnimation';
import CreateWallet from './Pages/CreateWallet';
import SignUpPasswordConfirm from './Pages/SignUp/SignUpConfirmPassword';
import LoaderPage from './Pages/Loader';
import NavContext from './NavContext';
import SignMessage from './Pages/SignMessage';
import SendAsset from './Pages/Send';
import Mint from './Pages/Mint';

import { useSocialConnect } from '@tria-sdk/connect';
import VerificationPage from './Pages/Verification';
import OnboardingHome from './Pages/OnboardingHome';
import VerifyAccount from './Pages/VerifyAccount';
import Verified from './Pages/Verified';
import Logout from './Pages/Logout';
import Account from './Pages/Recover/Account';
import Email from './Pages/Recover/Email';
import Reset from './Pages/Recover/Reset';
import ResetConfirm from './Pages/Recover/ResetConfirm';

import { GetAllAddressesResponse, RampnalysisAssets, UserController } from '@tria-sdk/core';
import LoginDetect from './Pages/LoginDetect';
import LoginDetected from './Components/Popup/LoginDetected';
import Incognito from './Pages/Incognito';
import NewDevice from './Pages/Recover/NewDevice';
import AccessToken from './Pages/AccessToken';
import StackHome from './Pages/Stack/StackHome';
import SignUp from './Pages/Link';

const App = () => {

  const { success } = useSocialConnect();
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [storedPassword, setStoredPassword] = useState("")
  const [dappName, setDappName] = useState("")
  const [dappLogo, setDappLogo] = useState("")
  const [connectWithEmail, setConnectWithEmail] = useState(false)
  const [continueOnIncognito, setContinueOnIncognito] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [hash, setHash] = useState("")
  const [hashPass, setHashPass] = useState("")

  const obj = {
    token,
    setToken,
    storedPassword,
    setStoredPassword,
    username,
    setUsername,
    dappName,
    setDappName,
    dappLogo,
    setDappLogo,
    connectWithEmail,
    setConnectWithEmail,
    continueOnIncognito,
    setContinueOnIncognito,
    userEmail,
    setUserEmail,
    hash,
    setHash,
    hashPass,
    setHashPass
  }
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const [showWallet, setShowWallet] = useState(true);
  return (
    <div className=''>
      <NavContext.Provider value={obj}>
        <Router>
          <div className={` fixed  lg:right-[40%] lg:top-[15%]   right-0 bottom-0 ${isDarkMode ? "dark" : ""}`}>
            {/* <div className=""> */}
            {/* {showWallet && ( */}
            <Routes>
              <Route path="/" element={<OnboardingHome />} />
              <Route path="/confirmEmail" element={<ConfirmEmail />} />
              <Route path="/signUpUserName/:param1/:param" element={<SignUpUserName />} />
              <Route path="/signUpPassword" element={<SignUpPassword />} />
              <Route path="/signUpConfirmPassword" element={<SignUpPasswordConfirm />} />
              <Route path="/signInPassword/:param" element={<SignInPassword />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/connectWallet" element={<ConnectWallet />} />
              <Route path="/createWallet" element={<CreateWallet />} />
              <Route path="/connectingAnimation" element={<ConnectingAnimation />} />
              <Route path="/callback/:param" element={<LoaderPage />} />
              <Route path="/signMessage/:param" element={<SignMessage />} />
              <Route path="/send/:param" element={<SendAsset />} />
              <Route path="/mint/:param" element={<Mint />} />
              <Route path="/verify" element={<VerificationPage />} />
              <Route path="/accessToken" element={<AccessToken />} />
              <Route path="/verifyAccount" element={<VerifyAccount />} />
              <Route path="/verified" element={<Verified />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/email" element={<Email />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/resetConfirm" element={<ResetConfirm />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/loginDetect" element={<LoginDetect />} />
              <Route path="/loginDetected" element={<LoginDetected />} />
              <Route path="/incognito" element={<Incognito />} />
              <Route path="/newDevice" element={<NewDevice />} />
              <Route path="/stackHome" element={<StackHome />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
            {/* )} */}
            {/* <div
              className="wallet_icon fixed w-[80px] bottom-4 right-8 cursor-pointer"
              onClick={() => {
                setShowWallet(!showWallet);

              }}
            >

              <div className="relative ">
                <div className="left-[15.49px] top-[15.49px]">
                  {" "}
                  <img className="wallet_icon " src="/icons/wallet.png" alt="wallet" />
                </div>
              </div>
            </div> */}
            {/* </div> */}
          </div>
        </Router>
      </NavContext.Provider>
    </div>
  );
};

export default App;
