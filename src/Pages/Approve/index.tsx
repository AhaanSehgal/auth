import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import { useLocation } from "react-router-dom";
import {
  FeeController,
  WalletController,
  ContractDetails,
  CheckTokenAllowanceResponse,
} from "@tria-sdk/web";
import { useParams, useNavigate } from "react-router-dom";
import NavContext from "../../NavContext";
import { useTriaUser } from "../../contexts/tria-user-provider";
import Loader from "../../Components/Loader";
import {
  GetAllAddressesResponse,
  RampnalysisAssets,
  UserController,
} from "@tria-sdk/core";
import { shortenWalletAddress } from "../../utils";

interface Approve {
  tokenAddress: string;
  amount: number;
  spender: string;
}

interface param {
  chainName: string;
  payload: Approve;
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

interface fee {
  eth: string;
  usd?: string | undefined;
}

interface dappDetails {
  dappDomain: any;
  dappLogo: any;
  triaName: any;
}

const initialData: dappDetails = {
  dappDomain: "",
  dappLogo: "",
  triaName: "",
};

// interface MyComponentProps {
//   chainLogo: string;
//   chainName:string;
//   balanceInTokens:number;
//   symbol:string;

//   // Add other props as needed
// }

export default function Approve(props: any) {
  const walletType = { embedded: true };
  const baseUrl = "https://staging.tria.so";
  const fee = new FeeController({
    baseUrl,
    walletType,
  });

  const encodedParams = btoa(
    JSON.stringify({
      chainName: "POLYGON",
      payload: {
        tokenAddress: "0xCf85FF1c37c594a10195F7A9Ab85CBb0a03f69dE",
        amount: 1,
        spender: "0x5927Aa58fb36691A4be262c63955b47b67c6e641",
      },
    })
  );
  console.log("eecc", encodedParams);

  const [params, setParams] = useState<param>();
  const [tokenDetails, setTokenDetails] = useState<AssetDetails>();
  const [gasFees, setGasFees] = useState<fee>();
  const [recieverAddress, setRecieverAddress] = useState<string>();
  const [amountInUSD, setAmountInUSD] = useState<number>();
  const [totalAmountInUSD, setTotalAmountInUSD] = useState<number>();
  const [totalAmountIncrypto, setTotalAmountIncrypto] = useState<number>();
  const [feeLoading, setFeeLoading] = useState<boolean>(false);
  const [approveLoading, setApproveLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [dappDetails, setDappDetails] = useState<dappDetails>(initialData);
  const { getAssetDetails, getUserByAddress } = useTriaUser();
  const navigate = useNavigate();
  console.log("gasfees---------->", gasFees);
  const param = useParams();
  console.log("pa", param);
  console.log("tokenDetails---------------->", tokenDetails);

  const sendMessageToParent = (data: any = null) => {
    // Post a message to the parent window
    window.parent.postMessage(
      { type: "closeIframe", callFrom: "mint", data: data },
      "*"
    );
  };

  const approve = async () => {
    console.log("sending token..!!");
    const chain = params?.chainName;
    const wallet = new WalletController({
      baseUrl,
      walletType,
      selectedChainName: chain,
    });
    if (params && gasFees) {
      await wallet.init();
      if (params.payload && params?.chainName) {
        const res = await wallet.approve(params?.payload);
        sendMessageToParent(res);
        console.log("call contract res-------------->", res);
      }
    }
  };

  // const getTriaName = async (address: any, chainName: any) => {
  //   const triaName = await getUserByAddress(address, chainName);
  //   setRecieverTriaName(triaName);
  //   console.log("triaName", triaName);
  // };

  const getApproveFee = async () => {
    try {
      if (!params?.payload) return;

      const contractFee = await fee.getApproveFee(
        dappDetails?.triaName,
        params?.chainName || "",
        params?.payload
      );

      console.log("contractFee------------------->", contractFee);
      console.log("chain------------------>", params);
      if (contractFee.success === true) {
        setGasFees(contractFee.fee);
        setTotalAmountInUSD(
          parseFloat(contractFee.fee?.usd || "0") + (amountInUSD || 0)
        );
        setTotalAmountIncrypto(
          parseFloat(contractFee?.fee?.eth || "0") +
            (params?.payload?.amount || 0)
        );
      } else {
        setError(contractFee?.message || "");
      }
      console.log({ contractFee });
    } catch (err) {
      console.error(err);
    } finally {
      setFeeLoading(false);
    }
  };

  const setStateParams = async () => {
    // console.log("called");
    // const searchParams = new URLSearchParams(location.search);
    // console.log("sdf",searchParams);
    // const encodedParams = searchParams.get('params');
    const encodedParams = param.param;
    console.log("en", encodedParams);
    if (encodedParams) {
      // Decode the string
      const jsonString = atob(encodedParams);
      console.log("jsonString", jsonString);
      // Parse the JSON
      const jsonData = JSON.parse(jsonString);
      // getUserDetail(jsonData?.senderName,jsonData?.tokenAddress )
      // console.log("userdetail",getUserDetail )
      console.log("jsonData", jsonData);
      const dappData = localStorage.getItem("dappDetails") || "";
      const searchParams = new URLSearchParams(dappData);
      const logo = searchParams.get("dappLogo");
      const domain = searchParams.get("dappDomain");
      const triaName = JSON.parse(
        localStorage.getItem("tria.wallet.store") || "{}"
      )?.triaName;
      const localDetails = { dappLogo: logo, dappDomain: domain, triaName };
      setDappDetails(localDetails);
      // getTriaName(jsonData?.recepientAddress, jsonData?.chainName);
      getAsset(jsonData, localDetails);

      setParams(jsonData);
      const recieverAddressShort =
        shortenWalletAddress(jsonData?.contractDetails?.contractAddress) || "";
      setRecieverAddress(recieverAddressShort);
    }
  };

  const getAsset = async (paramData: any, localDetails: any) => {
    console.log("start----------------------->");
    const response = await getAssetDetails(
      paramData?.chainName,
      paramData?.payload?.tokenAddress,
      localDetails?.triaName
    );
    setTokenDetails(response);
    if (paramData?.payload?.amount) {
      const total = paramData?.payload?.amount * response.quoteRate;
      console.log("total-------------->", total);
      setAmountInUSD(total);
    }

    console.log("asset----------------------->", response);
  };

  const fetchApproveFee = async () => {
    try {
      await getApproveFee();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (params) {
      fetchApproveFee();
      setFeeLoading(true);
      const intervalId = setInterval(async () => {
        fetchApproveFee();
      }, 30000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [params]);

  useEffect(() => {
    setStateParams();
  }, [param]);

  return (
    <div className="w-[448px] h-[840px] p-4 flex-col bg-white dark:bg-fontLightColor rounded-2xl justify-between items-center inline-flex">
      {approveLoading ? (
        <div className="flex ml-12 items-center justify-center w-full h-full">
          <div className="transform -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        </div>
      ) : (
        <div className=" px-5 flex-col justify-center items-center flex">
          <div className="w-[416px] justify-end items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-end gap-2 inline-flex" />
            {/* <img
              className="dark:invisible visible dark:w-0"
              src="/icons/Shape.svg"
            ></img>
            <img className="dark:visible invisible W-[0] dark:W-18px " src="/icons/ShapeW.svg"></img>{" "} */}
          </div>
          <div className="self-stretch h-[166px] flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch border-b-2 border-zinc-500 pt-8 border-opacity-10 justify-center items-center gap-4 inline-flex">
              <div>
                <div className="w-[376px] h-[74px] border-b-2 border-zinc-500 border-opacity-10 justify-center items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-[74px] py-3 justify-start items-center gap-3 flex">
                    <div className="w-[50px] h-[50px] relative">
                      <img
                        className="w-[50px] h-[50px] left-0 top-0 absolute rounded-[50px]"
                        src="/icons/boy.svg"
                      />
                      <div className="w-[26.07px] h-[26.07px] pl-[0.69px] pr-[0.52px] pt-[0.86px] pb-[0.35px] left-[33.51px] top-[-13px] absolute origin-top-left justify-center items-center inline-flex">
                        <img src={tokenDetails?.logoUrl}></img>
                        <div className="w-[19.55px] h-[19.55px] relative origin-top-left rotate-[-19.05deg] flex-col justify-start items-start flex" />
                      </div>
                    </div>
                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                      <div className="h-[17px] px-2 flex-col justify-center items-start flex">
                        <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">
                          {tokenDetails?.chainName}
                        </div>
                      </div>
                      <div className="px-2 justify-start items-center inline-flex">
                        <div className="text-center text-neutral-600 text-sm font-semibold font-montserrat leading-[16.80px]">
                          {dappDetails?.triaName}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 flex-col justify-center items-end gap-1 inline-flex">
                    <div className="px-2 flex-col justify-center items-end flex">
                      <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">
                        Balance
                      </div>
                    </div>
                    <div className="px-2 justify-start items-center inline-flex">
                      <div className="text-center text-neutral-600 text-sm font-semibold font-montserrat leading-[16.80px]">
                        {tokenDetails?.balanceInTokens.toFixed(8)}{" "}
                        {tokenDetails?.symbol}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Navbar params={params} tokenDetails={tokenDetails} /> */}
              </div>{" "}
            </div>
            <div className="self-stretch h-[84px] py-3 flex-col justify-center items-center gap-4 flex">
              <div className="w-[350px] h-[60px] px-6 py-4 rounded-[52px] border-2 border-zinc-500 border-opacity-10 justify-center items-center gap-3 inline-flex">
                <img className="w-7 h-7 shadow" src={dappDetails?.dappLogo} />
                <div className="text-center text-neutral-600 text-sm font-normal font-montserrat leading-[16.80px]">
                  {dappDetails?.dappDomain}
                </div>
              </div>
            </div>
            <div className="self-stretch justify-center  items-center gap-2 inline-flex">
              <div className="text-center mb-10 text-stone-950 text-opacity-90 text-xl font-semibold font-montserrat leading-normal dark:text-text">
                Send Transaction
              </div>
            </div>
          </div>
          <div className="self-stretch h-[444px] py-2 mt-4 flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch h-[215px] px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center flex">
              <div className="h-20 py-3 flex-col justify-center items-start gap-2 flex">
                <div className="self-stretch justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-stone-950 text-opacity-90 text-2xl font-semibold font-montserrat leading-[28.80px] dark:text-text">
                    ${amountInUSD?.toFixed(6) || 0}
                  </div>
                </div>
                <div className="self-stretch justify-center items-center gap-1 inline-flex">
                  <div className="text-center text-stone-950 text-opacity-60 text-base font-medium font-montserrat leading-tight dark:text-text">
                    {params?.payload?.amount || 0} {tokenDetails?.symbol}
                  </div>
                </div>
                <div className="w-100 h-[18px] justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-red-500 text-sm font-medium font-['Montserrat'] ">
                    {error}
                  </div>
                </div>
              </div>
              <div className="w-[376px] justify-center items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-3 inline-flex">
                  <img
                    className="w-[50px] h-[50px] rounded-[50px]"
                    src="/icons/boy.svg"
                  />
                  <div className="px-2 justify-start items-center inline-flex">
                    <div className="text-center text-zinc-500 text-sm font-semibold font-montserrat leading-[16.80px] ">
                      {dappDetails?.triaName}
                    </div>
                  </div>
                </div>
                <div className="py-6 flex-col justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative">
                    <img
                      className="dark:invisible visible dark:w-0"
                      src="/icons/arrow-right.svg"
                    ></img>
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
                <div className="grow shrink basis-0 py-3 flex-col justify-center items-center gap-3 inline-flex">
                  <img
                    className="w-[50px] h-[50px] rounded-[50px]"
                    src="/icons/man.svg"
                  />
                  <div className="px-2 justify-start items-center inline-flex">
                    <div className="text-center text-zinc-500 text-sm font-semibold font-montserrat leading-[16.80px]">
                      {recieverAddress}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[205px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex">
              <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug dark:text-text">
                      Network Fee
                    </div>
                    <div className="w-[18px] h-[18px] relative">
                      <div className="font-montserrat">
                        <img
                          className="dark:invisible visible dark:w-0"
                          src="/icons/info-circle.svg"
                        ></img>
                        <img
                          className="dark:visible invisible w-0 dark:w-[18px]"
                          src="/icons/info-circle-dark.svg"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-20 text-xs font-medium font-montserrat leading-[14.40px] dark:text-text">
                      Refreshes in: 30
                    </div>
                  </div>
                </div>
                {feeLoading ? (
                  <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">
                    {" "}
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 mt-4  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch justify-end items-center gap-2 inline-flex">
                      <div className="text-center text-stone-950 text-opacity-60 text-lg font-normal font-montserrat leading-snug dark:text-text">
                        ${gasFees?.usd?.substring(0, 7)}
                      </div>
                      <div className="w-[18px] h-[18px] relative">
                        <div className="font-montserrat">
                          <img
                            className="dark:invisible visible dark:w-0"
                            src="/icons/setting-2.svg"
                          ></img>
                          <img
                            className="dark:visible  invisible w-0 dark:w-[18px]"
                            src="/icons/setting-2-dark.svg"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-end items-center gap-2 inline-flex">
                      <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-montserrat leading-[16.80px] dark:text-text">
                        {gasFees?.eth.substring(0, 7)} {tokenDetails?.symbol}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="self-stretch py-3 justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
                  <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug dark:text-text">
                    Total Cost
                  </div>
                </div>
                {feeLoading ? (
                  <div className="text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight">
                    {" "}
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
                    <div className="text-center text-stone-950 text-opacity-60 text-lg font-medium font-montserrat leading-snug dark:text-text">
                      ${totalAmountInUSD?.toFixed(6)}
                    </div>
                    <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-montserrat leading-[16.80px] dark:text-text">
                      {totalAmountIncrypto?.toFixed(8)} {tokenDetails?.symbol}
                    </div>
                  </div>
                )}
              </div>
              <div className="w-[376px] px-2 justify-center items-center gap-2 inline-flex">
                <div className="justify-center items-center gap-0.5 flex">
                  <div className="text-center text-stone-950 text-opacity-60 text-sm font-normal font-['Red Hat Display'] text-zinc-500">
                    {/* More */}
                  </div>
                  {/* <div className="w-[18px] h-[18px] relative">
                  <div className="font-montserrat">
                    <img
                      className="dark:invisible visible dark:w-0"
                      src="/icons/arrow-down.svg"
                    ></img>
                    <img
                      className="dark:visible invisible w-0 dark:w-[18px]"
                      src="/icons/arrow-down-dark.svg"
                    ></img>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[104px] mt-20  flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch mt-auto h-[53px] flex-col justify-center items-center gap-4 flex">
              <div className="w-[416px] h-[53px] justify-center items-center gap-6 inline-flex">
                <div
                  className="grow shrink basis-0 h-[53px] p-5 bg-white rounded-[58px] border border-zinc-500 border-opacity-30 justify-center items-center flex cursor-pointer"
                  onClick={() => sendMessageToParent()}
                >
                  <div className="justify-center items-center flex">
                    <div className="text-center text-stone-950 text-opacity-80 text-lg font-semibold font-montserrat leading-snug">
                      Reject
                    </div>
                  </div>
                </div>
                <div
                  className="grow shrink basis-0 h-[53px] p-5 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[58px] justify-center items-center flex cursor-pointer"
                  onClick={() => approve()}
                >
                  <div className="justify-center items-center flex">
                    <div className="text-center text-white text-lg font-semibold font-montserrat leading-snug">
                      Approve
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  py-3 rounded-[44px] justify-start items-start inline-flex">
              <div className="grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex">
                <div className="w-[19px] h-[19px] relative rounded-[5px]" />
                <img src="/icons/logo.svg"></img>
                <div className="text-center text-stone-950 text-opacity-40 text-sm font-semibold font-montserrat leading-[16.80px] text-zinc-500">
                  Powered by Tria
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
