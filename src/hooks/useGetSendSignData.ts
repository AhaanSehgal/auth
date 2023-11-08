import { useEffect, useState } from "react";
import { useTriaUser } from "../Components/Contexts/tria-user-context"
import { Asset } from "../Components/Contexts/User";

export const useGetSendSignData = (receiverAddress:string,triaName:string, chainName:string, tokenAddress?:string) => {
 const {getAssetDetails,getUserByAddress} = useTriaUser();
 const [senderTriaName, setSenderTriaName] = useState<string>("");
 const [assetDetails, setAssetDetails] = useState<Asset[]>();
 const [isLoading, setIsLoading] = useState<boolean>(false)
 const fetchTriaName = async () => {
  try{
   setIsLoading(true);
  const response = await getUserByAddress(receiverAddress, chainName);
  setSenderTriaName(response);
  }catch(error){
   console.error(error);
     const { message } = error as Error;
     return Promise.reject(String(message || error));
      }finally{
       setIsLoading(false);
      }
  }

  const fetchAssetDetails = async() => {
   try{
    setIsLoading(true);
    const response = await getAssetDetails(chainName, tokenAddress, triaName)
    setAssetDetails(response);
   }catch(error){
    console.error(error);
    const { message } = error as Error;
    return Promise.reject(String(message || error));
   }finally{
       setIsLoading(false);
      }
  }

  useEffect(() => {
  fetchTriaName();
  fetchAssetDetails();
  },[])
  return isLoading;
 }

