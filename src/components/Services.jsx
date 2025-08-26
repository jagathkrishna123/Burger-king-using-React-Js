import React from 'react'
import Ad1 from "../assets/ad1.svg"
import Ad2 from "../assets/ad2.svg"
import Ad3 from "../assets/ad3.svg"
import Ad4 from "../assets/ad4.svg"

const datas = [
    {
        img:Ad1,
        title: "super quality food",
        subtitle: "A team of dreamers and doesrs building unique interactive music and art",
    },
    {
        img:Ad2,
        title: "ORIGINAL RECIPES",
        subtitle: "A team of dreamers and doesrs building unique interactive music and art",
    },
    {
        img:Ad3,
        title: "QUICK FAST DELIVERY",
        subtitle: "A team of dreamers and doesrs building unique interactive music and art",
    },
    {
        img:Ad4,
        title: "100% FRESH FOODS",
        subtitle: "A team of dreamers and doesrs building unique interactive music and art",
    },
]
const Services = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-[40px] md:mt-[20px] p-2 md:p-0'>
        <div className='bg-[#EE284B] rounded-[14px] w-auto h-auto md:w-[900px] md:h-auto flex flex-col md:flex-row items-center '>
            {datas.map((item, index)=> (
                <div className='justify-around flex m-[40px]'>
                <div key={index} className='items-start flex flex-col bg-[#EE284B] justify-evenly'>
                    <img src={item.img} alt="" />
                    <p className='text-[15px] font-semibold font-oswald text-white'>{item.title}</p>
                    <p className='text-[13px] font-normal font-oswald text-white'>{item.subtitle}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services