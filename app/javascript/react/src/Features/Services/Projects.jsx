/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import React from 'react';

const features = [
    {
        name: 'BEFORE',
        description: 'Machine Room.',
        imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/beforemachine1.webp',
        imageAlt: 'elevator machine room.',
    },
    {
        name: 'AFTER',
        description: '',
        imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/aftermachine1.webp',
        imageAlt: 'elevator machine room after modernization.',
    },
    {
        name: 'BEFORE',
        description: 'Controller.',
        imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/beforemachine2.webp',
        imageAlt: 'elevator controller before modernization.',
    },
    {
        name: 'AFTER',
        description: '',
        imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/aftermachine2.webp',
        imageAlt: 'elevator controller after repair.',
    },
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="max-w-3xl">
                    <h2 id="features-heading" className="font-medium text-gray-500">
                        Elevator Modernization
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Modernization Projects</p>
                    <p className="mt-4 text-gray-500">
                        Modernization is one of the key services we offer here at Wyatt. Below you will find before and afters of some projects we have revamped and updated. If you have any equipment in need of modernizing, we would be happy to take care of that for you.
                    </p>
                </div>

                <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex flex-col-reverse">
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                            </div>
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
