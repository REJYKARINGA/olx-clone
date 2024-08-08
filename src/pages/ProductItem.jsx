import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../services/firebase';
import ProductBox from "../components/ProductBox";
import CategoryFilter from "../components/CategoryPage";

const ProductItem = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let q;
      if (selectedCategory === "All") {
        q = query(collection(db, "products"));
      } else {
        q = query(collection(db, "products"), where("category", "==", selectedCategory));
      }
      const querySnapshot = await getDocs(q);
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <>
      <div className="mx-24 mb-28">
        <h1 className="text-2xl">Fresh Recommendation</h1>
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="flex justify-between grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mx-[50%] my-10 border-2 border-black rounded w-[9%] p-2 cursor-pointer text-center">
        <b>Load more</b>
      </div>
    </>
  );
};

export default ProductItem;
