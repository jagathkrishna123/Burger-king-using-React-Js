import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PopularItems from "./components/PopularItems";
import Offer from "./components/Offer";
import PopularFoods from "./components/PopularFoods";
import ComboOffer from "./components/ComboOffer";
import Services from "./components/Services";
import About from "./components/About";
import SubBanner from "./components/SubBanner";
import Componet10 from "./components/Componet10";
import Review from "./components/Review";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
// import Test from './components/Test'

const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Banner />
      <PopularItems />
      <div className="mt-6">
        <Offer />
      </div>
      <PopularFoods />
      <ComboOffer />
      <Services />
      <About />
      <SubBanner />
      <Componet10 />
      <Review />
      <Delivery />
      <Footer />
      {/* <Test /> */}
    </div>
  );
};

export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import PopularItems from "./components/PopularItems";
// import Offer from "./components/Offer";
// import PopularFoods from "./components/PopularFoods";
// import ComboOffer from "./components/ComboOffer";
// import Services from "./components/Services";
// import About from "./components/About";
// import SubBanner from "./components/SubBanner";
// import Componet10 from "./components/Componet10";
// import Review from "./components/Review";
// import Delivery from "./components/Delivery";
// import Footer from "./components/Footer";
// import { Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <div className='overflow-x-hidden'>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Banner />} />
//         <Route path="/popular-items" element={<PopularItems />} />
//         <Route path="/offer" element={<Offer />} />
//         <Route path="/popular-foods" element={<PopularFoods />} />
//         <Route path="/combo-offer" element={<ComboOffer />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/sub-banner" element={<SubBanner />} />
//         <Route path="/component10" element={<Componet10 />} />
//         <Route path="/review" element={<Review />} />
//         <Route path="/delivery" element={<Delivery />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
