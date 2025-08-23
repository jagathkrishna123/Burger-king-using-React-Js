import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import PopularItems from './components/PopularItems'
import Offer from './components/Offer'
import PopularFoods from './components/PopularFoods'
import ComboOffer from './components/ComboOffer'
import Services from './components/Services'
import About from './components/About'
import SubBanner from './components/SubBanner'
import Componet10 from './components/Componet10'
import Review from './components/Review'
import Delivery from './components/Delivery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Banner/>
      <PopularItems/>
      <div className='mt-6'>
        <Offer/>
      </div>
      <PopularFoods/>
      <ComboOffer/>
      <Services/>
      <About/>
      <SubBanner/>
      <Componet10/>
      <Review/>
      <Delivery/>
      <Footer/>
    </div>
  )
}

export default App