import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="text-gray-600 body-font bg-[#043873]">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 py-12 lg:py-24">
          {/* Text Section */}
          <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] leading-tight mb-4">
              Get More Done with <br className="hidden lg:inline-block" /> whitepace
            </h1>
            <p className="text-[#FFFFFF] leading-relaxed text-sm sm:text-base mb-8">
              Project management software that enables your teams to collaborate, plan, <br />
              analyze and manage everyday tasks
            </p>
            <button className="inline-flex w-[219px] h-[63px] items-center justify-center bg-[#4F9CF9] text-[#FFFFFF] border-0 rounded hover:bg-blue-700">
              Try Whitepace free
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src="/Image-container.png"
              alt="hero"
              width={824}
              height={529}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
