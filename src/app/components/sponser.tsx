import React from 'react'
import Image from 'next/image'

const Sponser = () => {
  return (
    <div>
       <section>
  <div className="container mx-auto py-24 px-5 text-center items-center">
    <h1 className="text-center title-font sm:text-4xl text-3xl mb-8 font-bold">
      Our Sponsors
    </h1>
    <div className="mt-8">
      <ul className="list-none flex flex-wrap justify-center gap-10">
        <li className="flex justify-center">
          <Image
            src={'/Apple.png'}
            alt="Apple"
            width={45}
            height={68}
            className="object-contain"
          />
        </li>
        <li className="flex justify-center">
          <Image
            src={'/Microsoft.png'}
            alt="Microsoft"
            width={241}
            height={62}
            className="object-contain"
          />
        </li>
        <li className="flex justify-center">
          <Image
            src={'/Slack.png'}
            alt="Slack"
            width={200}
            height={60}
            className="object-contain"
          />
        </li>
        <li className="flex justify-center">
          <Image
            src={'/Google.png'}
            alt="Google"
            width={170}
            height={68}
            className="object-contain"
          />
        </li>
      </ul>
    </div>
  </div>
</section>
    </div>
  )
}

export default Sponser