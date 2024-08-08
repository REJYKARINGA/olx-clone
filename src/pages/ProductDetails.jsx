import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { RiShareLine } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { format, isToday, isYesterday, parseISO } from 'date-fns';



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

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = await getDoc(doc(db, 'products', id));
      if (productDoc.exists()) {
        const productData = productDoc.data();
        setProduct(productData);
        setSelectedImage(productData.images[0]); 
      } else {
        console.log('No such document!');
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className='bg-gray-200'>
      <Banner />
      <div className="flex mx-10">
        {/* Left Side: Images */}
        <div className="w-fit bg-gray-200 rounded">
          <img src={selectedImage} alt="Selected" className="mb-4 w-screen rounded" />

          <div className="flex flex-wrap gap-2 p-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className="w-24 h-24 object-cover rounded cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-1/2 bg-gray-200 pl-4">
          <div className='bg-white rounded p-4 relative border-2'>
            <div className='flex justify-between'>
              <h1 className="text-2xl font-bold mb-4 pr-[25%]">₹ {product.price}/-</h1>
              <RiShareLine size={40} className='mr-2 p-2 rounded-full hover:bg-cyan-100' />
              <FaRegHeart size={40} className='mr-2 p-2' />
            </div>
            <h4 className="mb-4 text-gray-400">
              {product.title}
            </h4>
            <div className='flex justify-between text-xs text-gray-400'>
              <p>{product.specs}</p>
            </div>
            <div className='rounded mt-4 border-2 border-black text-black text-center p-4 items-center'>
              <button><b>Chat with Seller</b></button>
            </div>
          </div>
          <div className='bg-white rounded mt-4 p-4 relative border-2'>
            <h1><b>Posted in</b></h1>
            <div className='flex justify-between text-xs text-gray-400'>
              <p>{product.place}</p>
              <p>{formatDate(product.dateAdded)}</p>
            </div>
          </div>

          <div className='bg-white rounded border-2'>
            <h1 className='p-4 text-xl'><b>Description</b></h1>
            <hr className='border-1 mx-4' />
            <div className="bg-white py-4">
              <div className="max-w-screen-xl mx-auto px-4">
                <div className='flex text-sm'>
                  {product.description} <br />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
