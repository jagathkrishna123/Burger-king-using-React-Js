import React from 'react'
import Food1 from "../assets/food1.svg"
import Food2 from "../assets/food2.svg"
import Food3 from "../assets/food3.svg"
import Food4 from "../assets/food4.svg"
import Food5 from "../assets/food5.svg"
import Footerleft from "../assets/footerleft.svg"
import Footerright from "../assets/footerright.svg"


const Footer = () => {
  return (
    <div className='flex flex-col mt-[40px]'>
        <div className='flex flex-wrap justify-center'>
            <img src={Food1} alt="" className='w-40 sm:w-48 md:w-60 h-auto'/>
            <img src={Food2} alt="" className='w-40 sm:w-48 md:w-60 h-auto'/>
            <img src={Food3} alt="" className='w-40 sm:w-48 md:w-60 h-auto'/>
            <img src={Food4} alt="" className='w-40 sm:w-48 md:w-60 h-auto'/>
            <img src={Food5} alt="" className='w-40 sm:w-48 md:w-60 h-auto'/>
        </div>
        <div className='w-full h-full flex flex-col m-[50px]'>
            <div className='flex flex-row justify-evenly'>
                <div className='bg-[#F3274C] w-[330px] h-[300px] rounded-[30px] text-white font-fugaz'>
                    <div className='flex flex-col m-3 pl-[30px] gap-[60px]'>
                        <div className='flex flex-col '>
                          <p className='text-[24px]'>pizza hut</p>
                          <p className='text-[10px] ml-[20px]'>FOOD RESTAURANT</p>
                        </div>
                        <div>
                          <p className='text-[16px]'>Tuesday – Saturday: 12:00pm – 23:00pm</p>
                          <p className='underline'>Closed on Sunday</p>
                        </div>
                        <div>
                          <p>5 star rated on TripAdvisor</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center'>
                  <div>
                    <p className='text-[26px] underline font-extrabold text-gray-700'>About</p>
                    <div>
                      <ul className='text-[16px] flex flex-col gap-4'>
                        <li>Fredoka one</li>
                        <li>Special Dish</li>
                        <li>Reservation</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='flex items-center'>
                  <div>
                    <p className='text-[26px] text-gray-700 underline font-extrabold'>Menu</p>
                    <div>
                      <ul className='text-[16px] flex flex-col gap-4'>
                        <li>Fredoka one</li>
                        <li>Special Dish</li>
                        <li>Reservation</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <p className='text-[26px] underline font-extrabold text-gray-700'>Newsletter</p>
                    <div className='flex flex-col gap-[30px]'>
                      <p>Get recent news and updates.</p>
                      <input type="text" placeholder='Email Address' className='border-[2px] border-gray-300 rounded-lg p-3 outline-none' />
                      <button className='bg-[#EE284B] rounded-[9px]  font-oswald font-semibold w-[170px] h-[50px] text-white items-center justify-center flex flex-row gap-2 mt-3 transition-transform duration-300 hover:-translate-y-2'>
                            <p className='text-[17px]'>Subscribe</p>
                        </button>
                    </div>
                  </div>
                </div>
            </div>
              {/* <div className='relative'>
                <img src={Footerleft} alt="" className='absolute right-0'/>
                <img src={Footerright} alt="" className='absolute'/>
              </div> */}
        </div>
    </div>
  )
}

export default Footer