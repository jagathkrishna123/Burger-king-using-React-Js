// import React from 'react'
// import Car from "../assets/car.svg"
// import Burger from "../assets/burger.png"
// import Burgertitle from "../assets/burgertitle.svg"
// import Header from "../assets/header.svg"
// import Chilly from "../assets/mbg1.svg"
// import Slice from "../assets/slice.svg"
// import Tomatto from "../assets/tomatto.svg"
// import { motion } from 'framer-motion'





// const Banner = () => {
//   return (
//     <motion.div initial={{ opacity: 0, y: 150 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }} className='w-full h-full bg-red-900 justify-center items-center gap-10 lg:gap-[70px] flex flex-col lg:flex-row p-4 lg:p-0'>
//         {/* left........... */}
//         <motion.div initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className='font-oswald flex flex-col lg:items-start lg:w-auto'>
//             <img src={Slice} alt="" className='absolute left-0 hidden sm:block'/>
//             <p className='font-semibold text-[16px] sm:text-[20px] text-[#FFC222]'>crispy, every bite taste</p>
//             <motion.div initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className='sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold text-white flex flex-col leading-none'>
//                 <p>HOT SPICY</p>
//                 <p>CHICKEN </p>
//                 <p>BURGER</p>
//             </motion.div>

//             <div className='flex gap-4 items-center'>
//                 <p className='text-white text-[28px] flex flex-row'>Limited Offer /</p>
//                 <span className='font-bold text-[55px] text-white'>$5</span>
//             </div>

//             <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[212px] h-[65px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2'>
//                 <img src={Car} alt="" />
//                 <p className='text-[14px] sm:text-[17px]'>Order Now</p>
//             </button>
//         </motion.div>
//         {/* right.............. */}
//         <div className="relative flex flex-col items-center">
//             <motion.img  initial={{ y: -150, opacity: 0 }}   // start above, invisible
//                 animate={{ y: 0, opacity: 1 }}      // land in place
//                 transition={{ duration: 0.8, ease: "easeOut" }} src={Header} alt="Header"  className="w-[308px] h-[86px] mb-6 z-20 relative mt-3" />
//             <div className="flex justify-center items-center relative w-[633px] h-[633px] ">
//                 <motion.img 
//                     src={Chilly} 
//                     alt="" 
//                     className="absolute"
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 8 }}/>

//                 <motion.img 
//                     src={Tomatto} 
//                     alt="" 
//                     className="absolute right-[-190px]"
//                     animate={{ y: [0, -20, 0] }}
//                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//                     />
//                  <motion.img 
//                     src={Burgertitle} 
//                     alt="Burger title" 
//                     className="absolute bottom-[190px] left-[-60px] w-[371px] h-[245px] z-0"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//                     />
//                 <motion.img 
//                     src={Burger} 
//                     alt="Burger" 
//                     className="w-[200px] sm:w-[400px] lg:w-[533px] h-auto relative z-10 -mt-8"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
//                     />
//             </div>
//         </div>



//     </motion.div>
//   )
// }

// export default Banner



import React from 'react'
import Car from "../assets/car.svg"
import Burger from "../assets/burger.png"
import Burgertitle from "../assets/burgertitle.svg"
import Header from "../assets/header.svg"
import Chilly from "../assets/mbg1.svg"
import Slice from "../assets/slice.svg"
import Tomatto from "../assets/tomatto.svg"
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} 
      className='w-full h-full bg-red-900 flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-[70px] p-4 lg:p-0' id='home'>
      {/* left side........................xxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className='font-oswald flex flex-col items-center lg:items-start relative w-full lg:w-auto'
      >
        <img src={Slice} alt="" className='absolute left-0 hidden sm:block'/>
        <p className='font-semibold text-[16px] sm:text-[20px] text-[#FFC222] mb-2'>crispy, every bite taste</p>
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold text-white flex flex-col leading-none text-center lg:text-left'
        >
          <p>HOT SPICY</p>
          <p>CHICKEN</p>
          <p>BURGER</p>
        </motion.div>

        <div className='flex gap-2 sm:gap-4 items-center mt-2'>
          <p className='text-white text-[20px] sm:text-[28px] flex flex-row'>Limited Offer /</p>
          <span className='font-bold text-[40px] sm:text-[55px] text-white'>$5</span>
        </div>

        <button className='bg-[#EE284B] rounded-[9px] font-oswald font-semibold w-[160px] sm:w-[212px] h-[50px] sm:h-[65px] text-white flex items-center justify-center gap-2 mt-3 transition-transform duration-300 hover:-translate-y-1 sm:hover:-translate-y-2'>
          <img src={Car} alt="" className='w-5 h-5 sm:w-6 sm:h-6'/>
          <p className='text-[14px] sm:text-[17px]'>Order Now</p>
        </button>
      </motion.div>

      {/* right side........................xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...................... */}
      <div className="relative flex flex-col items-center w-full lg:w-auto mt-10 lg:mt-0">
        <motion.img  
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={Header} alt="Header" 
          className="w-[180px] sm:w-[250px] lg:w-[308px] h-auto mb-6 z-20 relative mt-3"
        />
        <div className="relative w-[250px] sm:w-[400px] lg:w-[633px] h-[250px] sm:h-[400px] lg:h-[633px]">
          <motion.img 
            src={Chilly} 
            alt="" 
            className="absolute w-[400px] sm:w-[800px] lg:w-auto"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />

           <motion.img 
              src={Tomatto} 
              alt="" 
              className="absolute flex md:left-[190px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

          <motion.img 
            src={Burgertitle} 
            alt="Burger title" 
            className="absolute bottom-[90px] sm:bottom-[140px] lg:bottom-[190px] left-[-30px] sm:left-[-40px] lg:left-[-60px] w-[200px] sm:w-[300px] lg:w-[371px] h-auto z-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />

          <motion.img 
            src={Burger} 
            alt="Burger" 
            className="relative z-10 -mt-4 sm:-mt-6 lg:-mt-8 w-[300px] sm:w-[400px] lg:w-[533px] h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Banner
