import React from "react";
import BurgerImg from "../assets/burger.png";
import PastaImg from "../assets/pasta.png";
import PizzaImg from "../assets/pizza.png";
import ChickenImg from "../assets/chicken.png";
import BannerBurger from "../assets/banner-burger.png";
import BannerPizza from "../assets/banner-pizza.png";

const PopularFood = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
      {/* Section 1: Heading */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-green-600 font-medium">Crispy, Every Bite Taste</p>
          <h2 className="text-3xl font-bold text-gray-900">Popular Food Items</h2>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-white text-lg">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-white text-lg">
            →
          </button>
        </div>
      </div>

      {/* Section 2: Food Item Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { img: ChickenImg, title: "Chiken", products: "8 Products" },
          { img: BurgerImg, title: "Pro Burger", products: "3 Products" },
          { img: PastaImg, title: "Pro Pasta", products: "3 Products" },
          { img: PizzaImg, title: "Pro Pizza", products: "3 Products" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg p-5 text-center transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto w-28 h-28 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-yellow-500 text-sm">{item.products}</p>
          </div>
        ))}
      </div>

      {/* Section 3: Offer Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={BannerBurger}
          alt="Burger Banner"
          className="w-full rounded-xl shadow"
        />
        <img
          src={BannerPizza}
          alt="Pizza Banner"
          className="w-full rounded-xl shadow"
        />
      </div>
    </div>
  );
};

export default PopularFood;
//...............................................................................................................................................

import React from "react";
// Import your actual assets when ready
// import FriesImg from "../assets/fries.png";
// import TomatoImg from "../assets/tomato.png";
// import LeafImg from "../assets/leaf.png";

const HeroBanner = () => {
  return (
    <div
      className="relative w-full h-[500px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/black-linen.png')", // fallback background
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-6 md:px-20">
        <div className="max-w-lg text-left">
          <p className="text-white text-sm mb-2">Save 20%</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Today&apos;s{" "}
            <span className="text-yellow-400">Astackin</span> Day
          </h1>
          <p className="text-lg text-white mt-2">
            Grilled <span className="text-yellow-400 font-semibold">Chiken</span>{" "}
            $59,00
          </p>

          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition">
            Order Now
          </button>
        </div>
      </div>

      {/* Corner Decorative Images */}
      <img
        src="https://via.placeholder.com/120x120" // replace with FriesImg
        alt="Fries"
        className="absolute bottom-0 left-0 w-32"
      />
      <img
        src="https://via.placeholder.com/80x80" // replace with TomatoImg
        alt="Tomato"
        className="absolute bottom-4 right-4 w-16"
      />
    </div>
  );
};

export default HeroBanner;
//=========================================================================================================================================================
import React from "react";
// import your images here

const PopularFastFoods = () => {
  const products = [
    {
      id: 1,
      title: "Delicious Burger",
      discount: "-25%",
      oldPrice: "60.00$",
      newPrice: "45.00$",
      img: "https://via.placeholder.com/150", // replace later
    },
    {
      id: 2,
      title: "Grilled Chicken",
      discount: "-7%",
      oldPrice: "42.00$",
      newPrice: "39.00$",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Ruti With Chicken",
      discount: "-10%",
      oldPrice: "29.00$",
      newPrice: "26.00$",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Fast Food Combo",
      discount: "-18%",
      oldPrice: "34.00$",
      newPrice: "28.00$",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Chicago Deep Pizza",
      discount: "-21%",
      oldPrice: "28.00$",
      newPrice: "22.00$",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Chinese Pasta",
      discount: "-15%",
      oldPrice: "40.00$",
      newPrice: "34.00$",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Whopper Burger King",
      discount: "-13%",
      oldPrice: "30.00$",
      newPrice: "26.00$",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Ruti With Beef Slice",
      discount: "-7%",
      oldPrice: "30.52$",
      newPrice: "28.52$",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-green-600 font-medium">Crispy, Every Bite Taste</p>
        <h2 className="text-3xl font-bold text-gray-900">Popular Fast Foods</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg p-4 relative transition"
          >
            {/* Wishlist Icon */}
            <button className="absolute top-3 left-3 bg-white rounded-full p-1 shadow">
              ❤️
            </button>

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Discount & Price */}
            <div className="flex flex-col items-center gap-1">
              <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                {item.discount}
              </span>
              <div className="flex gap-2 text-sm text-gray-500">
                <span className="line-through">{item.oldPrice}</span>
                <span className="font-semibold text-black">{item.newPrice}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-center font-bold mt-2">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default PopularFastFoods;
