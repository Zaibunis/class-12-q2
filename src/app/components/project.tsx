import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#FFFFFF]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-[#212529]">
      Project 
        <br className="hidden lg:inline-block font-bold" />
        Management
      </h1>
      <p className="mb-8 leading-relaxed text-[#212529]">
      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them<br /> to a note.      </p>
      <button className="inline-flex w-[201px]  h-[63px] bg-[#4F9CF9] text-[#FFFFFF] items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <span className='text-center ml-[30px]'>Get Started</span>
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
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        width={824}
        height={529}
        src="/Image-container.png"
      />
    </div>
  </div>
  
</section>

    </div>
  )
}

export default Project
