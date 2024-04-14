import * as React from 'react';

const stats = [
    { id: 1, name: 'Elevators', value: '8,000+' },
    { id: 2, name: 'Happy Customers', value: '5k+' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Focused on you', value: '100%' },
]

export default function Stats() {
    return (
        <div className="relative bg-white">
            <img
                className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
                src="https://wyatt-elevator.s3.amazonaws.com/AdobeStock_170212357_Preview.jpeg"
                alt=""
            />
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-8 text-green-600">Our track record</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Trusted by thousands of businesses&nbsp;
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Wyatt is privileged to provide service for a wide range of private, public, and non-profit entities throughout Philadelphia and the larger tri-state area.
                        </p>
                        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                                    <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
