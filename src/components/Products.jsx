import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

const API_URL = "https://dummyjson.com"

//fetch ->AXIOS
const Products = () => {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        try {
            axios
            .get(`${API_URL}/products`)
            .then(res => {
                console.log(res.data.products)
                setData(res.data.products)
            })
        } catch (error) {
            console.log(err => console.log(err));
            // .finally(() =>)
            
        }
    }, [])

    const productsItems = (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {data?.map((pro) => (
            <div
              key={pro.id}
              className="p-4 border rounded-xl shadow-md hover:shadow-2lg hover:bg-yellow-200 transition-shadow duration-300"
            >
              <img
                src={pro.thumbnail}
                alt="IMG"
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <p className="price bg-gray-200 text-red-700 font-bold py-1 px-2 rounded text-center mb-2">
                ${pro.price}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {pro.title}
              </h3>
            </div>
          ))}
        </div>
      );
      
      
   
  return (
    <div className="container pt-5">
        <div>
            {productsItems}
        </div>
    </div>
  )
}

export default Products