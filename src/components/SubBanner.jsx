import React from 'react'
import Banner3 from "../assets/banner3.svg"
import Banner4 from "../assets/banner4.svg"
import Car from "../assets/car.svg"



const SubBanner = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-w-full p-2 md:justify-center md:items-center gap-4 mb-[40px]'>
        <div className='flex flex-row gap-[40px] relative flex-1'>
            <img src={Banner3} alt="" className='w-full'/>
            <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-normal w-[100px] h-[28px] md:w-[130px] md:h-[32px] text-white items-center justify-center flex flex-row gap-2 mt-3 absolute bottom-[30px] left-9 transition-transform duration-300 hover:-translate-y-2'>
                <img src={Car} alt="" className='w-[15px]'/>
                <p className='text-[12px] md:text-[17px]'>Order Now</p>
            </button>
        </div>
        <div className='flex flex-row gap-[40px] relative flex-1'>
            <img src={Banner4} alt="" className='w-full'/>
            <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-normal w-[100px] h-[28px] md:w-[130px] md:h-[32px] text-white items-center justify-center flex flex-row gap-2 mt-3 absolute bottom-20 left-9 transition-transform duration-300 hover:-translate-y-2'>
                <img src={Car} alt="" className='w-[15px]'/>
                <p className='text-[10px] md:text-[15px]'>Order Now</p>
            </button>
        </div>

    </div>
  )
}

export default SubBanner

//    <div className='flex flex-row w-full h-full justify-center items-center gap-5 mb-[40px]'>
//         <div className='flex flex-row gap-[40px] w-full relative'>
//             <img src={Banner3} alt="" className='w-[600px] h-[400px]'/>
//             <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-normal w-[100px] h-[28px] md:w-[160px] md:h-[46px] text-white items-center justify-center flex flex-row gap-2 mt-3 absolute bottom-20 left-9 transition-transform duration-300 hover:-translate-y-2'>
//                 <img src={Car} alt="" className='w-[15px]'/>
//                 <p className='text-[12px] md:text-[17px]'>Order Now</p>
//             </button>
//         </div>
//         <div className='flex flex-row gap-[40px] relative'>
//             <img src={Banner4} alt="" className='w-[400px] h-[400px]'/>
//             <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-normal w-[100px] h-[28px] md:w-[160px] md:h-[46px] text-white items-center justify-center flex flex-row gap-2 mt-3 absolute bottom-20 left-9 transition-transform duration-300 hover:-translate-y-2'>
//                 <img src={Car} alt="" className='w-[15px]'/>
//                 <p className='text-[12px] md:text-[17px]'>Order Now</p>
//             </button>
//         </div>

//     </div>