import * as React from 'react';

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Contact() {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="50%"
                        y={-64}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Get a Quote</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    We provide customized care and peace of mind for your business.
                </p>
                <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form action="#" method="POST" className="lg:flex-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Location
                                </label>
                                <div className="mt-2.5">
                                    <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        <option value="">Select an location</option>
                                        <option value="option1">Pennsylvania</option>
                                        <option value="option2">New Jersey</option>
                                        <option value="option2">Delaware</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Interested in...
                                </label>
                                <div className="mt-2.5">
                                    <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        <option value="">Select an option</option>
                                        <option value="option1">Fixing a problem</option>
                                        <option value="option2">Finding a service company</option>
                                        <option value="option3">New elevator installation</option>
                                        <option value="option3">Upgrading existing elevators</option>
                                        <option value="option3">Improving Elevator efficiency</option>
                                        <option value="option3">Something else</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Let’s talk
                            </button>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            By submitting this form, I agree to the{' '}
                            <a href="#" className="font-semibold text-green-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </p>
                    </form>
                    <div className="lg:mt-6 lg:w-80 lg:flex-none">
                        <figure>
                            <blockquote className="text-sm leading-6 text-gray-900">
                                <p>
                                    “When you call Wyatt Elevator for service, your call is answered by a locally based, company representative that knows you and your company.  They don’t ask you for an account number or any secret code word.  They just dispatch a mechanic to resolve your issue.  Their mechanics are all top notch, polite, courteous and keep our elevator machine rooms spotlessly clean.  They show up on time, complete their work, clean up and move on to the next assignment.  If the repair is not complete, they tell you why and when they will be back to complete the work.  No follow-up (to chase them down) is ever necessary.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex gap-x-6">
                                <img className="h-12 w-auto" src="https://wyatt-elevator.s3.amazonaws.com/ACP_stacked_logo_200.png" alt="" />
                                <div>
                                    <div className="text-base font-semibold text-gray-900">Andrew Albero</div>
                                    <div className="text-sm leading-6 text-gray-600">Director of Facilities
                                        American College of Physicians</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}