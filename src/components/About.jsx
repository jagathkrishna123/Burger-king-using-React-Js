import React from 'react'
import Burger22 from "../assets/Burger2.svg"
import Burgertitle from "../assets/burgertitle.svg"
import Year from "../assets/year.svg"
import Price from "../assets/price.svg"
import Ad3 from "../assets/ad3.svg"
import Ad4 from "../assets/ad4.svg"





const About = () => {
  return (
    <div className='flex flex-row bg-white w-full h-full mt-[50px] mb-[50px]'>
      <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              <img src={Burger22} alt="" className="absolute" />
              <img src={Burgertitle} alt="" className="absolute w-[210px] h-[160px] top-0 -left-[80px]" />
              <img src={Year} alt="" className='absolute w-28 bottom-0 right-0'/>
              <img src={Price} alt="" className='absolute w-14 left-0 bottom-0'/>
          </div>
      </div>


      <div className='flex flex-col flex-1 justify-start'>
          <div className='flex flex-col font-oswald'>
              <p className='text-[#00A149] text-[17px]'>About Our Food</p>
              <p className='font-bold text-[60px] text-[#212121]'>Where Quality Meet</p>
              <p className='font-bold text-[60px] text-[#212121]'>Excellent <span className='text-[#00A149]'>Service.</span></p>
              <p className='text-[#5C5C5B] text-[17px]'>Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience <br />
              quick and efficient service that ensures your food is servead fresh Its the dining experience where <br />
              every dish is crafted with fresh, high-quality ingredients</p>
          </div>
          <div className='flex flex-row mt-5'>
              <div className='flex flex-row p-3'>
                  <div className='flex flex-col'>
                      <img src={Ad3} alt="" className='mr-2'/>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-oswald font-semibold text-[20px] text-[#212121]'>super quality food</p>
                    <p className='text-[#212121] text-[17px] font-oswald'>A team of dreamers and doers <br />
                      building unique interactive music <br />
                      and art</p>
                  </div>
              </div>

              <div className='flex flex-row p-3'>
                  <div className='flex flex-col'>
                      <img src={Ad4} alt="" className='mr-2'/>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-oswald font-semibold text-[20px] text-[#212121]'>well reputation</p>
                    <p className='text-[#212121] text-[17px] font-oswald'>A team of dreamers and doers <br />
                      building unique interactive music <br />
                      and art</p>
                  </div>
              </div>
              
          </div>
          <div className='flex flex-row gap-4 mt-[30px]'>
            <button className='w-[209px] h-[65px] font-oswald text-white bg-[#00A149] rounded-[9px]'>More about us</button>
            <div className='flex flex-col font-oswald'>
                <p className='text-[#FFC222]'>BRENDON GARREY</p>
                <p className='text-[#212121]'>CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About