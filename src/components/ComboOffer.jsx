import React from 'react'
import Button1 from "../assets/button1.svg"
import Button2 from "../assets/button2.svg"
import Button3 from "../assets/button3.svg"
import Drinks from "../assets/drinks.svg"
import Backgroundimg from "../assets/bg.jpg"
import Footer from "../assets/footer.svg"









const ComboOffer = () => {
  return (
    <div className='bg-gray-300 w-full h-[762px] flex flex-col md:flex-row relative gap-3 md:gap-0 '>
        <div className='flex flex-col items-center justify-center  flex-1 m-4 md:m-0 '>
            <div className='flex flex-col'>
                <div className='leading-none'>
                <p className='font-oswald font-bold text-[17px] text-[#00A149]'>CRISPY, EVERY BITE TASTE</p>
                <p className='font-oswald font-bold text-[50px] text-[#212121]'>Trending Food combo</p>
                <p className='font-oswald font-bold text-[50px] text-[#212121]'>offer less <span className='text-[#00A149]'>20%</span></p>
                <p className='text-[#5C5C5B] font-oswald text-[17px]'>A team of dreamers and doers building unique interactive music and art festivals.</p>
                </div>
                <div className='mt-7 flex flex-col gap-3'>
                    <div className='w-[423px] h-[66px] bg-[#F4F1EA] flex flex-row items-center px-3 rounded-[5px] gap-3'>
                        <img src={Button1} alt="" />
                        <p className='text-[#212121] font-oswald font-medium text-[17px]'>30% Off 4pcs Hot Crispy & 8 Pcs Wing</p>
                    </div>
                    <div className='w-[423px] h-[66px] bg-[#FFC222] flex flex-row items-center px-3 rounded-[5px] gap-3'>
                        <img src={Button2} alt="" />
                        <p className='text-[#212121] font-oswald font-medium text-[17px]'>20% Off Tasty Pizza With Drink</p>
                    </div>
                    <div className='w-[423px] h-[66px] bg-[#F4F1EA] flex flex-row items-center px-3 rounded-[5px] gap-3'>
                        <img src={Button3} alt="" />
                        <p className='text-[#212121] font-oswald font-medium text-[17px]'>2pcs Humbergur With Drinks & Sauce</p>
                    </div>
                    <img src={Drinks} alt="" className='absolute -bottom-[200px] left-0 w-[160px] h-full'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center flex-1'>
            <img src={Backgroundimg} alt=""  className='w-full h-full'/>
        </div>
        {/* <img src={Footer} alt=""  className='w-full h-full'/> */}
    </div>
  )
}

export default ComboOffer