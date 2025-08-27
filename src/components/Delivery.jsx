// import React from 'react'
// import Car from "../assets/car.svg"
// import Delboy from "../assets/delboy.svg"
// import Pic1 from "../assets/pic1.svg"

// const Delivery = () => {
//   return (
//     <div className="w-full h-screen flex justify-center items-center p-2">
//         <div className="bg-[#EE284B] grid grid-cols-2 w-[1290px] h-[550px] rounded-lg shadow-xl ">
//             {/* Left side ...........................*/}
//             <div className="flex flex-col items-center justify-center p-2 md:p-0">
//                 <div className="flex flex-col items-start justify-center px-[40px] py-10 relative">
//                     <p className="text-[#FFC222] font-bold text-[17px] font-oswald">Crispy, Every Bite Taste</p>
//                     <img src={Pic1} alt="" className="absolute top-5 right-0" />
//                     <p className="font-bold text-[45px] md:text-[60px] font-oswald text-white">30 Minutes Fast</p>
//                     <p className="font-bold text-[35px] md:text-[60px] font-oswald text-white"><span className="text-[#FFC222] text-[45px] md:text-[60px] ">Delivery</span> Challenge</p>
//                     <button className="bg-white rounded-[9px] font-oswald shadow-lg font-semibold w-[170px] h-[50px] md:w-[212px] md:h-[65px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2">
//                     <img src={Car} alt="" className="invert" />
//                     <p className="text-[17px] font-semibold text-[#212121]">Order Now</p>
//                     </button>
//                 </div>
//             </div>

//             {/* Right side............................... */}
//             <div className="flex items-center justify-center">
//             <img src={Delboy} alt="" className='transition-transform duration-300 hover:-translate-y-2'/>
//             </div>
//         </div>
//    </div>

//   )
// }

// export default Delivery



import React from 'react'
import Car from "../assets/car.svg"
import Delboy from "../assets/delboy.svg"
import Pic1 from "../assets/pic1.svg"
import { motion } from 'framer-motion'


const Delivery = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#EE284B] grid grid-cols-1 md:grid-cols-2 w-full max-w-[1290px] rounded-lg shadow-xl overflow-hidden">
        
        {/* Left side */}
        <div className="flex flex-col items-center justify-center p-6 md:p-10">
          <div className="flex flex-col items-center md:items-start relative text-center md:text-left">
            <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className="text-[#FFC222] font-bold text-[15px] md:text-[17px] font-oswald">
              Crispy, Every Bite Taste
            </motion.p>
            <img src={Pic1} alt="" className="absolute top-5 right-0 hidden md:block" />
            <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className="font-bold text-[32px] md:text-[60px] font-oswald text-white leading-snug">
              30 Minutes Fast
            </motion.p>
            <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className="font-bold text-[28px] md:text-[60px] font-oswald text-white leading-snug">
              <span className="text-[#FFC222] text-[32px] md:text-[60px]">Delivery</span> Challenge
            </motion.p>
            <motion.button initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.7}} className="bg-white rounded-[9px] font-oswald shadow-lg font-semibold w-[160px] h-[48px] md:w-[212px] md:h-[65px] flex items-center justify-center gap-2 mt-6 transition-transform duration-300 hover:-translate-y-2">
              <img src={Car} alt="" className="invert w-5 md:w-6" />
              <p className="text-[15px] md:text-[17px] font-semibold text-[#212121]">Order Now</p>
            </motion.button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center p-6">
          <img src={Delboy} alt="" className="w-[250px] md:w-[500px] transition-transform duration-300 hover:-translate-y-2"/>
        </div>
      </div>
    </div>
  )
}

export default Delivery
