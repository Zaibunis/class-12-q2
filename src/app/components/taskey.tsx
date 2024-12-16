import React from 'react'
import Image from 'next/image'

const Taskey = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#043873] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-center text-[#FFFFFF]">
      <span className='text-5xl text-center ml-[130px]'>Your work, everywhere you are</span>
       
      </h1>
      <p className="mb-8 leading-relaxed text-sm text-[#FFFFFF] ml-[130px] mt-[10px]">
      Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and <br />OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!

      </p>
      <button className="inline-flex w-[201px] mt-[30px] h-[63px] bg-[#4F9CF9] text-[#FFFFFF] items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-[400px] ">
      <span className='text-center ml-[30px] '>Try Taskey</span>
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>
    </div>
  </div>
</section>

    </div>
    
  )
}

export default Taskey
