import React from 'react'
import Car from "../assets/car.svg"
import Burger from "../assets/burger.png"
import Burgertitle from "../assets/burgertitle.svg"
import Header from "../assets/header.svg"
import Chilly from "../assets/mbg1.svg"



const Banner = () => {
  return (
    <div className='w-full h-full bg-red-900 justify-center flex flex-row items-center gap-[70px]'>
        {/* left........... */}
        <div className='font-oswald flex flex-col'>
            <p className='font-semibold text-[20px] text-[#FFC222]'>crispy, every bite taste</p>
            <div className='text-[100px] font-semibold text-white flex flex-col leading-none'>
            <p>HOT SPICY</p>
            <p>CHICKEN </p>
            <p>BURGER</p>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='text-white text-[28px] flex flex-row'>Limited Offer /</p>
                <span className='font-bold text-[55px] text-white'>$5</span>
            </div>
            <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[212px] h-[65px] text-white items-center justify-center flex flex-row gap-2 mt-3'>
                <img src={Car} alt="" />
                <p className='text-[17px]'>Order Now</p>
            </button>
        </div>
        {/* right.............. */}
        <div className="relative flex flex-col items-center">
            <img src={Header} alt="Header" className="w-[308px] h-[86px] mb-6 z-20 relative" />
            <div className="relative w-[633px] h-[633px]">
                {/* <img src={Chilly} alt="" /> */}
                <img src={Burgertitle} alt="Burger title" className="absolute bottom-[190px] left-[-60px] w-[371px] h-[245px] z-0" />
                <img src={Burger} alt="Burger" className="w-[533px] h-[533px] relative z-10 -mt-8" />
            </div>
        </div>



    </div>
  )
}

export default Banner