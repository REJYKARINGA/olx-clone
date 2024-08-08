import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const EditProduct = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'products', productId);
      await updateDoc(docRef, product);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product: ', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Namesdfsdfsd" required />
      <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
      <input type="text" name="district" value={product.district} onChange={handleChange} placeholder="District" required />
      <input type="text" name="place" value={product.place} onChange={handleChange} placeholder="Place" required />
      <input type="date" name="date" value={product.date} onChange={handleChange} required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required></textarea>
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
