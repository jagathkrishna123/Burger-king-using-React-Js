import React from 'react'
import BgImage from "../assets/bgimage.jpg";
import Car from "../assets/car.svg"
import Leaves from "../assets/leaves.svg"
import Frenfries from "../assets/frenchfries.svg"

const Offer = () => {
  return (
    <div className='relative w-full h-[700px] flex items-center bg-cover bg-center' style={{backgroundImage:`url(${BgImage})`}}>
        <div className='container mx-auto px-6 md:px-20'>
            <div className='max-w-lg text-left'>
                <p className='text-white text-[28px] font-semibold font-oswald mb-2'>Save 20%</p>
                <h1 className='font-bold text-[60px] font-oswald text-white'>Today's <span className='text-[#FFC222]'>Astackin</span> Day</h1>
                <p className='text-[36px] font-bold font-oswald text-white'>Grilled <span className='text-[#FFC222]'>Chiken</span><span className='text-[#FFC222] ml-2'>$59,00</span></p>
                <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[212px] h-[65px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2'>
                    <img src={Car} alt="" />
                    <p className='text-[17px]'>Order Now</p>
                </button>
            </div>
        </div>
        <img src={Frenfries} alt="" className='absolute w-[150px] bottom-0' />
        <img src={Leaves} alt="" className='absolute w-[200px] right-0 bottom-0'/>
    </div>
  )
}

export default Offer