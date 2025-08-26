// import React from "react";
// import BurgerImg from "../assets/burger.png";
// import PastaImg from "../assets/pasta.png";
// import PizzaImg from "../assets/pizza.png";
// import ChickenImg from "../assets/chicken.png";
// import BannerBurger from "../assets/banner-burger.png";
// import BannerPizza from "../assets/banner-pizza.png";

// const PopularFood = () => {
//   return (
//     <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
//       {/* Section 1: Heading */}
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <p className="text-green-600 font-medium">Crispy, Every Bite Taste</p>
//           <h2 className="text-3xl font-bold text-gray-900">Popular Food Items</h2>
//         </div>
//         <div className="flex gap-3">
//           <button className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-white text-lg">
//             ←
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-white text-lg">
//             →
//           </button>
//         </div>
//       </div>

//       {/* Section 2: Food Item Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//         {[
//           { img: ChickenImg, title: "Chiken", products: "8 Products" },
//           { img: BurgerImg, title: "Pro Burger", products: "3 Products" },
//           { img: PastaImg, title: "Pro Pasta", products: "3 Products" },
//           { img: PizzaImg, title: "Pro Pizza", products: "3 Products" },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-center transition"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="mx-auto w-28 h-28 object-contain mb-4"
//             />
//             <h3 className="font-bold text-lg">{item.title}</h3>
//             <p className="text-yellow-500 text-sm">{item.products}</p>
//           </div>
//         ))}
//       </div>

//       {/* Section 3: Offer Banners */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <img
//           src={BannerBurger}
//           alt="Burger Banner"
//           className="w-full rounded-xl shadow"
//         />
//         <img
//           src={BannerPizza}
//           alt="Pizza Banner"
//           className="w-full rounded-xl shadow"
//         />
//       </div>
//     </div>
//   );
// };

// export default PopularFood;
// //...............................................................................................................................................

// import React from "react";
// // Import your actual assets when ready
// // import FriesImg from "../assets/fries.png";
// // import TomatoImg from "../assets/tomato.png";
// // import LeafImg from "../assets/leaf.png";

// const HeroBanner = () => {
//   return (
//     <div
//       className="relative w-full h-[500px] flex items-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://www.transparenttextures.com/patterns/black-linen.png')", // fallback background
//       }}
//     >
//       {/* Content */}
//       <div className="container mx-auto px-6 md:px-20">
//         <div className="max-w-lg text-left">
//           <p className="text-white text-sm mb-2">Save 20%</p>
//           <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
//             Today&apos;s{" "}
//             <span className="text-yellow-400">Astackin</span> Day
//           </h1>
//           <p className="text-lg text-white mt-2">
//             Grilled <span className="text-yellow-400 font-semibold">Chiken</span>{" "}
//             $59,00
//           </p>

//           <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition">
//             Order Now
//           </button>
//         </div>
//       </div>

//       {/* Corner Decorative Images */}
//       <img
//         src="https://via.placeholder.com/120x120" // replace with FriesImg
//         alt="Fries"
//         className="absolute bottom-0 left-0 w-32"
//       />
//       <img
//         src="https://via.placeholder.com/80x80" // replace with TomatoImg
//         alt="Tomato"
//         className="absolute bottom-4 right-4 w-16"
//       />
//     </div>
//   );
// };

// export default HeroBanner;
// //=========================================================================================================================================================
// import React from "react";
// // import your images here

// const PopularFastFoods = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Delicious Burger",
//       discount: "-25%",
//       oldPrice: "60.00$",
//       newPrice: "45.00$",
//       img: "https://via.placeholder.com/150", // replace later
//     },
//     {
//       id: 2,
//       title: "Grilled Chicken",
//       discount: "-7%",
//       oldPrice: "42.00$",
//       newPrice: "39.00$",
//       img: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       title: "Ruti With Chicken",
//       discount: "-10%",
//       oldPrice: "29.00$",
//       newPrice: "26.00$",
//       img: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       title: "Fast Food Combo",
//       discount: "-18%",
//       oldPrice: "34.00$",
//       newPrice: "28.00$",
//       img: "https://via.placeholder.com/150",
//     },
//     {
//       id: 5,
//       title: "Chicago Deep Pizza",
//       discount: "-21%",
//       oldPrice: "28.00$",
//       newPrice: "22.00$",
//       img: "https://via.placeholder.com/150",
//     },
//     {
//       id: 6,
//       title: "Chinese Pasta",
//       discount: "-15%",
//       oldPrice: "40.00$",
//       newPrice: "34.00$",
//       img: "https://via.placeholder.com/150",
//     },
//     {
//       id: 7,
//       title: "Whopper Burger King",
//       discount: "-13%",
//       oldPrice: "30.00$",
//       newPrice: "26.00$",
//       img: "https://via.placeholder.com/150",
//     },
//     {
//       id: 8,
//       title: "Ruti With Beef Slice",
//       discount: "-7%",
//       oldPrice: "30.52$",
//       newPrice: "28.52$",
//       img: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <p className="text-green-600 font-medium">Crispy, Every Bite Taste</p>
//         <h2 className="text-3xl font-bold text-gray-900">Popular Fast Foods</h2>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-xl shadow hover:shadow-lg p-4 relative transition"
//           >
//             {/* Wishlist Icon */}
//             <button className="absolute top-3 left-3 bg-white rounded-full p-1 shadow">
//               
//             </button>

//             {/* Image */}
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-40 object-contain mb-4"
//             />

//             {/* Discount & Price */}
//             <div className="flex flex-col items-center gap-1">
//               <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
//                 {item.discount}
//               </span>
//               <div className="flex gap-2 text-sm text-gray-500">
//                 <span className="line-through">{item.oldPrice}</span>
//                 <span className="font-semibold text-black">{item.newPrice}</span>
//               </div>
//             </div>

//             {/* Title */}
//             <h3 className="text-center font-bold mt-2">{item.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       <div className="flex justify-center mt-12">
//         <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PopularFastFoods;


// import React from 'react'
// import Car from "../assets/car.svg"
// import Burger from "../assets/burger.png"
// import Burgertitle from "../assets/burgertitle.svg"
// import Header from "../assets/header.svg"
// import Chilly from "../assets/mbg1.svg"
// import Slice from "../assets/slice.svg"
// import Tomatto from "../assets/tomatto.svg"
// import { motion } from 'framer-motion'

// const Banner = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 150 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }} 
//       className='w-full h-full bg-red-900 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[70px] p-4 lg:p-0'
//     >
//       {/* left side */}
//       <motion.div 
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//         className='font-oswald flex flex-col items-center lg:items-start relative w-full lg:w-auto'
//       >
//         <img src={Slice} alt="" className='absolute left-0 hidden sm:block'/>
//         <p className='font-semibold text-[16px] sm:text-[20px] text-[#FFC222] mb-2'>crispy, every bite taste</p>
//         <motion.div 
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//           className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold text-white flex flex-col leading-none text-center lg:text-left'
//         >
//           <p>HOT SPICY</p>
//           <p>CHICKEN</p>
//           <p>BURGER</p>
//         </motion.div>

//         <div className='flex gap-2 sm:gap-4 items-center mt-2'>
//           <p className='text-white text-[20px] sm:text-[28px] flex flex-row'>Limited Offer /</p>
//           <span className='font-bold text-[40px] sm:text-[55px] text-white'>$5</span>
//         </div>

//         <button className='bg-[#EE284B] rounded-[9px] font-oswald font-semibold w-[160px] sm:w-[212px] h-[50px] sm:h-[65px] text-white flex items-center justify-center gap-2 mt-3 transition-transform duration-300 hover:-translate-y-1 sm:hover:-translate-y-2'>
//           <img src={Car} alt="" className='w-5 h-5 sm:w-6 sm:h-6'/>
//           <p className='text-[14px] sm:text-[17px]'>Order Now</p>
//         </button>
//       </motion.div>

//       {/* right side */}
//       <div className="relative flex flex-col items-center w-full lg:w-auto mt-10 lg:mt-0">
//         <motion.img  
//           initial={{ y: -150, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           src={Header} alt="Header" 
//           className="w-[180px] sm:w-[250px] lg:w-[308px] h-auto mb-6 z-20 relative mt-3"
//         />
//         <div className="relative w-[280px] sm:w-[400px] lg:w-[633px] h-[280px] sm:h-[400px] lg:h-[633px]">
//           <motion.img 
//             src={Chilly} 
//             alt="" 
//             className="absolute w-[400px] sm:w-[800px] lg:w-auto"
//             animate={{ rotate: [0, 10, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 8 }}
//           />

//           <motion.img 
//             src={Tomatto} 
//             alt="" 
//             className="absolute right-0 sm:right-[-150px] lg:right-[-190px] w-[500px] sm:w-[600px] lg:w-auto"
//             animate={{ y: [0, -20, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           />

//           <motion.img 
//             src={Burgertitle} 
//             alt="Burger title" 
//             className="absolute bottom-[90px] sm:bottom-[140px] lg:bottom-[190px] left-[-30px] sm:left-[-40px] lg:left-[-60px] w-[200px] sm:w-[300px] lg:w-[371px] h-auto z-0"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//           />

//           <motion.img 
//             src={Burger} 
//             alt="Burger" 
//             className="relative z-10 -mt-4 sm:-mt-6 lg:-mt-8 w-[200px] sm:w-[400px] lg:w-[533px] h-auto"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Banner

import React from 'react'
import Burger22 from "../assets/Burger2.svg"
import Burgertitle from "../assets/burgertitle.svg"
import Year from "../assets/year.svg"
import Price from "../assets/price.svg"
import Ad3 from "../assets/ad3.svg"
import Ad4 from "../assets/ad4.svg"

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white w-full h-full mt-12 mb-12 p-4 md:p-6">
      
      {/* Left section.............*/}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
          <img src={Burger22} alt="" className="absolute max-w-full h-auto" />
          <img src={Burgertitle} alt="" className="absolute w-2/3 top-0 -left-10" />
          <img src={Year} alt="" className="absolute w-20 md:w-28 bottom-0 right-0" />
          <img src={Price} alt="" className="absolute w-10 md:w-14 left-0 bottom-0" />
        </div>
      </div>

      {/* Right section (text + info) */}
      <div className="flex flex-col md:justify-start justify-center items-center md:items-start mt-6 md:mt-0 px-3">
        
        {/* About............*/}
        <div className="flex flex-col font-oswald text-center md:text-left">
          <p className="text-[#00A149] text-base md:text-lg">About Our Food</p>
          <p className="font-bold text-3xl md:text-5xl text-[#212121]">Where Quality Meet</p>
          <p className="font-bold text-3xl md:text-5xl text-[#212121]">
            Excellent <span className="text-[#00A149]">Service.</span>
          </p>
          <p className="text-[#5C5C5B] text-sm md:text-base mt-3 leading-relaxed">
            Its the perfect dining experience where every dish is crafted with fresh, high-quality ingredients. <br />
            Experience quick and efficient service that ensures your food is served fresh.
          </p>
        </div>

        {/* Features */}
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

        {/* Button........*/}
        <div className="flex flex-col md:flex-row gap-4 mt-8 items-center">
          <button className="px-6 py-3 md:px-8 md:py-4 font-oswald text-white bg-[#00A149] rounded-lg text-sm md:text-lg">
            More about us
          </button>
          <div className="flex flex-col font-oswald text-center md:text-left">
            <p className="text-[#FFC222] text-sm md:text-base">BRENDON GARREY</p>
            <p className="text-[#212121] text-sm md:text-base">
              CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
