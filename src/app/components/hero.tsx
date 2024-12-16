import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#043873]">
        <div className="container mx-auto flex px-5 py-12 md:py-24 flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#FFFFFF]">
              Get More Done with
              <br className="hidden lg:inline-block font-bold" />
              whitepace
            </h1>
            <p className="mb-8 leading-relaxed text-[#FFFFFF] text-sm md:text-base">
              Project management software that enables your teams to collaborate, plan,<br /> analyze and manage everyday tasks
            </p>
            <button className="inline-flex w-[219px] h-[63px] bg-[#4F9CF9] text-[#FFFFFF] items-center border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <span className='ml-[20px]'>Try Whitepace free</span>
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

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center">
            <Image
              className="object-cover object-center rounded w-full h-auto"
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

export default Hero
