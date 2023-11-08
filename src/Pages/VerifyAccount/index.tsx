import React from 'react'
import HomeBackgroundVector from '../../Components/HomeBackgroundVector'
// import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import Nav from '../../Components/SignUp/Nav'

export default function index() {
  return (
    <div>
         <div className="w-[448px] rounded-2xl dark:bg-fontLightColor h-[840px] p-4 flex-col  justify-between inline-flex">
      <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
        {' '}
        <HomeBackgroundVector />
      </div>
      <div className="flex-col justify-start gap-2   flex">
        <Nav />
      </div>
      <div className="self-stretch justify-center  gap-2 inline-flex">
                <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium font-Montserrat leading-snug dark:text-text">Create your account</div>
              </div>
      <div className='mt-auto'>
        
     
      </div>
      <div className="w-[416px] h-[137px] px-5 py-4 mb-auto rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex">
  <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch justify-start items-center gap-2 inline-flex">
      <div className="mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug">Verify your account</div>
    </div>
  </div>
  <div className="self-stretch px-2 justify-center items-center gap-2 inline-flex">
    <div className="grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']">We’ve sent you a verification link to your entered email id. Please click the link to validate and continue your journey here!</div>
  </div>
</div>
      


<div role="status" className="flex justify-center mb-auto">
                <svg aria-hidden="true" className="w-[7.75rem] h-[7.7rem] mr-2 text-gray-200 animate-spin dark:text-zinc-500 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
      <Footer />
    </div>
    </div>
  )
}
