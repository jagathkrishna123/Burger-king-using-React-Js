import React from 'react'
import Car from "../assets/car.svg"
import Delboy from "../assets/delboy.svg"
import Pic1 from "../assets/pic1.svg"

const Delivery = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-[#EE284B] grid grid-cols-2 w-[1290px] h-[550px] rounded-lg shadow-xl">
            {/* Left side ...........................*/}
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-start justify-center px-[40px] py-10 relative">
                    <p className="text-[#FFC222] font-bold text-[17px] font-oswald">Crispy, Every Bite Taste</p>
                    <img src={Pic1} alt="" className="absolute top-5 right-0" />
                    <p className="font-bold text-[60px] font-oswald text-white">30 Minutes Fast</p>
                    <p className="font-bold text-[60px] font-oswald text-white"><span className="text-[#FFC222]">Delivery</span> Challenge</p>
                    <button className="bg-white rounded-[9px] font-oswald font-semibold w-[212px] h-[65px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2">
                    <img src={Car} alt="" className="invert" />
                    <p className="text-[17px] font-semibold text-[#212121]">Order Now</p>
                    </button>
                </div>
            </div>

            {/* Right side............................... */}
            <div className="flex items-center justify-center">
            <img src={Delboy} alt="" className='transition-transform duration-300 hover:-translate-y-2'/>
            </div>
        </div>
   </div>

  )
}

export default Delivery