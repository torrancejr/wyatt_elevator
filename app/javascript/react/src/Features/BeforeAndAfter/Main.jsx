
import React from 'react';
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import { WrenchScrewdriverIcon, ShieldCheckIcon, Cog8ToothIcon } from '@heroicons/react/20/solid'
import Header from '../Header';
import './BeforeAndAfter.css'

const features = [
    {
        name: 'Modernization & Design',
        description:
            'We revamp interiors and upgrade mechanical components to give your elevators a fresh, contemporary look while enhancing overall functionality.',
        icon: WrenchScrewdriverIcon,
    },
    {
        name: 'Safety & Compliance',
        description: 'We ensure your elevators meet or exceed current industry standards through rigorous inspections, updated safety features, and strict code compliance.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Smooth Performance & Reliability',
        description: 'We optimize control systems and implement proactive maintenance plans to deliver a more comfortable ride, reduce downtime, and improve efficiency.',
        icon: Cog8ToothIcon,
    },
]

export default function Main() {
    return (

        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div
                    className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">Our Work</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Before & After
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                See how our expert elevator upgrades can transform an outdated lift into a modern, efficient, and visually appealing system. Slide the bar to reveal the remarkable difference our solutions can make in elevating your building’s style and performance. These are all from one of our most recent project.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                className="absolute left-1 top-1 size-5 text-indigo-600"
                                                aria-hidden="true"/>
                                            {feature.name}
                                        </dt>
                                        {' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div
                            className="relative isolate overflow-hidden px-6 pt-8
              sm:mx-auto sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16
              lg:mx-0 lg:max-w-none"
                        >
                            {/* Removed sm:max-w-2xl here */}
                            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                                <div className="responsive-container w-full max-w-6xl mx-auto">
                                    <ReactCompareSlider
                                        style={{width: '100%', height: 'auto'}}
                                        itemOne={
                                            <ReactCompareSliderImage
                                                src="https://wyatt-elevator.s3.us-east-1.amazonaws.com/beforemachine1.webp"
                                                alt="Before"
                                            />
                                        }
                                        itemTwo={
                                            <ReactCompareSliderImage
                                                src="https://wyatt-elevator.s3.us-east-1.amazonaws.com/aftermachine1.webp"
                                                alt="After"
                                            />
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
