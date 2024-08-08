import React, { useState, useEffect } from 'react';
import { db, auth, storage } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import OwnProduct from '../components/OwnProduct';
import { UserAuth } from '../context/AuthContext'; // Assuming AuthContext is in this path
// import EditProduct from './EditProduct';

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = UserAuth(); // Get user from AuthContext

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleCategory =  (e) => {
    console.log(e.target.value,'district')
    setCategory(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      setLoading(true);
      const userId = user.uid;

      try {
        const productRef = collection(db, "products");

        let imageUrls = [];
        for (let i = 0; i < images.length; i++) {
          const file = images[i];
          const storageRef = ref(storage, `images/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              console.error("Error uploading image: ", error);
              setLoading(false);
            },
            async () => {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              imageUrls.push(url);

              if (imageUrls.length === images.length) {
                await addDoc(productRef, {
                  title,
                  description,
                  price,
                  category,
                  district,
                  place,
                  userId,
                  images: imageUrls,
                  dateAdded: new Date().toISOString()
                });

                console.log(dateAdded,'console.log(place)')
                // Reset form fields
                setTitle("");
                setDescription("");
                setPrice("");
                setCategory("");
                setDistrict("");
                setPlace("");
                setImages([]);
                setLoading(false);
              }
            }
          );
        }
      } catch (error) {
        console.error("Error adding product: ", error);
        setLoading(false);
      }
    } else {
      console.error("No user is currently signed in.");
    }
  };

  return (
    <div className='pt-32 gap-8 px-10 pb-0 mb-3 flex'>
      <div className='w-[30%]'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-200 rounded shadow-md space-y-4">
          <h1 className='text-xl text-center font-bold'>Add Products</h1>
          <div>
            <label className="block mb-1"></label>
            <input
              type="text" placeholder='Enter Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block mb-1"></label>
            <textarea
              value={description} placeholder='Enter Description'
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block mb-1"></label>
            <input
              type="number" placeholder='Enter Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-3 py-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block mb-1"></label>
            <select
              value={category} placeholder='Enter Category'
              onChange={handleCategory}
              required
              className="w-full px-3 py-2 text-black rounded"
            >
              <option value="">Please choose category</option>
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
            <label className="block mb-1"></label>
            <select
              value={district} placeholder='Enter District'
              onChange={(e) => setDistrict(e.target.value)}
              required
              className="w-full px-3 py-2 text-black rounded"
            >
              <option value="">Please choose district</option>
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
            <label className="block mb-1"></label>
            <input
              type="text" placeholder='Enter Place'
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
              className="w-full px-3 py-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block mb-1"></label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full px-3 py-2 text-black rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 mt-4 font-bold text-white rounded ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'}`}
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      
      </div>
      <div className='w-[70%]'>
        <OwnProduct />
      </div>
      
    </div>
  );
};

export default AddProducts;
