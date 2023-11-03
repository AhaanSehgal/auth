import React from 'react'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import Footer from '../../Components/Footer'
import OpeningWallet from '../../Components/ConnectingAnimation/OpeningWallet'
import ConnectWallet from '../../Components/ConnectWallet'
import Connected from '../../Components/ConnectingAnimation/Connected'
import ConnectionFailed from '../../Components/ConnectingAnimation/ConnectionFailed'
import ConnectionError from '../../Components/ConnectingAnimation/ConnectionError'
import { useNavigate } from 'react-router-dom'

export default function ConnectingAnimation() {
  const navigate=useNavigate();

  return (
    <div>
        <div className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
      <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
<div className="w-[416px] justify-between items-start inline-flex">
            <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
            <div className=" relative" >
        <button onClick={()=>{navigate("/connectWallet")}}> <img src='/icons/close.svg'></img> </button>
        </div>
                   </div>
                   <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
                        <img src='/icons/Shape.svg'></img>
                         </div>
                  </div>
{/* <OpeningWallet/> */}
<Connected/>
{/* <ConnectionFailed/> */}
<ConnectionError/>
<Footer/>
        </div>
    </div>
  )
}
