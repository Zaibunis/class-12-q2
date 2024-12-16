import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <footer className="text-[#FFFFFF] bg-[#043873] body-font">
  <div className="container px-5 pt-24  mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:px-2">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
              <Image 
                    src={'/class12.png'}
                    alt='logo'
                    width={191}
                    height={34}
              />
              
            </a>
        <nav className="list-none mb-16">
          <li className='pt-5'>
            <a className="text-[12px]">whitepace was created for the new ways we live and work. We make a better workspace around the world
                </a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full lg:pl-14 px-5 ">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
        Product
        </h2>
        <nav className="list-none mb-5 ">
          <li className='pb-4 pt-6 '>
            <a className=" text-[12px]">Overview</a>
          </li>
          <li className='pb-4'>
            <a className=" text-[12px]">Pricing</a>
          </li>
          <li className='pb-4'>
            <a className=" text-[12px]">Customer stories</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-5 lg:px-2">
      <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
      Resources
        </h2>
        <nav className="list-none mb-10 ">
          <li className='pb-4 pt-6 '>
            <a className=" text-[12px]">Blog</a>
          </li>
          <li className='pb-4'>
            <a className=" text-[12px]">Guides & tutorials</a>
          </li>
          <li className='pb-4'>
            <a className=" text-[12px]">Help center</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:px-0">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">
        Company
        </h2>
        <nav className="list-none mb-10 ">
          <li className='pb-4 pt-6 '>
            <a className=" text-[12px]">About us</a>
          </li>
          <li className='pb-4'>
            <a className=" text-[12px]">Careers
            </a>
          </li>
          <li className='pb-4'>
            <a className=" text-[12px]">Media kit</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="sm:px-32">
  <hr className='text[#D9D9D9]'/>
    <div className="container px- py-6 mx-auto flex justify-center ">
      <p className="text-sm  ">
      ©2021 Whitepace LLC.
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer