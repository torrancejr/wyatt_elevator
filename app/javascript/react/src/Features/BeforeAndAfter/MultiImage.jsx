import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

// 1. Create an array to hold your before/after image data + description
const compareItems = [
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine2.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine2.webp',
        description: 'Our modern upgrades improve safety, efficiency, and design.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine3.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine32.webp',
        description: 'See how we transformed mechanical components for a smoother ride.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine4.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine42.webp',
        description: 'Optimized control systems for faster, more efficient elevator trips'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine5.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine5.webp',
        description: 'Enhanced durability and aesthetics to ensure long-term reliability.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine6.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine6.webp',
        description: 'Evidence of superior craftsmanship, both inside and out.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine8.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine8.webp',
        description: 'Upgraded elevator interiors and improved overall system performance.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine9.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine9.webp',
        description: 'From outdated to updated — increasing property value and appeal.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine10.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine10.webp',
        description: 'Our final result demonstrates top-notch safety and style.'
    },
    {
        before: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine7.webp',
        after: 'https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine7.webp',
        description: 'A fresh new look and a smoother ride experience for users.'
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Testimonial
                </p>
                <div className="mt-4 text-base text-gray-700 space-y-4 leading-7">
                    <p className="font-medium text-gray-900">
                        Paul Meyer <span className="text-gray-500">• Elevator Consultant at Zipf Associates, Inc. via LinkedIn</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        1mo • 2 months ago
                    </p>
                    <p>
                        "Recognition of a job well done is always appreciated by those who strive
                        to be the best at whatever they do. I am extremely fortunate to experience
                        and document the demonstrated attention to detail and the pride of true
                        professionals within our elevator industry."
                    </p>
                    <p>
                        Here is one more example of a quality elevator modernization in Philadelphia.
                        Before and after photos of a 3-car elevator modernization.
                    </p>
                </div>


                {/* 2. Render the before/after items in a grid */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-[auto]">
                    {compareItems.map((item, index) => (
                        <div key={index} className="relative lg:col-span-3">
                            {/* Background wrapper */}
                            <div
                                className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"/>

                            {/* Content wrapper */}
                            <div
                                className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                                {/* Short description above the slider */}
                                <p className="mx-4 mt-4 text-md font-medium text-gray-700">
                                    {item.description}
                                </p>

                                <div className="responsive-container mt-2 mb-4">
                                    <ReactCompareSlider
                                        itemOne={
                                            <ReactCompareSliderImage
                                                src={item.before}
                                                alt={`Before - ${index + 2}`} // e.g. "Before - 2"
                                            />
                                        }
                                        itemTwo={
                                            <ReactCompareSliderImage
                                                src={item.after}
                                                alt={`After - ${index + 2}`}
                                            />
                                        }
                                    />
                                </div>
                            </div>

                            {/* Shadow wrapper */}
                            <div
                                className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
