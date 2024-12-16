// Import necessary modules: 
// Image component from Next.js for optimized image handling.
// Link component from Next.js for navigation.
// React for JSX and type definitions.

import Image from "next/image";
import Link from "next/link";
import React from "react";

// TypeScript interface to define the props for ShoppingCart component, including cart visibility and toggle functionality.
interface ShoppingCartProps {
  cartOpen: boolean;  // Boolean indicating whether the cart is open or closed.
  toggleCart: () => void;  // Function to toggle the visibility of the cart.
}

// ShoppingCart functional component that accepts cartOpen and toggleCart props.
const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartOpen, toggleCart }) => {
  return (
      <div
      className={`fixed top-0 right-0 w-[85%] md:w-[400px] h-full overflow-y-auto px-4 md:px-7 bg-white shadow-lg transform ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
    
      {/* Header Section - Shopping Cart title and close button */}
      <div className="flex justify-between items-center py-3 md:py-6 ">
        <h2 className="text-[18px] md:text-[24px] font-semibold">Shopping Cart</h2>
        
        {/* Close button to toggle the cart visibility */}
        <button onClick={toggleCart} className="text-gray-500 hover:text-black">
          <Image
            src="/Group (1).png"  // Close button icon
            alt="Close"  // Alt text for accessibility
            width={20} height={20}
            className="md:h-[20px] md:w-[20px] h-[14px] w-[14px]"
          />
        </button>
      </div>

      {/* Divider for separating the header from cart items */}
      <div className="border-b-2 w-[80%] "></div>

      {/* Cart Items Section */}
      <div className="flex flex-col gap-52">
        <div className="mt-8 md:mt-12">
          {/* Cart Item */}
          <div className="flex items-center gap-3 md:gap-8 pb-4">
            <Image
              src="/Asgaard sofa 5.png"  // Image of the cart item.
              alt="Asgaard Sofa"  // Alt text for item image
              width={300} height={300}
              className="md:w-[108px] md:h-[106px] h-[80px] w-[80px] border-none rounded-lg bg-[#FBEBB5] object-cover"
            />
            <div>
              {/* Item name and price */}
              <p className="font-medium text-[14px] md:text-[18px]">Asgaard Sofa</p>
              <p className="text-black mt-2 text-[12px] md:text-[16px]">
                1 <span className='px-3'>X</span><span className="text-[#B88E2F] font-medium">Rs. 260,000.00</span>
              </p>
            </div>
            
            {/* Remove Icon for item removal */}
            <Image
              src="/Vector (6).png"  // Icon to remove item
              alt="Remove Item"  // Alt text for accessibility
              width={20} height={20}
              className="relative md:left-1"
            />
          </div>
          {/* Add more items as necessary */}
        </div>

        {/* Total Section */}
        <div className="p-4 mt-4">
          {/* Subtotal display */}
          <div className="flex gap-10 md:gap-24">
            <p className="text-[14px] md:text-[16px]">Subtotal</p>
            <p className="text-[#B88E2F] text-[14px] md:text-[16px] font-semibold">Rs. 250,000.00</p>
          </div>

          {/* Divider separating subtotal from buttons */}
          <div className="border-b-2 my-6"></div>

          {/* Button Section - View Cart and Checkout */}
          <div className="text-[10px] md:text-[12px] flex gap-6 md:gap-8 pb-10">
            {/* Link to View Cart Page */}
            <Link href='/viewcart'>
              <button className="px-6 md:px-9 py-1.5 border border-black rounded-full hover:bg-black duration-300 hover:text-white">
                View Cart
              </button>                      
            </Link>

            {/* Link to Checkout Page */}
            <Link href='/checkout'>
              <button className="px-6 md:px-9 py-1.5 border border-black rounded-full hover:bg-black duration-300 hover:text-white">
                Checkout
              </button>                          
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the ShoppingCart component so it can be used in other parts of the application.
export default ShoppingCart;
