import React from 'react'
import Nav from '../../Components/Nav'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
import ConnectWallet from '../../Components/ConnectaWallet/ConnectWallet'
import Footer from '../../Components/Footer'

export default function index() {
  return (
    <div>
        <div className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
      <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
          {' '}
          <HomeBackgroundVector />
        </div>
      <div className="flex-col justify-start gap-2 flex">
        <Nav />
      </div>
      <ConnectWallet/>
      <Footer/>
      </div>
      
    </div>
  )
}
