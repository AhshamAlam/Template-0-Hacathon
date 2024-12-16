// Importing dependencies
// 'next/image' is imported to optimize image handling and performance
import Image from 'next/image';

// React is imported as the component uses JSX and React hooks/features
import React from 'react';

// Defining and exporting the RelatedProducts functional component
export default function RelatedProducts() {
  // TypeScript interface definition for product data
  interface IData {
    id: number; // Unique identifier for each product
    title: string; // Name of the product
    price: string; // Product price as a string for formatting purposes
    image: string; // Path to the product image
  }

  // Array of product data objects adhering to the IData interface
  const data: IData[] = [
    {
      id: 1,
      title: 'Trenton modular sofa_3',
      price: '25,000.00',
      image: '/Trenton modular sofa_3 1.png', // Relative image path
    },
    {
      id: 2,
      title: 'Granite dining table with dining chair',
      price: '25,000.00',
      image: '/Granite dining table with dining chair 1.png',
    },
    {
      id: 3,
      title: 'Outdoor bar table and stool',
      price: '25,000.00',
      image: '/Outdoor bar table and stool 1.png',
    },
    {
      id: 4,
      title: 'Plain console with teak mirror',
      price: '25,000.00',
      image: '/Plain console with teak mirror 1.png',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-white">
      {/* Heading Section */}
      <h1 className=" text-[24px] md:text-[36px] font-medium text-center">
        Related Products
      </h1>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 md:w-full w-[78%]">
        {data.map((product) => (
          <div
            key={product.id} // Assigning a unique key to each product card
            className="hover:shadow-lg md:w-[287px] md:h-[397px] flex flex-col items-center rounded-[4px] p-4"
          >
            {/* Product Image Section */}
            <div className="flex justify-center items-center h-[200px] w-full mb-4">
              <Image
                src={product.image} // Dynamically rendering product image
                alt={product.title} // Alt text for accessibility and SEO
                width={250} // Fixed width
                height={250} // Fixed height
                className="object-contain" // Ensures proper scaling of images within the container
              />
            </div>

            {/* Product Details Section */}
            <div className="w-full mt-[35px]">
              {/* Product Title */}
              <p className="text-[12px] md:text-[15px] md:font-medium text-left">
                {product.title}
              </p>
              {/* Product Price */}
              <p className="text-black text-[18px] md:text-[24px] font-medium md:font-bold text-left mt-2">
                Rs. {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* "View More" Button */}
      <a
        href="#" // Placeholder link; can be updated for functional navigation
        className="mt-5 md:mt-10 inline-block text-[14px] md:text-[20px] font-medium text-black underline underline-offset-8 md:underline-offset-[19px] decoration-2"
      >
        View More
      </a>
    </div>
  );
}
