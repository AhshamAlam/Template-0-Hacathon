// Importing dependencies
// 'next/image' is imported to utilize Next.js's optimized Image component
import Image from 'next/image';

// React is imported because the file uses JSX and React syntax
import React from 'react';

// The functional component `Description` is being defined and exported
export default function Description() { 
  return (
    <div className='flex flex-col justify-center items-center border-t-2 border-b-2 mt-14 md:mt-28 py-14'>
      {/* Header with navigation-like links for Description, Additional Information, and Reviews */}
      <div className='flex md:gap-6 gap-3 justify-center items-center font-medium md:font-normal text-[13px] md:text-[24px]'>
        <h1>Description</h1>
        <h1 className='text-[#9F9F9F]'>Additional Information</h1>
        <h1 className='text-[#9F9F9F]'>Reviews [5]</h1>
      </div>

      {/* Text content for the product description */}
      <div className='w-[75%] flex justify-center items-center flex-col text-[12px] md:text-[16px] text-[#9F9F9F] mt-8'>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
          takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className='mt-7'>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate
          and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Section for displaying product images */}
      <div className='flex gap-6 mt-10 md:flex-row flex-col items-center'>
        
        {/* First image container */}
        <div className='md:w-[605px] md:h-[348px] w-[250px] h-[250px] bg-[#FFF9E5] flex justify-center items-center'>
          <Image
            src={'/Cloud sofa three seater + ottoman_2 1.png'} // Path to the image
            alt='' // Alt text for accessibility
            height={600} // Height of the image
            width={600} // Width of the image
            className='w-[400px] h-[400px] md:w-[600px] md:h-[600px]' // Styling the image for responsiveness
          />
        </div>
        
        {/* Second image container */}
        <div className='md:w-[605px] md:h-[348px] w-[250px] h-[250px] md:flex-row flex-col bg-[#FFF9E5] flex justify-center items-center'>
          <Image
            src={'/Cloud sofa three seater + ottoman_1 1.png'} // Path to the image
            alt='' // Alt text for accessibility
            height={600} // Height of the image
            width={600} // Width of the image
            className='w-[400px] h-[400px] md:w-[600px] md:h-[600px]' // Styling the image for responsiveness
          />
        </div>

      </div>
    </div>
  );
}
