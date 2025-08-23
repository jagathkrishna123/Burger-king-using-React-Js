import React from 'react'
import arrowleft from "../assets/arrowleft.svg"
import arrowright from "../assets/arrowright.svg"
import Chicken from "../assets/chicken.svg"
import Pasta from "../assets/pasta.svg"
import Pizza from "../assets/pizza.svg"
import Burger from "../assets/burger.svg"
import Banner1 from "../assets/banner1.svg"
import Banner2 from "../assets/banner2.svg"
import Chilly2 from "../assets/chilly2.svg"
import Burgersketch from "../assets/burgersketch.svg"
import Footer from "../assets/footer.svg"
import { motion } from 'framer-motion'




const carddetails = [
    {
        img:Chicken,
        title:"Chicken",
        products:"8 Product"
    },
    {
        img:Pasta,
        title:"Pasta",
        products:"3 Product"
    },
    {
        img:Burger,
        title:"Burger",
        products:"3 Product"
    },
    {
        img:Pizza,
        title:"Pizza",
        products:"8 Product"
    },
]

const PopularItems = () => {
  return (
    <div className='w-full h-full bg-slate-100 items-center justify-center md:px-20'>
        <div className='flex flex-row justify-around mt-6'>
            <div>
                <p className='font-oswald font-bold text-[17px] text-[#00A149]'>crispy, every bite taste</p>
                <p className='font-oswald font-bold text-[55px] text-[#212121]'>Popular Food Items</p>
            </div>
            <div className='flex flex-row items-center justify-end'>
                <img src={arrowleft} alt="" className='mb-3 w-[50px]'/>
                <img src={arrowright} alt="" className='w-[70px]'/>
            </div>
        </div>
        <div className='flex flex-col items-center justify-around'>

            <div className='flex flex-row items-center justify-center gap-[90px] mt-[20px] mb-3 md:grid-cols-4'>
                {carddetails.map((item, index)=> (
                    // <div key={index} className=' rounded-xl shadow p-5 text-center bg-gray-500'>
                    //     <img src={item.img} alt="" className='mx-auto w-28 h-28 object-contain mb-4'/>
                    //     <h3>{item.title}</h3>
                    //     <p>{item.products}</p>
                    // </div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} key={index} className=" rounded-[14px] shadow-2xl hover:shadow-lg text-center transition bg-white w-[200px] h-[280px] cursor-pointer mb-3">
                        <img src={item.img} alt={item.title}
                        className="mx-auto object-contain mb-4 top-[20px] left-[39px] w-[150px] h-[150px]"/>
                        <h3 className="font-bold font-oswald text-[28px]">{item.title}</h3>
                        <p className="text-[#FFC222] text-[17px] font-semibold font-oswald">{item.products}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center justify-center mt-[25px] gap-2 relative md:grid-cols-2'>
            <img src={Banner1} alt="" className='w-[513px] h-[350px] rounded-[20px]'/>
            <img src={Banner2} alt="" className='w-[727px] h-[350px]'/>
            <img src={Chilly2} alt="" className='absolute -left-[80px]' />
            <img src={Burgersketch} alt="" className='absolute -right-[100px]' />
        </div>
        {/* <p className='font-oswald font-semibold text-[20px] ml-5'>GLOBAL <span className='text-[#FFC222]'>5K+</span> HAPPY SPONSORS WITH US</p> */}
        </div>
        <img src={Footer} alt="" />
    </div>
  )
}

export default PopularItems