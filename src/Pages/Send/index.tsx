import React,{useState,useEffect} from "react";
import Navbar from "../../Components/Navbar";
import { useLocation } from 'react-router-dom';
import { FeeController, WalletController } from '@tria-sdk/web';
import { Send } from '@tria-sdk/web';
import { useParams } from 'react-router-dom'

interface param{
  chainName: string;
   payload: Send;
}

const walletType = { embedded: true };
const baseUrl = 'https://staging.tria.so';

export default function SendAsset() {


const chainName = "POLYGON";
const payload = {
    fromTriaName: "dev0@tria",
    recipientTriaName: "dev@tria",
    amount: .00001,
    tokenAddress: ""
};

const encodedParams = btoa(JSON.stringify({ chainName, payload }));
console.log("eecc",encodedParams);

console.log(encodedParams);
   const location = useLocation();
  const [params, setParams] = useState();
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const param = useParams();
  console.log("pa",param);


  const sendToken = async () => {
    console.log('sending token..!!');
    const wallet = new WalletController({
      baseUrl,
      walletType,
    });
    // await wallet.init();
    // const res = await wallet.send(params?.chainName, params?.payload);
    // console.log({ res });
  };

  const getSendFee = async (params) => {
    const fee = new FeeController({
      baseUrl,
      walletType,
    });
    console.log("fee");
    const payload = { ...params?.payload, amount: parseFloat(params?.payload?.amount) };

    const res = await fee.getSendFee(params?.chainName, payload);
    console.log({ res });
  };


  const setStateParams = async () => {
    // console.log("called");
    // const searchParams = new URLSearchParams(location.search);
    // console.log("sdf",searchParams);
    // const encodedParams = searchParams.get('params');
    const encodedParams=param.param;
    console.log("en",encodedParams);
    if (encodedParams) {
      // Decode the string
      const jsonString = atob(encodedParams);
      console.log("jsonString",jsonString);
      // Parse the JSON
     const jsonData = JSON.parse(jsonString);
      console.log("jsonData",jsonData);
      setParams(jsonData);
      getSendFee(jsonData);
    }
  };

  useEffect(() => {
    setStateParams();
  }, [param]);

  return (
      <div className={`h-[588px] w-[315px] p-4 flex flex-col bg-primaryColor ${darkMode? "bg-primaryDarkColor" : "bg-primaryColor"} rounded-[20px] `}>
        <div className="flex flex-col gap-[8px] w-full justify-center items-center ">
          <div className={`flex w-full justify-between item-center gap-[16px] py-3`}>
          <div className="flex ">
            <div>
              <img/>
            </div>
            <div className="flex flex-col ">
              <p>data?.chainName</p>
              <p>data?.triaName</p>
            </div>
          </div>
          <div>
            <p>Balance</p>
            <p>data?.balance</p>
          </div>
          </div>
          <div className={`w-full h-[84px] py-[12px] flex flex-col gap-[12px] items-center justify-center `}>
            <div className={`w-[212px] h-[60px] rounded-[52px] py-[16px] px-[24px border-[2px] ${darkMode?"border-outliningDark":"border-outlining"}`}>
              <p className={`text-center text-[14px] font-[400] leading-[120%] ${darkMode? "text-fontExtraLightColorDark" : "text-fontExtraLightColor"}`}>data?.appDomain</p>
            </div>
            <div className="w-full flex items-center  justify-center">
              <p className={`${darkMode?"text-fontPrimaryDarkColor":"text-fontPrimaryColor"} text-[20px] font-[600] leading-[120%]`}>Send Transaction</p>
            </div>

          </div>
        </div>
        
        <div className="py-8 flex flex-col gap-[8px] justify-center items-center">
          <div className={`border-2px rounded-[16px] py-[16px] px-[20px] flex flex-col justify-center items-center self-stretch ${darkMode?"border-outliningDark":"border-outlining "}`}>
            <div className="py-[12px] flex flex-col self-stretch items-center justify-center">
              <p className={`text-center font-[600] text-[24px] leading-[120%] ${darkMode?"text-fontPrimaryDarkColor": "text-fontPrimaryColor"}`}>$1.07</p>
              <p className={`text-center font-[500] text-[16px] leading-[120%] ${darkMode?"text-fontExtraLightColorDark": "text-fontExtraLightColor"}`}>2 MATIC</p>
            </div>
            <div className={`flex self-stretch h-[103px] gap-[16px] ${darkMode?"text-fontExtraLightColorDark":"text-fontExtraLightColor"} font-[600] leading-[120%] text-[14px]`}>
              <div className="flex items-center justify-center flex-col h-[103px] py-[12px] gap-[12px]">
                <div className="w-[50px] h-[50px] rounded-[50px]">
                <img className="w-[50px] h-[50px] rounded-[50px]"/>
                </div>
                <p>data?.triaName</p>
              </div>
              <div></div>
               <div className="flex items-center justify-center flex-col h-[103px] py-[12px] gap-[12px]">
                <div className="w-[50px] h-[50px] rounded-[50px]">
                <img className="w-[50px] h-[50px] rounded-[50px]"/>
                </div>
                <p>data?.triaName</p>
              </div>

            </div>


          </div>
        </div>
        <div></div>

      </div>
  );
}
