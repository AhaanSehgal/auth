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


const App = () => {

  // const [showWallet, setShowWallet] = useState(true);

  return (
    <>
      <Router>
        <div className="flex items-center justify-center">
          {/* <div className=""> */}
            {/* {showWallet && ( */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/confirmEmail" element={<ConfirmEmail />} />
                <Route path="/signUpUserName" element={<SignUpUserName />} />
                <Route path="/signUpPassword" element={<SignUpPassword />} />
                <Route path="/signUpConfirmPassword" element={<SignUpPasswordConfirm />} />
                <Route path="/signInPassword/:param" element={<SignInPassword />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/connectWallet" element={<ConnectWallet />} />
                <Route path="/createWallet" element={<CreateWallet />} />
                <Route path="/connectingAnimation" element={<ConnectingAnimation />} />
                <Route path="/callback/:param" element={<LoaderPage />} />
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
    </>
  );
};

export default App;