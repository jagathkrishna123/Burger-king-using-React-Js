import React from 'react'
import Backgroundimg2 from "../assets/bg2.png"
import Layer2 from "../assets/layer2.svg"
import Car from "../assets/car.svg"
import Layer5 from "../assets/layer5.svg"


const Componet10 = () => {
  return (
    // <div className='grid grid-cols-2 w-full h-full'>
     <div 
      className="grid grid-cols-2 w-full h-full bg-no-repeat bg-cover bg-center" 
      style={{ backgroundImage: `url(${Layer5})` }}
    >
        <div className='flex flex-col relative'>
            <img src={Backgroundimg2} alt="" className='w-full h-full' />
            <img src={Layer2} alt="" className='absolute bottom-0' />
        </div>
        <div className='flex flex-col items-center justify-center font-oswald'>
            <p className='font-bold text-[17px] text-[#00A149]'>Crispy,Every Bite Taste</p>
                <div className='flex flex-col leading-[60px] mb-4'>
                    <p className='font-bold text-[55px] text-[#212121]'>Kfc Chiken Hot</p>
                    <p className='font-bold text-[55px] text-[#212121]'>Wing & French Fries</p>
                </div>
            <p className='text-[#5C5C5B]'>Wheat tortilla with spicy chicken bites, cheese sauce </p>
            <p className='text-[#5C5C5B] '>tomatoes and soft cheese</p>

            <div className='flex flex-col mt-4'>
                <div className='flex flex-row gap-[10px]'>
                    <div className='flex flex-col leading-none items-center'>
                        <p className='text-[#FFC222] text-[44px] font-semibold font-oswald mb-[5px]'>30</p>
                        <p className='text-[19px] font-medium font-oswald text-[#212121]'>Day</p>
                    </div>
                    <div className='flex flex-col leading-none items-center'>
                        <p className='text-[#FFC222] text-[44px] font-semibold font-oswald mb-[5px]'>22</p>
                        <p className='text-[19px] font-medium font-oswald text-[#212121]'>Hours</p>
                    </div>
                    <div className='flex flex-col leading-none items-center'>
                        <p className='text-[#FFC222] text-[44px] font-semibold font-oswald mb-[5px]'>48</p>
                        <p className='text-[19px] font-medium font-oswald text-[#212121]'>Min</p>
                    </div>
                    <div className='flex flex-col leading-none items-center'>
                        <p className='text-[#FFC222] text-[44px] font-semibold font-oswald mb-[5px]'>22</p>
                        <p className='text-[19px] font-medium font-oswald text-[#212121]'>Sec</p>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                  {/* <button className='w-[209px] h-[65px] font-oswald text-white bg-[#00A149] rounded-[9px] transition-transform duration-300 hover:-translate-y-2'>More about us</button> */}
                  <button className='bg-[#00A149] rounded-[9px]  font-oswald font-semibold w-[212px] h-[65px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2'>
                        <img src={Car} alt="" />
                        <p className='text-[17px]'>Order Now</p>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Componet10