import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { SiYoutubemusic } from "react-icons/si";


const FooterAboutus = () => {
  return (
    <>
    <div className="bg-gray-200 text-black py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className='flex'>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          <div>
            <h4 className="font-bold mb-2 uppercase">Popular Locations</h4>
            <ul className='text-slate-600 text-xs'>
              <li >Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-2 uppercase">Trending Locations</h4>
            <ul className='text-slate-600 text-xs' >
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-2 uppercase">About Us</h4>
            <ul className='text-slate-600 text-xs'>
              <li>Contact Us</li>
              <li>Tech@OLX</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-2 uppercase">OLX</h4>
            <ul className='text-slate-600 text-xs'>
              <li>Blog</li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>
          
          
        
        </div>
        <div>
            <h4 className="font-bold mb-2 uppercase">Follow Us</h4>
            <ul className='text-slate-600 px-4 text-lg justify-start text-green-950'>
              <li className='flex '>
<TiSocialFacebook />
<BiLogoInstagram />       
<TiSocialTwitter />
<SiYoutubemusic />
</li>
              <li></li>
              <br></br>
              
             
            </ul>
            {/* <img src="/appstore_2x.webp" alt="Instagram" className="inline-block w-5 h-5" /> 
              <img src="/playstore_2x.webp" alt="Instagram" className="inline-block w-5 h-5" />  */}
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default FooterAboutus