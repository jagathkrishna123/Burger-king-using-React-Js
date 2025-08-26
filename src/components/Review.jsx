import React from 'react'
import Layer6 from "../assets/layer6.svg"
import Star from "../assets/star.svg"
import Prof1 from "../assets/prof1.svg"
import Prof2 from "../assets/prof2.svg"
import Prof3 from "../assets/prof3.svg"



const Review = () => {
  return (
    <div className='w-full h-full flex flex-col mt-[80px]' style={{ backgroundImage: `url(${Layer6})`, }}>
        <div className='flex flex-col items-center font-oswald'>
            <p className='text-[20px] md:text-[29px] font-semibold text-[#212121]'>Piter Bowman</p>
            <p className='text-[#FFC222] font-semibold text-[18px] md:text-[20px]'>Business CEO & co founder</p>
        </div>

        <div className='flex flex-col items-center font-oswald text-[16px] md:text-[32px] font-bold text-[#212121]'>
            <p>“Thank you for dinner last night. It was amazing!! I have say it’s</p>
            <p>the best meal I have had in quite some time. will definitely be</p>
            <p>seeing more eating next year.”</p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4 transition-transform duration-300 hover:-translate-y-2'>
            <img src={Star} alt="" className='w-[9px] md:w-[13px]'/>
            <img src={Star} alt="" className='w-[9px] md:w-[13px]'/>
            <img src={Star} alt="" className='w-[9px] md:w-[13px]'/>
            <img src={Star} alt="" className='w-[9px] md:w-[13px]'/>
            <img src={Star} alt="" className='w-[9px] md:w-[13px]'/>
        </div>
        <div className='flex flex-row justify-center items-center mt-4'>
            <img src={Prof1} alt="" className='transition-transform duration-300 hover:-translate-y-2 w-[46px] sm:w-[52px] md:w-[55px]'/>
            <img src={Prof2} alt="" className='transition-transform duration-300 hover:-translate-y-2 w-[46px] sm:w-[52px] md:w-[55px]'/>
            <img src={Prof3} alt="" className='transition-transform duration-300 hover:-translate-y-2 w-[46px] sm:w-[52px] md:w-[55px]'/>
        </div>
    </div>
  )
}

export default Review

