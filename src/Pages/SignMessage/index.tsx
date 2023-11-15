import React, { useState ,useEffect} from 'react'
import Connect from '../../Components/SignMessage/Connect';
import Sign from "../../Components/SignMessage/Sign";
import { WalletController } from '@tria-sdk/web';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'

interface params {
  chainName:string;
  message:string;
  loginType:string;
  triaName:string,
  socialName:string,
  userId:string,
  input:string,
  appDomain:string,
  appLogo:string
}

const initialParams :params={
  chainName:'',
  message:'',
  loginType:'',
  triaName:'',
  socialName:'',
  userId:'',
  input:'',
  appDomain:'',
  appLogo:''
}



const walletType = { embedded: true };
const baseUrl = 'https://staging.tria.so';

function SignMessage() {
    const[connect,setConnect]=useState(false);
    const location = useLocation();
    const [params, setParams] = useState<params>(initialParams);

    const param = useParams();
    console.log("pa",param);

    const signMessage = async () => {
      console.log('Signing message..!!');
      const wallet = new WalletController({
        baseUrl,
        walletType,
      });
      await wallet.init();
      const res = await wallet.signMessage(params?.chainName, params?.message);
      console.log({ res });
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
      }
      
    };
  
    useEffect(() => {
      setStateParams();
    }, [param]);



  return (
    <div>
       { connect ? <Connect setConnect={setConnect}/> :
        <Sign params={params} signMessage={signMessage}/>
  }
    </div>

  )
}

export default SignMessage