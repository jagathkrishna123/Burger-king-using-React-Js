import React from 'react'
import Banner3 from "../assets/banner3.svg"
import Banner4 from "../assets/banner4.svg"
import Car from "../assets/car.svg"



const SubBanner = () => {
  return (
    <div className='flex flex-row w-full h-full justify-center items-center gap-5 mb-[40px]'>
        <div className='flex flex-row gap-[40px] relative'>
            <img src={Banner3} alt="" className='w-[600px] h-[400px]'/>
            <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[160px] h-[46px] text-white items-center justify-center flex flex-row gap-2 mt-3 absolute bottom-20 left-9 transition-transform duration-300 hover:-translate-y-2'>
                <img src={Car} alt="" />
                <p className='text-[17px]'>Order Now</p>
            </button>
        </div>
        <div className='flex flex-row gap-[40px] relative'>
            <img src={Banner4} alt="" className='w-[400px] h-[400px]'/>
            <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[160px] h-[46px] text-white items-center justify-center flex flex-row gap-2 mt-3 absolute bottom-20 left-9 transition-transform duration-300 hover:-translate-y-2'>
                <img src={Car} alt="" />
                <p className='text-[17px]'>Order Now</p>
            </button>
        </div>

    </div>
  )
}

export default SubBanner

