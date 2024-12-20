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
import Logos from "../Homepage/Logos";
import './Services.css';

const incentives = [
    {
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]

export default function Example() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                                See How Wyatt Elevator Can Help You
                            </h2>
                            <p className="mt-4 text-gray-500">
                                Our focus at Wyatt Elevator is to ensure our customers have the safest, most efficient, most elegant elevator systems possible. That’s why we offer all forms of elevator services — from repair to maintenance, modernization to new upgrades. You can learn more below.                            </p>
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="https://wyatt-elevator.s3.amazonaws.com/Services.jpeg"
                                alt=""
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
