// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import ShoppingCart from "../shop/ShoppingCart";
// import { FaHeart, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleCart = () => {
//     setCartOpen(!cartOpen);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-[#FBEBB5] h-[100px] px-4 sm:px-6 md:px-12 lg:px-24 py-4 text-black flex justify-between items-center">
//       {/* Logo or Placeholder */}
//       <div></div>

//       {/* Hamburger Menu Icon for Mobile */}
//       <div className="sm:hidden">
//         <button onClick={toggleMenu}>
//           {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`${menuOpen ? 'block' : 'hidden'} sm:flex sm:space-x-[72px] absolute sm:static top-[100px] left-0 w-full sm:w-auto bg-[#FBEBB5] sm:bg-transparent flex-col sm:flex-row items-center sm:justify-center space-y-4 sm:space-y-0 py-4 sm:py-0`}>
//         {[
//           { href: "/", label: "Home" },
//           { href: "/shop", label: "Shop" },
//           { href: "/about", label: "About" },
//           { href: "/contact", label: "Contact" },
//         ].map(({ href, label }) => (
//           <li key={href}>
//             <Link href={href} className="text-black hover:text-gray-400 font-medium text-[16px]">
//               {label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Icons Section */}
//       <div className="hidden sm:flex justify-end space-x-6">
//         <Link href="/account">
//           <FaUser className="text-black hover:text-gray-400" size={24} />
//         </Link>
//         <FaSearch className="text-black hover:text-gray-400" size={24} />
//         <FaHeart className="text-black hover:text-gray-400" size={24} />
//         <button onClick={toggleCart}>
//           <FaShoppingCart className="text-black hover:text-gray-400" size={24} />
//         </button>
//       </div>

//       {/* Shopping Cart Component */}
//       <ShoppingCart cartOpen={cartOpen} toggleCart={toggleCart} />
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "../shop/ShoppingCart";
import { FaHeart, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#FBEBB5] h-[100px] px-4 sm:px-6 md:px-12 lg:px-24 py-4 text-black flex justify-between items-center">
      {/* Logo or Placeholder */}
      <div></div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links and Icons for Mobile */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden absolute top-[100px] left-0 w-full bg-[#FBEBB5] py-4`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {[
            { href: "/", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-black hover:text-gray-400 font-medium text-[16px]"
                onClick={toggleMenu} // Close menu on link click
              >
                {label}
              </Link>
            </li>
          ))}
          {/* Icons in Mobile Menu */}
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/account" onClick={toggleMenu}>
              <FaUser className="text-black hover:text-gray-400" size={24} />
            </Link>
            <button>
              <FaSearch className="text-black hover:text-gray-400" size={24} />
            </button>
            <button>
              <FaHeart className="text-black hover:text-gray-400" size={24} />
            </button>
            <button onClick={toggleCart}>
              <FaShoppingCart className="text-black hover:text-gray-400" size={24} />
            </button>
          </div>
        </ul>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden sm:flex sm:space-x-[72px]">
        {[
          { href: "/", label: "Home" },
          { href: "/shop", label: "Shop" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-black hover:text-gray-400 font-medium text-[16px]">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icons Section for Desktop */}
      <div className="hidden sm:flex justify-end space-x-6">
        <Link href="/account">
          <FaUser className="text-black hover:text-gray-400" size={24} />
        </Link>
        <FaSearch className="text-black hover:text-gray-400" size={24} />
        <FaHeart className="text-black hover:text-gray-400" size={24} />
        <button onClick={toggleCart}>
          <FaShoppingCart className="text-black hover:text-gray-400" size={24} />
        </button>
      </div>

      {/* Shopping Cart Component */}
      <ShoppingCart cartOpen={cartOpen} toggleCart={toggleCart} />
    </nav>
  );
}