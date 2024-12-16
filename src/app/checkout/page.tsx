// Importing required modules and components
import React from "react"; // React library for component creation
import Navbar from "../shop/Navbar"; // Custom Navbar component
import Image from "next/image"; // Optimized image component from Next.js
import { AiOutlineRight } from "react-icons/ai"; // Arrow icon from react-icons library
import Return from "../shop/Return"; // Custom Delivery/Return component

// Defining the Checkout component
export default function Checkout() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Background Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src={"/Rectangle 1.png"}
          alt="Hero Background"
          objectFit="cover"
          className="w-full h-full"
          height={300}
          width={300}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          {/* Logo */}
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt=""
            width={90}
            height={90}
            className="md:h-[90px] md:w-[90px] h-[50px] w-[50px]"
          />
          {/* Checkout Title */}
          <h1 className="text-[18px] md:text-[48px] relative -top-2 md:top-0 font-medium md:mt-[-30px] text-black">
            Checkout
          </h1>
          {/* Breadcrumb navigation */}
          <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" />
            <span className="font-light"> Checkout</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="container mx-auto p-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:my-8">
            {/* Left Section: Billing Details */}
            <div className="bg-white md:px-32 rounded">
              {/* Title */}
              <h2 className="text-[24px] md:text-[36px] font-semibold mb-8">
                Billing details
              </h2>
              {/* Billing Form */}
              <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                {/* Remaining Fields */}
                {/* Company Name */}
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Country / Region */}
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                    Country / Region
                  </label>
                  <select className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>

                {/* Additional fields are listed here similarly (Address, Province, Zip Code, etc.) */}
              </form>
            </div>

            {/* Right Section: Order Summary */}
            <div className="max-w-md mt-16 md:mt-10 md:p-6">
              {/* Order Summary Header */}
              <div className="flex justify-between">
                <h2 className="text-[20px] md:text-2xl font-medium mb-4">
                  Product
                </h2>
                <h2 className="text-[20px] md:text-2xl font-medium mb-4">
                  Subtotal
                </h2>
              </div>
              
              {/* Product Listing */}
              <div className="flex justify-between items-center pb-2 mb-2">
                <p className="text-[14px] md:text-[16px] text-[#9F9F9F]">
                  Asgaard sofa{" "}
                  <span className="text-black font-medium text-[14px] md:text-[16px]">
                    <span className="px-2">X</span> 1
                  </span>
                </p>
                <p className="text-[14px] md:text-[16px]">Rs. 250,000.00</p>
              </div>
              {/* Total */}
              <div className="flex justify-between items-center">
                <p className="text-[14px] md:text-[16px]">Total</p>
                <p className="text-[20px] md:text-[24px] font-bold text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </div>
              
              {/* Payment Options */}
              <form>
                <div className="mb-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="w-4 h-4 text-black focus:ring-0 focus:bg-black"
                      defaultChecked
                    />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <p className="text-[13px] text-[#9F9F9F] mt-2">
                    Payment instructions...
                  </p>
                  {/* Additional payment methods */}
                </div>

                {/* Place Order */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="py-2 px-14 border border-black rounded-[12px] hover:bg-black hover:text-white duration-200"
                  >
                    Place order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*Return Policy */}
      <Return />
    </div>
  );
}
