import Image from 'next/image'; // Importing Image component from Next.js for optimized image loading
import React from 'react'; // Importing React

export default function Filter () {
  return (
    <div className='bg-[#FAF4F4] md:h-[90px] h-[50px] flex justify-between items-center md:px-20 px-8 mt-6 md:mt-10'>
      {/* Container div for the filter section with background color, padding, and margin adjustments */}
      
      <div className='flex justify-center items-center gap-2 md:gap-4 text-[16px]'>
        {/* Container for the filtering icons and label */}
        
        {/* Filtering icon */}
        <Image
          src={'/system-uicons_filtering.png'} // Image for the filter icon
          alt='' // Alt text for the image (add descriptive text for accessibility if needed)
          height={20} // Height for the image
          width={20} // Width for the image
          className='md:h-[20px] md:w-[20px] h-[16px] w-[16px]' // Different sizes for mobile and desktop views
        />
        <p className='text-[10px] md:text-[16px]'>Filter</p>
        
        {/* Grid view icon */}
        <Image
          src={'/ci_grid-big-round.png'} // Image for the grid view icon
          alt=''
          height={20}
          width={20}
          className='md:h-[20px] md:w-[20px] h-[16px] w-[16px]'
        />
        
        {/* List view icon */}
        <Image
          src={'/bi_view-list.png'} // Image for the list view icon
          alt=''
          height={20}
          width={20}
          className='md:h-[20px] md:w-[20px] h-[16px] w-[16px]'
        />
        
        {/* Separator line */}
        <Image
          src={'/Line 5.png'} // Image for a horizontal line separator
          alt=''
          height={1.5} // Height of the separator line
          width={1.5} // Width of the separator line
        />
        
        {/* Results count display */}
        <p className='text-[10px] md:text-[16px]'>Showing 1–16 of 32 results</p>
      </div>
      
      <div className=' hidden md:flex justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[16px] font-medium'>
        {/* Container for "Show" and "Sort By" dropdown, only visible on larger screens */}
        
        <p className=''>Show</p>
        {/* "Show" option to select how many items to display */}
        <p className='text-[#9F9F9F] bg-white px-4 py-3'>16</p>
        <p className=''>Short By</p>
        {/* Sorting option with a default selection */}
        <p className='text-[#9F9F9F] bg-white px-10 py-2 text-left w-max'>
          <span className='text-left'>Default</span>
        </p>
      </div>
    </div>
  );
}
