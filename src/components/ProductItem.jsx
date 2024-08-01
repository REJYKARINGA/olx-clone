import React, { useEffect , useState} from "react";
import {createImageUrl}  from '../services/movieServices'
import {UserAuth} from '../context/AuthContext'
import {db} from '../services/firabase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import products from "../assets/assets";
// import image from '../assets/Cars'



const ProductItem = ({ title }) => {

  const [like,setLike] = useState(false)
  
  const markFavShow = async()=>{
    const userEmail = user?.email;
    if (userEmail) {
      const userDoc= doc(db,'users', userEmail)
      setLike(!like)
      await updateDoc(userDoc,{
        favShows: arrayUnion({...movie})
      })
    } 
    else {
      alert('Login to save a movie')
    }
  }

 useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>console.log(json))

 },[])
  return (
    <>
      <div className="mx-24 mb-28 ">
        <h1 className="text-2xl">Fresh Recommendation</h1>
        

        
        
<div className="flex justify-between grid grid-cols-1 md:grid-cols-4 gap-8">

{Object.keys(products).map(category => (
  
<div key={category}>

{products[category].map((product,index) => (
     

<div key={product.id} className=" md:grid-cols-4 rounded m-4 border-2 uppercase bg-yellow-300  h-72 w-72 bg-gray-200 p-0 ">
          <div className="rounded border-white border-  h-1/2 w-full bg-blue-500">
          
 
           <div className="relative h-full w-full">
                {/* <p onClick={markFavShow} className='cursor-pointer'>
            {like ? (<FaHeart size={1000} className='absolute top-2 left-2 text-gray-300' />)
          :(<FaRegHeart size={20} className='absolute top-2 left-2 text-green-300' />)}</p> */}
                  <img
                    src={product.image} // Using the mapped images
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
                <p>{product.place}</p>
                <p className="capitalize">{product.daysUploaded}</p>
              </div>
            </div>
          </div>
        </div>
 ))}
</div>
))}

</div>
<div className="mx-[50%]  border-2 border-black rounded w-[9%] p-2 cursor-pointer">
<b >Load more</b>
</div>

      </div>
    </>
  );
};

export default ProductItem;
