// import React from 'react'
// import Food1 from "../assets/food1.svg"
// import Food2 from "../assets/food2.svg"
// import Food3 from "../assets/food3.svg"
// import Food4 from "../assets/food4.svg"
// import Food5 from "../assets/food5.svg"
// import Footerleft from "../assets/footerleft.svg"
// import Footerright from "../assets/footerright.svg"

// const Footer = () => {
//   return (
//     <div className="flex flex-col mt-10">
//       {/* Food Images */}
//       <div className="flex flex-wrap justify-center gap-4">
//         <img src={Food1} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto"/>
//         <img src={Food2} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto"/>
//         <img src={Food3} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto"/>
//         <img src={Food4} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto"/>
//         <img src={Food5} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto"/>
//       </div>

//       {/* Footer Content */}
//       <div className="w-full flex flex-col lg:flex-row lg:justify-evenly gap-10 mt-10 px-6">
        
//         {/* Left Red Card */}
//         <div className="bg-[#F3274C] rounded-2xl text-white font-fugaz p-6 w-full sm:w-[330px]">
//           <div className="flex flex-col gap-6">
//             <div>
//               <p className="text-xl">pizza hut</p>
//               <p className="text-xs ml-2">FOOD RESTAURANT</p>
//             </div>
//             <div>
//               <p className="text-sm">Tuesday – Saturday: 12:00pm – 23:00pm</p>
//               <p className="underline text-sm">Closed on Sunday</p>
//             </div>
//             <div>
//               <p className="text-sm">5 star rated on TripAdvisor</p>
//             </div>
//           </div>
//         </div>

//         {/* About */}
//         <div className="flex flex-col w-full sm:w-auto">
//           <p className="text-xl underline font-extrabold text-gray-700 mb-4">About</p>
//           <ul className="text-sm flex flex-col gap-2">
//             <li>Fredoka one</li>
//             <li>Special Dish</li>
//             <li>Reservation</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col w-full sm:w-auto">
//           <p className="text-xl text-gray-700 underline font-extrabold mb-4">Menu</p>
//           <ul className="text-sm flex flex-col gap-2">
//             <li>Fredoka one</li>
//             <li>Special Dish</li>
//             <li>Reservation</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="flex flex-col w-full sm:w-auto">
//           <p className="text-xl underline font-extrabold text-gray-700 mb-4">Newsletter</p>
//           <p className="text-sm mb-3">Get recent news and updates.</p>
//           <input 
//             type="text" 
//             placeholder="Email Address" 
//             className="border-2 border-gray-300 rounded-lg p-3 outline-none w-full max-w-sm"
//           />
//           <button className="bg-[#EE284B] rounded-lg font-oswald font-semibold w-full sm:w-[170px] h-12 text-white flex items-center justify-center gap-2 mt-3 transition-transform duration-300 hover:-translate-y-1">
//             <p className="text-sm">Subscribe</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import Food1 from "../assets/food1.svg"
import Food2 from "../assets/food2.svg"
import Food3 from "../assets/food3.svg"
import Food4 from "../assets/food4.svg"
import Food5 from "../assets/food5.svg"
import Footerleft from "../assets/footerleft.svg"
import Footerright from "../assets/footerright.svg"
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <div className="flex flex-col mt-10" id='footer'>
      {/* Food Images................................ */}
      <div className="flex flex-wrap justify-center gap-4">
        <img src={Food1} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto rounded-[3px]"/>
        <img src={Food2} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto rounded-[3px]"/>
        <img src={Food3} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto rounded-[3px]"/>
        <img src={Food4} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto rounded-[3px]"/>
        <img src={Food5} alt="" className="w-28 sm:w-36 md:w-48 lg:w-60 h-auto rounded-[3px]"/>
      </div>

      {/* Footer............................................... */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly gap-10 mt-10 px-6 text-center md:text-left items-center md:items-start">
        
        {/*Red Card......................................................... */}
        <div className="bg-[#F3274C] rounded-2xl text-white font-fugaz p-6 w-full sm:w-[330px]">
          <motion.div initial={{y:-30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}} className="flex flex-col gap-6">
            <div>
              <p className="text-xl">pizza hut</p>
              <p className="text-xs md:ml-2">FOOD RESTAURANT</p>
            </div>
            <div className='font-fredoka'>
              <p className="text-sm">Tuesday – Saturday: 12:00pm – 23:00pm</p>
              <p className="underline text-sm">Closed on Sunday</p>
            </div>
            <div className='font-fredoka'>
              <p className="text-sm">5 star rated on TripAdvisor</p>
            </div>
          </motion.div>
        </div>

        {/* About................................. */}
        <div className="flex flex-col w-full sm:w-auto items-center md:items-start">
          <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className="text-xl underline decoration-yellow-500 decoration-[3px] underline-offset-2 font-extrabold text-gray-800 mb-4 font-fredoka">About</motion.p>
          <motion.ul initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}} className="text-sm flex flex-col gap-2 font-fredoka">
            <li>Fredoka one</li>
            <li>Special Dish</li>
            <li>Reservation</li>
            <li>Contact</li>
          </motion.ul>
        </div>

        {/* Menu............................................................... */}
        <div className="flex flex-col w-full sm:w-auto items-center md:items-start">
          <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className="text-xl underline decoration-yellow-500 decoration-[3px] underline-offset-2 font-extrabold text-gray-800 mb-4 font-fredoka">Menu</motion.p>
          <motion.ul initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}} className="text-sm flex flex-col gap-2 font-fredoka">
            <li>Fredoka one</li>
            <li>Special Dish</li>
            <li>Reservation</li>
            <li>Contact</li>
          </motion.ul>
        </div>

        {/* Newsletter...................................................................................................... */}
        <div className="flex flex-col w-full sm:w-auto items-center md:items-start">
          <motion.p initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className="text-xl underline decoration-yellow-500 decoration-[3px] underline-offset-2 font-extrabold text-gray-800 mb-4 font-fredoka">Newsletter</motion.p>

          <motion.p initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}  className="text-sm mb-3 font-fredoka">Get recent news and updates.</motion.p>
          <input 
            type="text" 
            placeholder="Email Address" 
            className="border-2 border-gray-300 rounded-lg p-3 outline-none w-full max-w-sm"
          />
          <button className="bg-[#EE284B] rounded-lg font-oswald font-semibold w-full sm:w-[170px] h-12 text-white flex items-center justify-center gap-2 mt-3 transition-transform duration-300 hover:-translate-y-1">
            <p className="text-sm">Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer

