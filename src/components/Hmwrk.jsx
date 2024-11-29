import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../assets/logo.png'; // Dummy logo for the navbar
import bir from '../assets/bir.jpg';
import ikki from '../assets/ikki.jpg';
import uch from '../assets/uch.jpg';
import tort from '../assets/tort.jpg';
import besh from '../assets/besh.jpg';

const API_URL = "https://dummyjson.com";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const notify = () =>
    toast.success('Products loaded successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_URL}/products`)
      .then((response) => {
        setProducts(response.data.products);
        notify();
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        toast.error('Failed to load products!');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Rustam Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl">Rustam</span>
          </div>
        </div>
      </header>

      {/* Swiper */}
      <section className="py-8">
        <h2 className="text-center text-2xl font-bold mb-6">Featured Products</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full max-w-4xl mx-auto"
        >
          <SwiperSlide><img src={bir} alt="Product 1" className="w-full rounded-lg" /></SwiperSlide>
          <SwiperSlide><img src={ikki} alt="Product 2" className="w-full rounded-lg" /></SwiperSlide>
          <SwiperSlide><img src={uch} alt="Product 3" className="w-full rounded-lg" /></SwiperSlide>
          <SwiperSlide><img src={tort} alt="Product 4" className="w-full rounded-lg" /></SwiperSlide>
          <SwiperSlide><img src={besh} alt="Product 5" className="w-full rounded-lg" /></SwiperSlide>
        </Swiper>
      </section>

      {/* Product List */}
      <section className="container mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mb-6">Products</h2>
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 border rounded-xl shadow-md hover:shadow-2xl hover:bg-yellow-200 transition-all duration-300"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="price bg-gray-200 text-red-700 font-bold py-1 px-2 rounded text-center">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default App;
