'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "../shop/ShoppingCart";
import { FaBars} from "react-icons/fa";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-[100px] items-center justify-between shadow-md px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-white text-black">

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-[72px] md:relative md:left-[30%]">
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

      {/* Mobile Menu Icon */}
      <button className="block md:hidden" onClick={toggleMenu}>
        {menuOpen ? "X" : (
          <FaBars/>
       )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[100px] left-0 w-full bg-white flex flex-col space-y-4 px-6 py-4 z-50 shadow-md md:hidden">
          <li>
            <Link href="/" className="text-black hover:text-gray-400 font-medium text-[16px]" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-black hover:text-gray-400 font-medium text-[16px]" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-gray-400 font-medium text-[16px]" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-400 font-medium text-[16px]" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
           
                {/* Icons Section */}
      <div className="flex space-x-[30px] ">
        <Link href="/account">
          <Image
            src="/mdi_account-alert-outline.png"
            alt=""
            width={24}
            height={24}
            className="hover:text-gray-400"
          />
        </Link>
        <Image 
          src="/akar-icons_search.png"
          alt=""
          width={24}
          height={24}
          className="hover:text-gray-400"
        />
        <Image
          src="/akar-icons_heart.png"
          alt=""
          width={24}
          height={24}
          className="hover:text-gray-400"
        />
        <button onClick={toggleCart}>
          <Image
            src="/ant-design_shopping-cart-outlined.png"
            alt=""
            width={24}
            height={24}
            className="hover:text-gray-400"
          />
        </button>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart cartOpen={cartOpen} toggleCart={toggleCart} />
        </ul>
      )}

      {/* Icons Section */}
      <div className="hidden md:flex space-x-[30px]">
        <Link href="/account">
          <Image
            src="/mdi_account-alert-outline.png"
            alt=""
            width={28}
            height={28}
            className="hover:text-gray-400"
          />
        </Link>
        <Image
          src="/akar-icons_search.png"
          alt=""
          width={28}
          height={28}
          className="hover:text-gray-400"
        />
        <Image
          src="/akar-icons_heart.png"
          alt=""
          width={28}
          height={28}
          className="hover:text-gray-400"
        />
        <button onClick={toggleCart}>
          <Image
            src="/ant-design_shopping-cart-outlined.png"
            alt=""
            width={28}
            height={28}
            className="hover:text-gray-400"
          />
        </button>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart cartOpen={cartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default Navbar;
