import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { SiYoutubemusic } from "react-icons/si";


const Footer = () => {
  return (
    <>
    <div className="bg-teal-950 text-black py-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-12 align-middle items-center p-4 text-2xl w-[90%] justify-center">
          

        <div className='border-r-2 '>
          <img src='/footer/cartrade_tech.svg' alt=''/>
           
          </div>


          <div>
           <img className='w-[40%] ' src='/footer/olx.svg' alt=''/>
           
          </div>
          
          <div>
          <img src='/footer/carwale.svg' alt=''/>
           
          </div>
          
          <div>
          <img src='/footer/bikewale.svg' alt=''/>
           
          </div>

          <div>
          <img src='/footer/cartrade.svg' alt=''/>
           
          </div>

          <div className=''>
          <img src='/footer/mobility.svg' alt=''/>
           
          </div>
          
          
        
        </div>
        <div className='text-white text-xs flex justify-between  mx-10'>
        
      <p>Help - Sitemap</p> <p>All rights reserved © 2006-2024 OLX</p>

      </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer