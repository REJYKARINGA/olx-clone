import { useEffect, useState } from "react";
import { db, auth, storage } from '../services/firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const UserProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("userId", "==", userId));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProducts(productsList);
          setLoading(false);
        });

        return () => unsubscribe(); // Cleanup on unmount
      } else {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-200 rounded shadow-md">
      <h1 className="text-xl text-center font-bold">My Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
              <p>District: {product.district}</p>
              <p>Place: {product.place}</p>
              {product.images && product.images.length > 0 && (
                <div className="mt-2">
                  {product.images.map((url, index) => (
                    <img key={index} src={url} alt={`Product ${index}`} className="w-32 h-32 object-cover" />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProduct;
