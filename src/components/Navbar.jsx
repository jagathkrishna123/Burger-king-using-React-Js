// import React from 'react'
// import Pzlogo from "../assets/pzlogo.png"
// import Cart from "../assets/cart.svg"


// const Navbar = () => {
//   return (
//     <div className='w-full h-[80px] bg-white flex justify-between items-center pl-[40px] pr-[40px]'>
//         <div className='flex flex-row items-center pt-3 cursor-pointer'>
//             <img src={Pzlogo} alt="" className='w-[119px] h-[67px]' />
//             <p className='font-fugaz text-[#EE3A43] text-[24px]'>pizza hut</p>
//         </div>

//         <div className='p-3 items-center justify-center '>
//             <ul className='font-oswald text-[18px] font-medium flex flex-row gap-[22px] cursor-pointer'>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Shopx</li>
//                 <li>Blogx</li>
//                 <li>Pages</li>
//                 <li>Contact</li>
//             </ul>
//         </div>

//         <div className='flex flex-row gap-[22px] mr-5'>
//             <img src={Cart} alt="" />
//             <button className='font-oswald text-[17px] font-semibold text-white bg-[#FFC222] rounded-[7px] p-[10px] hover:bg-yellow-500 transition-all'>Conatct Us</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import Pzlogo from "../assets/pzlogo.png"
import Cart from "../assets/cart.svg"
import Menu from "../assets/menu.svg"
import arrowleft from "../assets/arrowleft.svg"
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-[80px] bg-white flex justify-between items-center px-4 md:px-[40px] whitespace-nowrap">
      
      {/* Logo...................xxxxxxxxxxxxxxxxxxxx */}
      <div className="flex flex-row items-center pt-3 cursor-pointer">
        <img src={Pzlogo} alt="" className="w-[80px] md:w-[119px] h-[50px] md:h-[67px] mb-3" />
        <p className="hidden md:block font-fugaz text-[#EE3A43] text-[20px] md:text-[24px] ml-2">pizza hut</p>
      </div>

      {/* Menu..........................xxxxxxxxx*/}
      <div className="hidden md:flex p-3 items-center justify-center">
        <ul className="font-oswald text-[16px] md:text-[18px] font-medium flex flex-row gap-[15px] md:gap-[22px] cursor-pointer">
          
          {/* <NavLink><li>Home</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></NavLink>
          <NavLink><li>About Us</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></NavLink>
          <NavLink><li>Shopx</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></NavLink>
          <NavLink><li>Blogx</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></NavLink>
          <NavLink><li>Pages</li> <hr className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden' /></NavLink>
          <NavLink><li>Contact</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></NavLink> */}
          <a href='#home'><li>Home</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></a>
          <a href='#about'><li>About Us</li> <hr  className='border-none outline-none scroll-smooth h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></a>
          <a href='#items'><li>Products</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></a>
          <a href='#offer'><li>Offers</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></a>
          <a href='#fastfoods'><li>Fast Foods</li> <hr className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden' /></a>
          <a href='#footer'><li>Contact</li> <hr  className='border-none outline-none h-0.5 bg-gray-700 w-3/5 m-auto hidden'/></a>
          
          
        </ul>
      </div>

      {/* rightside button.......................xxxxxxxxxxxxxxxxxxx */}
      <div className="flex flex-row gap-[12px] md:gap-[22px] mr-3 md:mr-5">
        <img src={Cart} alt="" className="w-9 h-9 md:w-auto md:h-auto" />
        <a href="#footer"><button className="font-oswald text-[12px] md:text-[17px] font-semibold text-white bg-[#FFC222] rounded-[7px] px-3 py-2 md:px-[10px] hover:bg-yellow-500 transition-all outline-none">
          Contact Us
        </button></a>

        <img onClick={()=>setShowMenu(true)} src={Menu} alt="" className='md:hidden w-8' />
        {/* mobile menu........................................................... */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 bottom-0 top-0 z-30 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <p className="font-fugaz text-[#EE3A43] text-[20px] md:text-[24px] ml-2">pizza hut</p>
            <img onClick={()=> setShowMenu(false)} src={arrowleft} alt="" className='mb-3 w-[28px] md:w-[50px] invert'/>
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium font-oswald'>
            <a href="#home"><li onClick={()=> setShowMenu(false)} className='px-4 py-3 rounded inline-block'>Home</li></a>
            <a href="#about"><li onClick={()=> setShowMenu(false)} className='px-4 py-3 rounded inline-block'>About us</li></a>
            <a href="#items"><li onClick={()=> setShowMenu(false)} className='px-4 py-3 rounded inline-block'>Products</li></a>
            <a href="#offer"><li onClick={()=> setShowMenu(false)} className='px-4 py-3 rounded inline-block'>Offers</li></a>
            <a href="#fastfoods"><li onClick={()=> setShowMenu(false)} className='px-4 py-3 rounded inline-block'>Fast Foods</li></a>
            <a href="#footer"><li onClick={()=> setShowMenu(false)} className='px-4 py-3 rounded inline-block'>Contact</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
