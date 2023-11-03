import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ConnectWallet.css";
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function ConnectWallet(props: any) {
  const navigate = useNavigate();

  const { connect, connectors } = useConnect();
  const [click, setClick] = useState("")

  function shimmer_loader() {
    return (
      <div className="w-12 h-12 p-2 rounded-xl justify-center items-center flex">
        <div className="w-8 h-8 justify-center items-start gap-1 inline-flex">
          <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
            <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing blink" />
          </div>
          <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
            <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing" />
          </div>
          <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
            <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing blink" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <button>
        <div className="w-[416px] h-[307px] px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch h-[46px] py-3 mix-blend-difference flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
              <div onClick={props.toggleState3} className="text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Connect a Wallet</div>
            </div>
          </div>
          <div className="self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex">
            <button onClick={() => { navigate("/connectWallet") }}>
              <div className="w-7 h-7 relative bg-blue-600 rounded-md border">
                <img className="absolute" src="/icons/wallet1.svg" />
              </div>
            </button>
            <div onClick={() => { connect({ connector: connectors[0] }); }} className="grow shrink basis-0 h-[19px] justify-start items-center flex">
              <div className="mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-['Montserrat'] leading-tight">Coinbase Wallet</div>
            </div>
          </div>
          <div className="self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex">
            <div className="w-7 h-7 bg-white rounded-md justify-center items-center flex">
              <div className="w-7 h-7 relative flex-col justify-start items-start flex">
                <img className="absolute" src="/icons/wallet2.svg" />
                <div className="w-[22.05px] h-5 relative"></div>
                <div className="w-[22.41px] h-[10.37px] relative"></div>
                <div className="w-[13.89px] h-[7.50px] relative"></div>
                <div className="w-[12.57px] h-[5.76px] relative"></div>
                <div className="h-[2.76px] relative"></div>
              </div>
            </div>
            <div onClick={() => { connect({ connector: connectors[2] }); setClick("metamask") }} className="grow shrink basis-0 h-[19px] justify-start items-center flex">
              <div className="mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-['Montserrat'] leading-tight">Metamask</div>
            </div>
            {/* <div>{click === "metamask" ? 
            <div className="w-12 h-12 p-2 rounded-xl justify-center items-center flex">
              <div className="w-8 h-8 justify-center items-start gap-1 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing blink" />
                </div>
                <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing" />
                </div>
                <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing blink" />
                </div>
              </div>
            </div> : null}</div> */}
          </div>
          <div onClick={() => { connect({ connector: connectors[1] }); }} className="self-stretch h-[52px] p-3 rounded-2xl justify-center items-center gap-3 inline-flex">
            <div className="w-7 h-7 relative  ">
              <img className="absolute" src="/icons/wallet3.svg" />
            </div>
            <div className="grow shrink basis-0 h-[19px] justify-start items-center flex">
              <div className="mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-['Montserrat'] leading-tight">Wallet Connect</div>
            </div>
            {/* <div className="w-12 h-12 p-2 rounded-xl justify-center items-center flex">
              <div className="w-8 h-8 justify-center items-start gap-1 inline-flex">
                <div className="dot blink" />
                <div className="dot" />
                <div className="dot blink" />
              </div>
            </div> */}
            {/* <div className="w-12 h-12 p-2 rounded-xl justify-center items-center flex">
              <div className="w-8 h-8 justify-center items-start gap-1 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing blink" />
                </div>
                <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing" />
                </div>
                <div className="grow shrink basis-0 self-stretch px-px flex-col justify-center items-center inline-flex">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full  dot-flashing blink" />
                </div>
              </div>
            </div> */}
          </div>
          <div className="self-stretch py-3 justify-start items-center gap-2 inline-flex">
            <div className="px-2 justify-start items-center flex">
              <button onClick={() => { navigate('/createWallet') }}>
                <div className="text-center text-zinc-500 text-opacity-70 text-sm font-normal font-['Montserrat'] underline leading-[16.80px]">Create a new wallet</div>
              </button>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

// CSS for the blink animation
// const styles = `
// .dot {
//   width: 1.5px;
//   height: 1.5px;
//   background-color: #000;
//   border-radius: 50%;
//   display: inline-block;
//   margin: 0 2px;
// }

// .blink {
//   animation: blink-animation 1s steps(2, start) infinite;
// }

// @keyframes blink-animation {
//   to {
//     visibility: hidden;
//   }
// }
// `;

// Create a style element and attach the CSS to the document
// const styleElement = document.createElement('style');
// styleElement.innerHTML = styles;
// document.head.appendChild(styleElement);
