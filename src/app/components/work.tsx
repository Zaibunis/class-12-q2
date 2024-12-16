import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        width={710}
        height={661}
        alt="hero"
        src="/Work Together Image.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Work together
       
      </h1>
      <p className="mb-8 leading-relaxed">
      With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

      </p>
      <button className="inline-flex w-[201px]  h-[63px] bg-[#4F9CF9] text-[#FFFFFF] items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <span className='text-center ml-[30px]'>Try it now</span>
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

export default Work
