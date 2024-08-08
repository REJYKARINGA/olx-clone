import React, { useEffect , useState} from "react";

import { format, isToday, isYesterday, parseISO } from 'date-fns';

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = parseISO(dateString); 
  if (isToday(date)) {
    return 'Today';
  }
  if (isYesterday(date)) {
    return 'Yesterday';
  }
  return format(date, 'MMMM yyyy');
};

const ProductBox = ({product}) => {

  
  
  return (
   <>
   <div key={product.id} className=" md:grid-cols-4 rounded m-4 border-2 uppercase bg-yellow-300  h-72 w-72 bg-gray-200 p-0 ">
          <Link to={`/product/${product.id}`}>    
          <div className="rounded border-white border-  h-1/2 w-full bg-blue-500">
          
 
          <div className="relative h-full w-full">
               {/* <p onClick={markFavShow} className='cursor-pointer'>
           {like ? (<FaHeart size={1000} className='absolute top-2 left-2 text-gray-300' />)
         :(<FaRegHeart size={20} className='absolute top-2 left-2 text-green-300' />)}</p> */}
                 <img
                   src={product.images[0]} // Using the mapped images
                   alt={product.title}
                   className="rounded object-cover h-full w-full border-white border-4"
                 />
                 <FaRegHeart size={30} className="absolute top-2 right-2 text-black bg-white rounded-full p-1" />
               </div>
     
           <div className="ml-1 border-lime-600 flex-grow h-full bg-white  px-4 ">
             <p className="capitalize text-center w-16 text-sm bg-yellow-300">
               Features 
             </p>
             
             <h3 className="text-lg font-bold mb-4">₹ {product.price}/-</h3>
             <p className="text-sm text-white-400">
             {product.title}
             </p>
             <div className="justify-between mt-4 flex text-gray-400 text-xs">
               <p>{product.district},{product.place}</p>
               <p className="capitalize">{formatDate(product.dateAdded)}</p>
             </div>
           </div>
         </div>
  
        </Link>        
        </div>
        </>
  )
}

export default ProductBox