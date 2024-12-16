import Image from "next/image";
import React from "react";

// Heroimg Component: Displays a hero section with two promotional product images and related text/links.
export default function FeaturedProducts () {
  return (
    <div className="pt-20 bg-[#FAF4F4] flex md:flex-row flex-col justify-center items-center">
      
      {/* First Product Section */}
      <div className="md:h-[562px] md:w-[560px] h-auto w-[200px]">
        {/* Product Image */}
        <Image
          src={"/Granite square side table 1.png"} // Path to the first product image.
          alt="" // Alt is left empty since no descriptive text is provided.
          width={500} // Explicit width for optimized rendering.
          height={500} // Explicit height for optimized rendering.
        />
        <div className="relative md:bottom-36 md:left-14 -top-8">
          {/* Product Title */}
          <h1 className="text-[18px] md:text-[34px] font-medium leading-tight text-black">
            Side Table
          </h1>
          {/* Call-to-Action Link */}
          <a
            href="#"
            className="md:mt-5 mt-3 inline-block text-[14px] md:text-[22px] font-medium text-black underline underline-offset-8 md:underline-offset-[18px] decoration-2"
          >
            View More
          </a>
        </div>
      </div>

      {/* Second Product Section */}
      <div className="md:h-[562px] md:w-[560px] h-auto w-[200px]">
        {/* Product Image */}
        <Image
          src={"/Cloud sofa three seater + ottoman_3 1.png"} // Path to the second product image.
          alt="" // Alt is left empty since no descriptive text is provided.
          width={520} // Explicit width for optimized rendering.
          height={520} // Explicit height for optimized rendering.
        />
        <div className="relative md:bottom-36 md:left-14 -top-5">
          {/* Product Title */}
          <h1 className="text-[18px] md:text-[34px] font-medium leading-tight text-black">
            Side Table
          </h1>
          {/* Call-to-Action Link */}
          <a
            href="#"
            className="md:mt-5 mt-3 inline-block text-[14px] md:text-[22px] font-medium text-black underline underline-offset-8 md:underline-offset-[18px] decoration-2"
          >
            View More
          </a>
        </div>
      </div>

    </div>
  );
};