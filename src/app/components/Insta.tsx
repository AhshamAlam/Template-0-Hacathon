// Importing Next.js's Image component for optimized image handling and React for JSX.
import Image from 'next/image';
import React from 'react';

export default function Insta() {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <Image
        src={'/Group 43.png'} // The source of the background image.
        alt="" // Alt text for the image, can be updated to provide a meaningful description.
        layout="fill" // Ensures the image covers the entire div container.
        objectFit="cover" // Ensures the image maintains its aspect ratio while covering the entire container.
        className="w-full h-full" // Makes the image stretch to fill the full container width and height.
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        {/* Main Heading */}
        <h1 className="text-[30px] md:text-[55px] font-bold text-black">
          Our Instagram
        </h1>
        
        {/* Description Text */}
        <p className="text-[14px] md:text-[18px] text-black">
          Follow our store on Instagram
        </p>
        
        {/* Action Button */}
        <button className="mt-4 text-[14px] md:text-[18px] hover:bg-black hover:text-white duration-200 bg-[#FAF4F4] shadow-xl text-black rounded-full px-10 py-2 md:px-16 md:py-3">
          Follow Us
        </button>
      </div>
    </div>
  );
};


