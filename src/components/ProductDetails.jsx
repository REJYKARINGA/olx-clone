import React from 'react'
import Banner from '../components/Banner'
import { RiShareLine } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import products from '../assets/assets'; // Adjust path accordingly

const ProductDetails = () => {
  const { id } = useParams() 
  const allProducts = [...products.cars, ...products.motorbikes, ...products.phones, ...products.rentalHouses];
  
  console.log(typeof allProducts,'founded')
  const product = allProducts.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div className='bg-gray-200'>
        <Banner />
        <div className=" flex mx-10">
      
      <div className="w-fit  bg-gray-200 rounded">
        <img src={product.image} alt="Example 1" className="mb-4  w-screen rounded" />
      
      
      
      
      
      </div>

      {/* Right Side: Details */}
      <div className="w-1/2 bg-gray-200 pl-4  ">
        <div className='bg-white rounded p-4 relative border-2 '>
        <div className='flex justify-between '>
        <h1 className="text-2xl font-bold mb-4 pr-[25%]">₹ {product.price}/-</h1> <RiShareLine size={40} className='mr-2 p-2 rounded-full hover:bg-cyan-100 '/>
        <FaRegHeart size={40}  className='mr-2 p-2' />
        </div>
        <h4 className="mb-4 text-gray-400">
        {product.title}
        </h4>
        <div className='flex justify-between text-xs text-gray-400 '>
            <p>{product.specs}</p>
            
        </div>
        <div className=' rounded  mt-4 border-2 border-black text-black text-center p-4 items-center'>
                <button ><b>Chat with Seller</b></button>
            </div>
        </div>
        <div className='bg-white rounded mt-4 p-4 relative border-2 '>
            <h1><b>Posted in</b></h1>
            <div className='flex justify-between text-xs text-gray-400 '>
            <p>{product.place}</p>
            <p>{product.daysUploaded}</p>
            
        </div>
        
        </div>
        
      <div className='bg-white rounded border-2 '>
        <h1 className='p-4 text-xl'><b>Description</b></h1>
        
        <hr className='border-1 mx-4' />
      <div className="bg-white  py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className='flex text-sm'>
            PRICE NEGOTIABLE
Showroom Condition
Finance Available Upto 80% With Low Emi and Low Interest.
ADDITIONAL VEHICLE INFORMATION:
Accidental: No
Battery Condition: New
Vehicle Certified: Yes
Color: Silver
Insurance Type: No Insurance
Make Month: November
Registration Place: TN
Exchange: Yes
Finance: Yes
Service History: Available
Tyre Condition: New
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
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
          
          
        
        </div> */}
          
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails