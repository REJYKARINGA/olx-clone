import React from 'react'
// import endpoints from '../services/movieServices'
import Banner from '../components/Banner'
import ProductItem from '../components/ProductItem'
import BannerApp from '../components/BannerApp'
import FooterAboutus from '../components/FooterAboutus'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Banner />
  

    <ProductItem title='Fresh Recommendation' 
    // url={endpoints.upcoming}
     />
   </>
  )
}

export default Home