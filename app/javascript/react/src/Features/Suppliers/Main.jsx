import React from 'react';

const posts = [
    {
        id: 1,
        title: 'Hollister-Whitney Elevator Corp.',
        href: '#',
        description:
        'A leading manufacturer and supplier of geared traction machines, car slings and platforms, safety devices and a range of other “core” elevator products.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
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
