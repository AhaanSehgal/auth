import React from 'react'
import Nav from '../../Components/Stackos/Nav'
import Logins from '../../Components/Stackos/Logins'
import Footer from '../../Components/Footer'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'

export default function StackHome() {

  
  return (
    <div className="w-[448px] rounded-2xl drop dark:bg-fontLightColor h-[840px] p-4 flex-col justify-between inline-flex">
    <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
      {' '}
      <HomeBackgroundVector />
    </div>
    <div className="flex-col justify-start gap-2 flex">
      <Nav/>
     
    </div>
    <div className='mt-auto'>
      <Logins />
    </div>
    <Footer />
  </div>
  )
}
