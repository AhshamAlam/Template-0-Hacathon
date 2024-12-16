import Image from 'next/image'; // Importing Image component from Next.js for optimized image loading
import React from 'react'; // Importing React
import { AiOutlineRight } from 'react-icons/ai'; // Importing 'Right' icon from React Icons library

export default function HeroSection () {
  return (
    <div className="relative w-full">  {/* Container for the entire hero section */}
      {/* Background Image */}
      <Image
        src={'/Rectangle 1.png'} // Background image file (replace with your actual file)
        alt="Hero Background" // Alt text for the image
        objectFit="cover" // Ensures the image covers the whole section
        className="w-full h-full" // Stretch image to fill the available space
        height={300} // Specific height for the image
        width={300} // Specific width for the image
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <Image
          src={'/Meubel House_Logos-05.png'} // Logo image inside the overlay (replace with your logo)
          alt='' // Alt text for the logo
          width={90} // Width of the logo
          height={90} // Height of the logo
          className='md:h-[90px] md:w-[90px] h-[50px] w-[50px]' // Different sizes based on screen breakpoints
        />
        
        <h1 className="text-[18px] md:text-[48px] relative -top-2 md:top-0 font-medium md:mt-[-30px] text-black">
          Shop
        </h1>
        <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
          Home  
          {/* Arrow Icon */}
          <AiOutlineRight className='inline-block' />
          <span className='font-light'> Shop</span>
        </p>
      </div>
    </div>
  );
};
