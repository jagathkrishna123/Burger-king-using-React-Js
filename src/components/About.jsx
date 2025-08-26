import React from 'react'
import Burger22 from "../assets/Burger2.svg"
import Burgertitle from "../assets/burgertitle.svg"
import Year from "../assets/year.svg"
import Price from "../assets/price.svg"
import Ad3 from "../assets/ad3.svg"
import Ad4 from "../assets/ad4.svg"





const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white w-full h-full mt-[50px] mb-[50px] p-4 md:p-6' id='about'>

      <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
              <img src={Burger22} alt="" className="absolute max-w-full h-auto" />
              <img src={Burgertitle} alt="" className="absolute w-2/3 top-0 -left-10" />
              <img src={Year} alt="" className='absolute w-20 md:w-28 bottom-0 right-0'/>
              <img src={Price} alt="" className='absolute w-10 md:w-14 left-0 bottom-0'/>
          </div>
      </div>


      <div className='flex flex-col  md:justify-start justify-center items-center md:items-start mt-6 md:mt-0 px-3'>
          <div className='flex flex-col font-oswald text-center md:text-left'>
              <p className='text-[#00A149] text-base md:text-[17px]'>About Our Food</p>
              <p className='font-bold text-[36px] md:text-[50px] text-[#212121]'>Where Quality Meet</p>
              <p className='font-bold text-[36px] md:text-[50px] text-[#212121]'>Excellent <span className='text-[#00A149]'>Service.</span></p>
              <p className='text-[#5C5C5B] text-sm md:text-[17px]'>Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience <br />
              quick and efficient service that ensures your food is servead fresh Its the dining experience where <br />
              every dish is crafted with fresh, high-quality ingredients</p>
          </div>
          {/* 2 cards........... */}
          <div className="flex flex-col md:flex-row mt-6 gap-6">
                    <div className="flex flex-row gap-3">
                      <img src={Ad3} alt="" className="w-12 h-12" />
                      <div>
                        <p className="font-oswald font-semibold text-lg text-[#212121]">Super Quality Food</p>
                        <p className="text-[#212121] text-sm md:text-base font-oswald">
                          A team of dreamers and doers building <br /> unique interactive experiences.
                        </p>
                      </div>
                    </div>
          
                    <div className="flex flex-row gap-3">
                      <img src={Ad4} alt="" className="w-12 h-12" />
                      <div>
                        <p className="font-oswald font-semibold text-lg text-[#212121]">Well Reputation</p>
                        <p className="text-[#212121] text-sm md:text-base font-oswald">
                          A team of dreamers and doers building <br /> unique interactive experiences.
                        </p>
                      </div>
                    </div>
                  </div>
          {/* Button................ */}
          <div className='flex flex-col md:flex-row gap-4 mt-8 items-center'>
            <button className='px-6 py-3 md:px-8 md:py-4 font-oswald text-white bg-[#00A149] rounded-lg text-sm md:text-lg'>More about us</button>
            <div className='flex flex-col font-oswald text-center md:text-left'>
                <p className='text-[#FFC222] text-sm md:text-base'>BRENDON GARREY</p>
                <p className='text-[#212121] text-sm md:text-base'>CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About

// import React from 'react'
// import Burger22 from "../assets/Burger2.svg"
// import Burgertitle from "../assets/burgertitle.svg"
// import Year from "../assets/year.svg"
// import Price from "../assets/price.svg"
// import Ad3 from "../assets/ad3.svg"
// import Ad4 from "../assets/ad4.svg"

// const About = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 bg-white w-full h-full mt-12 mb-12 p-4 md:p-6">
      
//       {/* Left section (images) */}
//       <div className="flex flex-col items-center justify-center flex-1">
//         <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
//           <img src={Burger22} alt="" className="absolute max-w-full h-auto" />
//           <img src={Burgertitle} alt="" className="absolute w-2/3 top-0 -left-10" />
//           <img src={Year} alt="" className="absolute w-20 md:w-28 bottom-0 right-0" />
//           <img src={Price} alt="" className="absolute w-10 md:w-14 left-0 bottom-0" />
//         </div>
//       </div>

//       {/* Right section (text + info) */}
//       <div className="flex flex-col md:justify-start justify-center items-center md:items-start mt-6 md:mt-0 px-3">
        
//         {/* About Text */}
//         <div className="flex flex-col font-oswald text-center md:text-left">
//           <p className="text-[#00A149] text-base md:text-lg">About Our Food</p>
//           <p className="font-bold text-3xl md:text-5xl text-[#212121]">Where Quality Meet</p>
//           <p className="font-bold text-3xl md:text-5xl text-[#212121]">
//             Excellent <span className="text-[#00A149]">Service.</span>
//           </p>
//           <p className="text-[#5C5C5B] text-sm md:text-base mt-3 leading-relaxed">
//             Its the perfect dining experience where every dish is crafted with fresh, high-quality ingredients. <br />
//             Experience quick and efficient service that ensures your food is served fresh.
//           </p>
//         </div>

//         {/* Features */}
//         <div className="flex flex-col md:flex-row mt-6 gap-6">
//           <div className="flex flex-row gap-3">
//             <img src={Ad3} alt="" className="w-12 h-12" />
//             <div>
//               <p className="font-oswald font-semibold text-lg text-[#212121]">Super Quality Food</p>
//               <p className="text-[#212121] text-sm md:text-base font-oswald">
//                 A team of dreamers and doers building <br /> unique interactive experiences.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-row gap-3">
//             <img src={Ad4} alt="" className="w-12 h-12" />
//             <div>
//               <p className="font-oswald font-semibold text-lg text-[#212121]">Well Reputation</p>
//               <p className="text-[#212121] text-sm md:text-base font-oswald">
//                 A team of dreamers and doers building <br /> unique interactive experiences.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button + Quote */}
//         <div className="flex flex-col md:flex-row gap-4 mt-8 items-center">
//           <button className="px-6 py-3 md:px-8 md:py-4 font-oswald text-white bg-[#00A149] rounded-lg text-sm md:text-lg">
//             More about us
//           </button>
//           <div className="flex flex-col font-oswald text-center md:text-left">
//             <p className="text-[#FFC222] text-sm md:text-base">BRENDON GARREY</p>
//             <p className="text-[#212121] text-sm md:text-base">
//               CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default About
