import React from 'react';
import { db } from '../services/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const RemoveProduct = ({ productId }) => {
  const handleRemove = async () => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      alert('Product removed successfully!');
    } catch (error) {
      console.error('Error removing product: ', error);
    }
  };

  return <button onClick={handleRemove}>Remove Product</button>;
};

export default RemoveProduct;
