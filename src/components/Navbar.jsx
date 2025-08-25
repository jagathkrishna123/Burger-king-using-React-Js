import React from 'react'
import Pzlogo from "../assets/pzlogo.png"
import Cart from "../assets/cart.svg"


const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white flex justify-between items-center pl-[40px] pr-[40px]'>
        <div className='flex flex-row items-center pt-3 cursor-pointer'>
            <img src={Pzlogo} alt="" className='w-[119px] h-[67px]' />
            <p className='font-fugaz text-[#EE3A43] text-[24px]'>pizza hut</p>
        </div>

        <div className='p-3 items-center justify-center '>
            <ul className='font-oswald text-[18px] font-medium flex flex-row gap-[22px] cursor-pointer'>
                <li>Home</li>
                <li>About Us</li>
                <li>Shopx</li>
                <li>Blogx</li>
                <li>Pages</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='flex flex-row gap-[22px] mr-5'>
            <img src={Cart} alt="" />
            <button className='font-oswald text-[17px] font-semibold text-white bg-[#FFC222] rounded-[7px] p-[10px] hover:bg-yellow-500 transition-all'>Conatct Us</button>
        </div>
    </div>
  )
}

export default Navbar