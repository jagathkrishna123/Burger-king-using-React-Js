import React from 'react'
import F1 from "../assets/f1.svg"
import F2 from "../assets/f2.svg"
import F3 from "../assets/f3.svg"
import F4 from "../assets/f4.svg"
import F5 from "../assets/f5.svg"
import F6 from "../assets/f6.svg"
import F7 from "../assets/f7.svg"
import F8 from "../assets/f8.svg"
import Like from "../assets/like.svg"
import Car from "../assets/car.svg"
import { motion } from 'framer-motion'







const PopularFoods = () => {
    const products = [
        {
            id:1,
            title:"Delicious Burger",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F1
        },
        {
            id:2,
            title:"Grilled Chicken",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F2
        },
        {
            id:3,
            title:"Ruti with Chicken",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F3
        },
        {
            id:4,
            title:"Fast Food Combo",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F4
        },
        {
            id:5,
            title:"Chickago Deep Pizza",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F5
        },
        {
            id:6,
            title:"Chinease pasta",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F6
        },
        {
            id:7,
            title:"Wooper Burger King",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F7
        },
        {
            id:8,
            title:"Ruti with Beef Slice",
            discount: "-25%",
            oldPrice: "60.00$",
            newPrice: "45.00$",
            img:F8
        },
    ]
  return (
    <motion.div initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} className='w-full bg-gray-100 py-16 px-6' id='fastfoods'>
        <div className='text-center mb-10'>
            <p className='text-[17px] font-bold font-oswald text-[#00A149]'>crispy, every bite taste</p>
            <p className='text-[36px] md:text-[50px] font-bold font-oswald text-[#212121]'>Popular Fast Foods</p>
        </div>

        <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-9">
                {products.map((item) => (
                <motion.div initial={{ y: -150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}     
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    key={item.id}
                    className="bg-white rounded-lg w-full max-w-[190px] md:max-w-[210px] md:h-fit shadow-lg hover:shadow-2xl px-8 py-3 relative transition">
                    <button>
                        <img src={Like} alt="" className="absolute -top-[10px] md:-top-5 left-3 w-[45px] md:w-[60px]"/>
                    </button>
                    <img src={item.img} alt="" className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] flex justify-center" />

                    <div className='mt-1 md:mt-[40px]'>
                    <div className='flex flex-row items-center justify-center'>
                        <span className='bg-[#FFC222] rounded-[2px] md:px-2 md:py-1 text-[#212121] font-semibold text-[14px] md:text-[16px]'>{item.discount}</span>
                    <div className='flex gap-2 p-2 items-baseline'>
                        <span className='font-oswald text-[13px] md:text-[17px] font-[400] text-[#5C5C5B] line-through'>{item.oldPrice}</span>
                        <span className='font-oswald font-[600] text-[#5C5C5B] text-[14px] md:text-[16px]'>{item.newPrice}</span>
                    </div>
                    </div>
                    <p className='text-center font-oswald text-[15px] md:text-[17px] font-[600] text-[#212121]'>{item.title}</p>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
             <div className='flex items-center justify-center mt-5'>
                <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[110px] h-[40px] md:w-[170px] md:h-[50px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2'>
                    <img src={Car} alt="" className='transition-transform duration-300 hover:-translate-x-3 w-[18px] md:w-[22px]' />
                    <p className='text-[14px] md:text-[17px]'>View More</p>
                </button>
            </div>                   
    </motion.div>
  )
}

export default PopularFoods