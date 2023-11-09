import React from 'react';
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

import { useSocialConnect } from '@tria-sdk/connect';
import VerificationPage from './Pages/Verification';
import OnboardingHome from './Pages/OnboardingHome';


const App = () => {

  const { success } = useSocialConnect()

  const [token, setToken] = useState("")
  const [storedPassword, setStoredPassword] = useState("")
  const obj = {
    token,
    setToken,
    storedPassword,
    setStoredPassword
  }
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const [showWallet, setShowWallet] = useState(true);
  return (
    <>
      <NavContext.Provider value={obj}>
        <Router>
          <div className={`fixed z-50 bottom-[0px] right-[0px] ${isDarkMode ? "dark" : ""}`}>
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
              <Route path="/verify" element={<VerificationPage />} />
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
    </>
  );
};

export default App;
