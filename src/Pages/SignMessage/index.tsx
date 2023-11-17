import React, { useState ,useEffect} from 'react'
import Connect from '../../Components/SignMessage/Connect';
import Sign from "../../Components/SignMessage/Sign";
import { WalletController } from '@tria-sdk/web';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {useTriaUser} from "../../contexts/tria-user-provider";

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
  triaName:string,
  appDomain:string,
  appLogo:string,
  tokenAddress: String;
}


const initialParams :params={
  chainName:'',
  message:'',
  triaName:'',
  appDomain:'',
  appLogo:'',
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




const walletType = { embedded: true };
const baseUrl = 'https://staging.tria.so';

function SignMessage() {
    const[connect,setConnect]=useState(false);
    const location = useLocation();
    const [params, setParams] = useState<params>(initialParams);
    const {getAssetDetails,getUserByAddress} =useTriaUser();
    const [tokenDetails,setTokenDetails]=useState<AssetDetails>();
    const param = useParams();

    const sendMessageToParent = (data:any=null) => {
      // Post a message to the parent window
      window.parent.postMessage({ type: 'closeIframe',callFrom:'sign',data:data }, '*');
  };
  


    console.log(btoa(JSON.stringify({
      chainName: "POLYGON",
      message: "Hello, this is a dummy message!",
      triaName: "Lalitt@tria",
      appDomain: "https://facebook.com",
      appLogo: "dummylogo.png",
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
      // console.log("called");
      // const searchParams = new URLSearchParams(location.search);
      // console.log("sdf",searchParams);
      // const encodedParams = searchParams.get('params');
      if (param.param) {
        const encodedParams=param.param;
        console.log("encodedParams",typeof(encodedParams));
        // Decode the string
        const jsonString = atob(encodedParams);
        console.log("jsonString",jsonString);
        // Parse the JSON
       const jsonData = JSON.parse(jsonString);
        console.log("jsonData",jsonData);
        setParams(jsonData);
        getAsset(jsonData);
      }
      
    };

    const getAsset = async(asset:any)=>{
      console.log("start----------------------->");
      const response = await getAssetDetails(
       asset?.chainName,asset?.tokenAddress ,asset?.triaName
      );
      setTokenDetails(response);
      console.log("asset----------------------->",response);
      }
  
     
      // const data=await getAssetDetails('POLYGON','0x1de58d46d05a379e020b1cbed0db98a2f55831b2','test@tria');
      // console.log("data",data);
    
  
  
    useEffect(() => {
      setStateParams();
    }, [param]);



  return (
    <div>
       { connect ? <Connect setConnect={setConnect}/> :
        <Sign params={params} signMessage={signMessage} tokenDetails={tokenDetails} sendMessageToParent={sendMessageToParent}/>
  }
    </div>

  )
}

export default SignMessage