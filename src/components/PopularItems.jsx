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
    <div className='w-full h-full bg-slate-100 items-center justify-center md:px-20 mt-[80px]' id='items'>
        <div className='flex flex-row p-[10px] md:p-[50px] gap-auto justify-between'>
            <div className='flex flex-col'>
                <p className='font-oswald font-bold text-[17px] text-[#00A149]'>crispy, every bite taste</p>
                <p className='font-oswald font-bold text-[36px] md:text-[50px] text-[#212121] flex '>Popular Food Items</p>
            </div>
            <div className='flex flex-row '>
                <img src={arrowleft} alt="" className='mb-3 w-[32px] md:w-[50px] invert'/>
                <img src={arrowright} alt="" className='w-[50px] md:w-[60px]'/>
            </div>
        </div>
        <div className='w-full'>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 px-2'>
                {carddetails.map((item, index)=> (
                    
                    <motion.div initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} key={index} className=" rounded-[14px] shadow-2xl hover:shadow-lg text-center transition bg-white w-full h-auto cursor-pointer p-2">
                        <img src={item.img} alt={item.title}
                        className="mx-auto object-contain mb-4 top-[20px] left-[39px] w-[150px] h-[150px]"/>
                        <h3 className="font-bold font-oswald text-[20px] md:text-[28px]">{item.title}</h3>
                        <p className="text-[#FFC222] text-[17px] font-semibold font-oswald">{item.products}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        <div className='flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row items-center justify-center mt-[25px] gap-2 relative mb-2'>
            <img src={Banner1} alt="" className='w-[313px] h-[180px] md:w-[513px] md:h-[280px] rounded-[20px]'/>
            <img src={Banner2} alt="" className='w-[680px] h-[280px] p-2'/>
            <img src={Chilly2} alt="" className='absolute -left-[80px]' />
            <img src={Burgersketch} alt="" className='absolute -right-[100px]' />
        </div>
        </div>
        <img src={Footer} alt="" />
    </div>
  )
}

export default PopularItems