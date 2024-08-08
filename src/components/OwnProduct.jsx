import { useEffect, useState } from "react";
import { db, auth, storage } from '../services/firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";

const UserProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    district: '',
    place: '',
    images: []
  });

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

  const handleEdit = (product) => {
    setEditingProduct(product);
    setEditForm({
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      district: product.district,
      place: product.place,
      images: product.images
    });
  };

  const handleRemove = async (product) => {
    try {
      const productDoc = doc(db, "products", product.id);
      await deleteDoc(productDoc);
      alert("Product removed successfully");
    } catch (error) {
      console.error("Error removing product: ", error);
    }
  };

  const handleUpdate = async () => {
    if (editingProduct) {
      try {
        const productDoc = doc(db, "products", editingProduct.id);
        await updateDoc(productDoc, {
          ...editForm,
        });
        alert("Product updated successfully");
        setEditingProduct(null);
        setEditForm({
          title: '',
          description: '',
          price: '',
          category: '',
          district: '',
          place: '',
          images: []
        });
      } catch (error) {
        console.error("Error updating product: ", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Your Products</h1>
      {editingProduct && (
        <div className="p-4 bg-gray-200 rounded">
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
            <div>
              <label className="block mb-1">Title:</label>
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Description:</label>
              <textarea
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Price:</label>
              <input
                type="number"
                value={editForm.price}
                onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Category:</label>
              <select
                value={editForm.category}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                required
                className="w-full px-3 py-2 text-black rounded"
              >
                <option value="">Please choose Category</option>
                <option value="Cars">Cars</option>
                <option value="Motorcycles">Motorcycles</option>
                <option value="Mobile Phones">Mobile Phones</option>
                <option value="For Sale: Houses & Apartments">For Sale: Houses & Apartments</option>
                <option value="Scooters">Scooters</option>
                <option value="Commercial & Other Vehicles">Commercial & Other Vehicles</option>
                <option value="For Rent: Houses & Apartments">For Rent: Houses & Apartments</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">District:</label>
              <select
                value={editForm.district}
                onChange={(e) => setEditForm({ ...editForm, district: e.target.value })}
                required
                className="w-full px-3 py-2 text-black rounded"
              >
                <option value="">Please choose District</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Kollam">Kollam</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Idukki">Idukki</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Kannur">Kannur</option>
                <option value="Kasaragod">Kasaragod</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Place:</label>
              <input
                type="text"
                value={editForm.place}
                onChange={(e) => setEditForm({ ...editForm, place: e.target.value })}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded"
            >
              Update Product
            </button>
          </form>
        </div>
      )}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="border-2 p-2 h-72 w-full flex flex-col items-center rounded">
              <img src={product.images[0]} alt={product.title} className="h-40 w-full object-cover" />
              <p className="font-bold mt-2">{product.title}</p>
              <p className="text-gray-600">{`Price: ${product.price}`}</p>
              <p className="text-gray-600">{`Category: ${product.category}`}</p>
              <div className="flex">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-300 rounded py-1 px-3 m-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(product)}
                  className="bg-red-300 rounded py-1 px-3 m-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProductsPage;
