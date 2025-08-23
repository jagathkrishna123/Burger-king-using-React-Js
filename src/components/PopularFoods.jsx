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
    <div className='w-full bg-gray-100 py-16 px-6'>
        <div className='text-center mb-10'>
            <p className='text-[17px] font-bold font-oswald text-[#00A149]'>crispy, every bite taste</p>
            <p className='text-[60px] font-bold font-oswald text-[#212121]'>Popular Fast Foods</p>
        </div>

        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {products.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded w-[210px] h-[340px] hover:shadow-xl p-4 relative transition">
                    <button>
                    <img src={Like} alt="" className="absolute -top-5 left-3 w-[60px]"/>
                    </button>
                    <img src={item.img} alt="" className="w-[150px] h-[150px] ml-6" />

                    <div className='mt-[70px]'>
                    <div className='flex flex-row items-center justify-center'>
                    <span className='bg-[#FFC222] rounded-[2px] px-2 py-1'>{item.discount}</span>
                    <div className='flex gap-2 p-2 items-baseline'>
                        <span className='font-oswald text-[17px] font-[400] text-[#5C5C5B] line-through'>{item.oldPrice}</span>
                        <span className='font-oswald font-[600] text-[#5C5C5B] text-[16px]'>{item.newPrice}</span>
                    </div>
                    </div>
                    <p className='text-center font-oswald text-[17px] font-[600] text-[#212121]'>{item.title}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
             <div className='flex items-center justify-center mt-5'>
                <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[170px] h-[50px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2'>
                <img src={Car} alt="" className='transition-transform duration-300 hover:-translate-x-3' />
                <p className='text-[17px]'>View More</p>
            </button>
            </div>                   
    </div>
  )
}

export default PopularFoods