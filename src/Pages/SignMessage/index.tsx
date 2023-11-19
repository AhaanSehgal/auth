import React, { useState ,useEffect,useContext} from 'react'
import Connect from '../../Components/SignMessage/Connect';
import Sign from "../../Components/SignMessage/Sign";
import { WalletController } from '@tria-sdk/web';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {useTriaUser} from "../../contexts/tria-user-provider";
import NavContext from "../../NavContext";

// interface params {
//   chainName:string;
//   message:string;
//   loginType:string;
//   triaName:string,
//   socialName:string,
//   userId:string,
//   input:string,
//   appDomain:string,
//   appLogo:string
// }
interface params {
  chainName:string;
  message:string;
  tokenAddress: String;
}


const initialParams :params={
  chainName:'',
  message:'',
  tokenAddress: ''
}

interface AssetDetails {
  balanceInTokens: number;
  balanceInUSD: number;
  balanceOfTokensInUnits: string;
  chainLogo: string;
  chainName: string;
  decimals: number;
  isFavorite: boolean;
  isNativeToken: boolean;
  isSpam: boolean;
  logoUrl: string;
  name: string;
  percentChangeIn24hr: number;
  quoteRate: number;
  symbol: string;
  tokenAddress: string;
}

interface dappDetails{
  dappDomain:string,
  dappLogo :string,
  triaName:string
}

const initialData:dappDetails={
  dappDomain:"",
  dappLogo :"",
  triaName:""
}


const walletType = { embedded: true };
const baseUrl = 'https://staging.tria.so';

function SignMessage() {
    const[connect,setConnect]=useState(false);
    const location = useLocation();
    const [params, setParams] = useState<params>(initialParams);
    const {getAssetDetails,getUserByAddress} =useTriaUser();
    const [tokenDetails,setTokenDetails]=useState<AssetDetails>();
    const param = useParams();
    const [dappDetails,setDappDetails]=useState<dappDetails>(initialData);

    const sendMessageToParent = (data:any=null) => {
      // Post a message to the parent window
      console.log("event emitted");
      window.parent.postMessage({ type: 'closeIframe',callFrom:'sign',data:data }, '*');
  };


  // const initialDappDetails = {
  //   dappDomain: "example.com",
  //   dappLogo: "logo.png",
  //   triaName: "MyTria"
  // };
  
  // const jsonString = JSON.stringify(initialDappDetails);
  
  // localStorage.setItem("dappDetails", jsonString);
  


    console.log(btoa(JSON.stringify({
      chainName: "POLYGON",
      message: "Hello, this is a dummy message!",
      tokenAddress: ""
    })));

    const signMessage = async () => { 
      console.log('Signing message..!!');
      const wallet = new WalletController({
        baseUrl,
        walletType,
      });

      console.log("wallet",wallet,params?.chainName, params?.message);
      await wallet.init();
      const res = await wallet.signMessage(params?.message,params?.chainName);
      sendMessageToParent(res);
      console.log("sign--------------------->",res);
    };

    const setStateParams = async () => {
      if (param.param) {
        const encodedParams=param.param;
        console.log("encodedParams",typeof(encodedParams));
        // Decode the string
        const jsonString = atob(encodedParams);
        console.log("jsonString",jsonString);
        // Parse the JSON
       const jsonData = JSON.parse(jsonString);
       const dappData=JSON.parse(localStorage.getItem("dappDetails")|| "{}");
       const triaName=JSON.parse(localStorage.getItem("tria.wallet.store") || "{}")?.triaName;
       const data={...dappData,triaName};
       console.log("daapp======>",data);
       setDappDetails(data);
        console.log("jsonData",jsonData);
        setParams(jsonData);
        getAsset(jsonData,data);
      }
      
    };

    const getAsset = async(asset:any,data)=>{
      try{
      console.log("start----------------------->");
      const response = await getAssetDetails(
       asset?.chainName,asset?.tokenAddress ,data?.triaName
      );
      setTokenDetails(response);
      console.log("asset----------------------->",response);
      }
      catch(err){
        console.log(err);
      }
      }
  
  
    useEffect(() => {
      setStateParams();
    }, [param]);



  return (
    <div>
       { connect ? <Connect setConnect={setConnect}/> :
        <Sign dappDetails={dappDetails} params={params} signMessage={signMessage} tokenDetails={tokenDetails} sendMessageToParent={sendMessageToParent}/>
  }
    </div>

  )
}

export default SignMessage