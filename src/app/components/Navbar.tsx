// Indicate that this is a client-side component (React hooks require client-side rendering)
"use client"; 

// Import necessary modules for image rendering, routing, and state management
import Image from "next/image"; // Next.js Image component for optimized images
import Link from "next/link"; // Next.js Link component for client-side navigation
import { useState } from "react"; // React hook for managing state (toggle cart)
import ShoppingCart from "../shop/ShoppingCart";

export default function Navbar() {
  // Declare a state variable to control the visibility of the shopping cart
  const [cartOpen, setCartOpen] = useState(false);

  // Toggle the state of the shopping cart open/closed
  const toggleCart = () => {
    setCartOpen(!cartOpen); // Change cart visibility based on its previous state
  };

  return (
    <div className="bg-[#FBEBB5] h-[100px] items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 text-black flex">
      {/* Navbar links section: Visible on medium screens and up */}
      <ul className="hidden space-x-[72px] md:flex md:relative md:left-[30%]">
        {/* Each navigation link wraps around the Next.js Link component */}
        <li>
          <Link href="/" className="text-black hover:text-gray-400 font-medium text-[16px]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-black hover:text-gray-400 font-medium text-[16px]">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-black hover:text-gray-400 font-medium text-[16px]">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-black hover:text-gray-400 font-medium text-[16px]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Icon and cart section: Visible on medium screens and up */}
      <div className="hidden md:flex space-x-[30px]">
        {/* Account link with an icon */}
        <Link href="/account">
          <Image
            src="/mdi_account-alert-outline.png" // Image source for account icon
            alt="Account"
            width={28}
            height={28}
          />
        </Link>
        
        {/* Search icon */}
        <Image
          src="/akar-icons_search.png" // Image source for search icon
          alt="Search"
          width={28}
          height={28}
        />
        
        {/* Heart icon for favorites or wishlist */}
        <Image
          src="/akar-icons_heart.png" // Image source for heart icon
          alt="Favorites"
          width={28}
          height={28}
        />
        
        {/* Shopping cart button to toggle the cart visibility */}
        <button onClick={toggleCart}>
          <Image
            src="/ant-design_shopping-cart-outlined.png" // Image source for shopping cart icon
            alt="Shopping Cart"
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* The ShoppingCart component is commented out here */}
      <ShoppingCart cartOpen={cartOpen} toggleCart={toggleCart} />
    </div>
  );
}
