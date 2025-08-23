import React from 'react'
import Layer6 from "../assets/layer6.svg"
import Star from "../assets/star.svg"
import Prof1 from "../assets/prof1.svg"
import Prof2 from "../assets/prof2.svg"
import Prof3 from "../assets/prof3.svg"



const Review = () => {
  return (
    <div className='w-full h-full flex flex-col mt-[80px]' style={{ backgroundImage: `url(${Layer6})` }}>
        <div className='flex flex-col items-center font-oswald'>
            <p className='text-[29px] font-semibold text-[#212121]'>Piter Bowman</p>
            <p className='texxt-[#FFC222] font-semibold text-[20px] text-[#FFC222]'>Business CEO & co founder</p>
        </div>

        <div className='flex flex-col items-center font-oswald text-[32px] font-bold text-[#212121]'>
            <p>“Thank you for dinner last night. It was amazing!! I have say it’s</p>
            <p>the best meal I have had in quite some time. will definitely be</p>
            <p>seeing more eating next year.”</p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4 transition-transform duration-300 hover:-translate-y-2'>
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
        </div>
        <div className='flex flex-row justify-center items-center mt-4'>
            <img src={Prof1} alt="" className='transition-transform duration-300 hover:-translate-y-2'/>
            <img src={Prof2} alt="" className='transition-transform duration-300 hover:-translate-y-2'/>
            <img src={Prof3} alt="" className='transition-transform duration-300 hover:-translate-y-2'/>
        </div>
    </div>
  )
}

export default Review

