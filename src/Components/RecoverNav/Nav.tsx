import React from 'react'

export default function Nav() {
  return (
    <div className='w-full h-full flex self-stretch flex-col'>
      <div className=" justify-between items-start inline-flex">
        <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
          {/* <div className="w-6 h-6 relative" /> */}
          <img src='/icons/Arrow_left.svg'></img>

        </div>
        <div className="p-3 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
          <img className="dark:invisible visible dark:w-0" src='/icons/Shape.svg'></img>
          <img className='dark:visible ' src='/icons/ShapeW.svg'></img>
        </div>
      </div>

      <div className="  py-2 shadow justify-center items-center inline-flex">
        <div className="self-stretch py-[24px] ml-20 mt-auto justify-center items-center inline-flex">

          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <img className=" absolute" src="/icons/tetherene.svg" />
          </div>

          <div className=" flex-col justify-center items-center gap-2 inline-flex">
            <img className=" " src="/icons/sea.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
