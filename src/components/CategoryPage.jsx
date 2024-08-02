import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../assets/assets';
import BannerApp from './BannerApp';
BannerApp
const CategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = products[category] || [];
console.log(categoryProducts,'categoryProducts')
  return (
    <div className="mx-24 mb-28 pt-28">
      
      <h1 className="text-2xl capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categoryProducts.map((product) => (
          <div key={product.id} className="rounded m-4 border-2 uppercase bg-yellow-300 h-72 w-72 bg-gray-200 p-0">
            <Link to={`/product/${product.id}`}>
              <div className="rounded border-white h-1/2 w-full bg-blue-500">
                <div className="relative h-full w-full">
                  <img src={product.image} alt={product.title} className="rounded object-cover h-full w-full border-white border-4" />
                </div>
                <div className="ml-1 border-lime-600 flex-grow h-full bg-white px-4">
                  <p className="capitalize text-center w-16 text-sm bg-yellow-300">Features</p>
                  <h3 className="text-lg font-bold mb-4">₹ {product.price}/-</h3>
                  <p className="text-sm text-white-400">{product.title}</p>
                  <div className="justify-between mt-4 flex text-gray-400 text-xs">
                    <p>{product.place}</p>
                    <p className="capitalize">{product.daysUploaded}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
