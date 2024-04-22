import React from 'react';

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
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
    {
        name: 'Repair',
        features: [
            {
                name: '',
                description:
                    'Expert elevator repair services ensuring safety and efficiency. Our technicians swiftly restore functionality with precision, minimizing downtime and enhancing your building\'s operational flow.',
                imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/elevator-wide3.jpeg',
                imageAlt: 'Elevator repair picture.',
            },
        ],
    },
    {
        name: 'Maintenance',
        features: [
            {
                name: '',
                description:
                    'Reliable elevator maintenance to keep your system running smoothly. We provide regular inspections, lubrication, and adjustments, ensuring safety, efficiency, and prolonged equipment life.',
                imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/elevator-wide1.jpeg',
                imageAlt:
                    'elevator repair picture.',
            },
        ],
    },
    {
        name: 'Modernization',
        features: [
            {
                name: '',
                description:
                    "\n" +
                    "Transform your elevator system with our modernization services. We upgrade technology, enhance safety features, and improve aesthetics, delivering a seamless and efficient user experience.",
                imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/elevator-wide2.jpeg',
                imageAlt: 'Elevator upgrade picture.',
            },
        ],
    },
    {
        name: 'New Installation',
        features: [
            {
                name: "Everything you'll need",
                description:
                    'Professional elevator installation services tailored to your building\'s needs. We ensure optimal design, precision setup, and compliance with all safety standards for peak performance.',
                imageSrc: 'https://wyatt-elevator.s3.amazonaws.com/elevator-wide4.jpeg',
                imageAlt: 'New elevator installation picture.',
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Technical() {
    return (
        <div className="bg-white">
            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            The Wyatt Way
                        </h2>
                        <p className="mt-4 text-gray-500">
                            We have brought together the best independent elevator service providers in the country to deliver unmatched expertise and customer service.
                        </p>
                    </div>

                    <Tab.Group as="div" className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? 'border-emerald-500 text-emerald-600'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                                                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    )
}
