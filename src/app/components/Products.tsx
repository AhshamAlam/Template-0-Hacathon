"use client";


import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import product from "@/sanity/schemaTypes/product";


const sanity = sanityClient({
  projectId: "9kzxpzvf",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    assest: {
      _ref: string;
    };
  };
  category: string;
}

const ProductCards: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  

  const fetchProduct = async () => {
    try {
      const query = `
            *[type == "product"] {
                _id,
                name,
                price,
                description,
                discountPercentage,
                "imageUrl": productImage.assest->url,
                category
            }
            `;

      const data = await sanity.fetch(query);
      setProduct(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };


  useEffect(() => {
    fetchProduct();
  }, []);


  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From Api
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-slate-800 font-bold">{product.price}</div>
                {product.discountPercentage > 0 && (
                  <p className="text-red-500 text-sm">
                    {product.discountPercentage}% OFF
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700">Category</h3>
              <div className="flex flex-wrap mt-2 gap-2">
                <span
                  key={product.category}
                  className="text-xs bg-gray-200 text-gray-800 p-1 rounded-md"
                >
                  {product.category}
                </span>
              </div>

              {/* Add To Cart Function*/}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded-md hover:bg-slate-700 transition-colors duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Details*/}
      <div className="mt-8 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-center text-slate-800 mt-4 mb-4">Cart Details</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 shadow-sm rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-blue-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                  // className="w-12 h-12 object-cover rounded-md"
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-black">No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
