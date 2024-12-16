import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#043873]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={"/class12.png"}
              alt=""
              width={191}
              height={34}
              className="bg-[#043873]"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row md:ml-auto md:mr-auto items-center text-base justify-center">
            <a className="mb-2 md:mb-0 mr-5 text-[#FFFFFF]">Products</a>
            <a className="mb-2 md:mb-0 mr-5 text-[#FFFFFF]">Solutions</a>
            <a className="mb-2 md:mb-0 mr-5 text-[#FFFFFF]">Resources</a>
            <a className="mb-2 md:mb-0 mr-5 text-[#FFFFFF]">Pricing</a>
          </nav>

          {/* Login Button */}
          <button className="w-[126px] h-[60px] text-[#043873] text-center inline-flex items-center bg-[#FFE492] border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            <span className="ml-[30px]">Login</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
