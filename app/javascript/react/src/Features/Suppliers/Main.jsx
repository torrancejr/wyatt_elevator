import React from 'react';
import './Image.css'

const posts = [
    {
        id: 1,
        title: 'Hollister-Whitney Elevator Corp.',
        href: '#',
        description:
        'A leading manufacturer and supplier of geared traction machines, car slings and platforms, safety devices and a range of other “core” elevator products.',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/hollister.png',
    },
    {
        id: 2,
        title: 'Imperial Electric',
        href: '#',
        description:
        'A leading manufacturer of AC and DC motors, ACPM (Permanent Magnet) gearless machines, and generator sets.',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/imperial-electric.gif',
    },
    {
        id: 3,
        title: 'Motion Control Engineering',
        href: '#',
        description:
            'The cornerstone of MCE’s products are non-proprietary, serviceable and maintainable elevator controls, as well as complete elevator packages',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/mce.png',
    },
    {
        id: 4,
        title: 'Innovation Industries',
        href: '#',
        description:
            'Innovation is a leading manufacturer of high quality, custom pushbutton and signal fixtures devices.',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/innovation2.png',
    },
    {
        id: 5,
        title: 'Canton Elevator',
        href: '#',
        description:
            'Canton manufactures hydraulic packages as well as custom hydraulic power units and jack assemblies.',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/canton2.png',
    },
    {
        id: 6,
        title: 'GAL',
        href: '#',
        description:
            'GAL provides a range of high quality door operators, door equipment, fixtures & pushbuttons, and controllers.',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/gal.png',
    },
    {
        id: 7,
        title: 'Gunderlin',
        href: '#',
        description:
            'Gunderlin specializes in to developing cabs, entrances, interior packages and door panels for projects of all sizes.',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/gunderlin2.png',
    },
    {
        id: 8,
        title: 'Palmer',
        href: '#',
        description:
            'Protective cab interior pads',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/palmer2.png',
    },
    {
        id: 9,
        title: 'Elevator Products Corp.',
        href: '#',
        description:
            'Pushbuttons and signal fixtures',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/epco2.png',
    },
    {
        id: 10,
        title: 'Courion',
        href: '#',
        description:
            'Freight Doors',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/cur.png',
    },
    {
        id: 11,
        title: 'Janus Elevator Products',
        href: '#',
        description:
            'Door edges and communication devices',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/rath.png',
    },
    {
        id: 12,
        title: 'ELSCO',
        href: '#',
        description:
            'Roller and slide guides',
        imageUrl:
            'https://wyatt-elevator.s3.amazonaws.com/elsco.jpeg',
    },
    {
        id: 13,
        title: 'Computerized Elevator Controls',
        href: '#',
        description:
            'Non-proprietary controls'
    },
    // More posts...
]

export default function Main() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Suppliers</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        At Wyatt Elevator, we work with some of the most-trusted suppliers in the business.  Our goal is to provide you with the best quality product that meets your budget needs.  Our team has a long track record of working with these and other suppliers.  As a result, you can rest assured that installation, repairs, maintenance and upgrades  will be done properly and efficiently.
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                                <span className="absolute inset-0" />
                                                {post.title}

                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
