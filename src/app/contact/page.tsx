import React from "react";
import Navbar from "../shop/Navbar"; // Importing the Navbar component for the top of the page
import Return from "../shop/Return"; // Importing the Return component, likely used for navigation or to go back
import Image from "next/image"; // Importing Image component from Next.js for optimized image handling
import { AiOutlineRight } from "react-icons/ai"; // Importing right arrow icon for the breadcrumb navigation

export default function Contact () {
  return (
    <div>
      <Navbar /> {/* Rendering the Navbar component at the top */}
      
      <div className="relative w-full">
        {/* Background Image Section */}
        <Image
          src={"/Rectangle 1.png"} // Background image for the page
          alt="Hero Background" // Alt text for accessibility
          objectFit="cover" // Ensuring the image covers the full width/height
          className="w-full h-full" // Class to set the width and height of the image
          height={300} // Image height
          width={300} // Image width
        />
        
        {/* Overlay Content (logo and heading) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <Image
            src={"/Meubel House_Logos-05.png"} // Logo image
            alt=""
            width={90} // Logo width
            height={90} // Logo height
            className="md:h-[90px] md:w-[90px] h-[50px] w-[50px]" // Responsive logo sizing
          />
          <h1 className="text-[18px] md:text-[48px] relative -top-2 md:top-0 font-medium md:mt-[-30px] text-black">
            Contact {/* Heading text */}
          </h1>
          <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" /> {/* Breadcrumb with arrow */}
            <span className="font-light"> Contact</span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="">
        <div className="flex flex-col justify-center items-center mt-8 md:mt-20 text-center">
          <h1 className="text-[24px] md:text-[36px] font-semibold">
            Get In Touch With Us {/* Call-to-action header */}
          </h1>
          <p className="text-[12px] md:text-[16px] text-[#9F9F9F] mt-2 w-[70%] md:w-[50%]">
            {/* Description text for getting in touch */}
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        
        {/* Two-column layout for contact information and form */}
        <div className="flex md:flex-row flex-col justify-center">
          <div className="flex md:flex-row flex-col justify-center md:w-[60%] mb-16 mt-16 md:mt-32  md:max-w-[1200px] ">
            
            {/* Left Column: Contact Information (Address, Phone, Working Hours) */}
            <div className="flex-1 flex md:flex-col gap-6 justify-center md:justify-start md:gap-10">
              {/* Address Box */}
              <div className="md:w-[190px] ">
                <div className="flex gap-3 md:gap-5 items-center ">
                  <Image
                    src={"/Vector (7).png"} // Address icon
                    alt=""
                    width={20}
                    height={20}
                    className="md:h-[20px] md:w-[20xp] h-[15px] w-[15px] relative -top-6 left-12 md:left-0 md:top-0"
                  />
                  <h1 className="text-[14px] md:text-[24px] font-medium">
                    Address {/* Title */}
                  </h1>
                </div>
                <p className="text-[10px] md:text-[16px] relative text-center md:text-start md:left-10 mt-1">
                  {/* Address details */}
                  236 5th SE Avenue, New <br /> York NY10000, United States
                </p>
              </div>

              {/* Phone Box */}
              <div className="md:w-[170px] ">
                <div className="flex  gap-3 md:gap-5 items-center">
                  <Image
                    src={"/Vector (8).png"} // Phone icon
                    alt=""
                    width={20}
                    height={20}
                    className='md:h-[20px] md:w-[20xp] h-[15px] w-[15px] relative -top-6 left-10 md:left-0 md:top-0'
                  />
                  <h1 className="text-[14px] md:text-[24px] font-medium">
                    Phone {/* Title */}
                  </h1>
                </div>
                <p className="text-[10px] md:text-[16px] relative text-center md:text-start md:left-10 mt-1">
                  {/* Phone details */}
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-[10px] md:text-[16px] relative text-center md:text-start md:left-10 mt-1">
                  Hotline: +(84) 456-6789
                </p>
              </div>
              
              {/* Working Time Box */}
              <div className="md:w-[200px] md:block hidden">
                <div className="flex  gap-3 md:gap-5 items-center">
                  <Image
                    src={"/Vector (9).png"} // Working hours icon
                    alt=""
                    width={20}
                    height={20}
                    className='md:h-[20px] md:w-[20xp] h-[15px] w-[15px] relative -top-5 left-5 md:left-0 md:top-0'
                  />
                  <h1 className="text-[14px] md:text-[24px] font-medium">
                    Working Time {/* Title */}
                  </h1>
                </div>
                <p className="text-[10px] md:text-[16px] relative text-center md:text-start md:left-10 mt-1">
                  {/* Working hours */}
                  Monday-Friday: 9:00 <br /> - 22:00
                </p>
                <p className="text-[10px] md:text-[16px] relative text-center md:text-start md:left-10 mt-1">
                  Saturday-Sunday: 9:00 <br />- 21:00
                </p>
              </div>
            </div>
            
            {/* Right Column: Contact Form */}
            <div className="flex-1 md:mt-0 md:px-0 mt-16 px-10">
              <form action="" className="w-full max-w-[600px]">
                {/* Form Fields for Name, Email, Subject, and Message */}
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4">
                    Your name
                  </label>
                  <input
                    placeholder="Abc"
                    type="text"
                    className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-3 md:p-4"
                  />
                </div>
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 md:mt-7 mt-6">
                    Email address
                  </label>
                  <input
                    type="text"
                    placeholder="Abc@def.com"
                    className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-4"
                  />
                </div>
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 md:mt-7 mt-6">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="This is an optional"
                    className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-4"
                  />
                </div>
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 md:mt-7 mt-6">
                    Message
                  </label>
                  <textarea
                    placeholder="Hi! I'd like to ask about"
                    className="w-full border placeholder:text-[14px] md:placeholder:text-[16px] border-[#9F9F9F] rounded-[6px] p-6 resize-none"
                  ></textarea>
                </div>
              </form>

              {/* Submit Button */}
              <button
                type="submit"
                className=" md:py-2 px-10 py-2 md:px-20 border mt-10 border-black rounded-[12px] text-black text-center hover:bg-black hover:text-white duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Return Section */}
      <Return /> {/* Return component, possibly a button to go back */}
    </div>
  );
};
