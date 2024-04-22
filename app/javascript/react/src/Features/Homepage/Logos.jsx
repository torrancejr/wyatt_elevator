import React from 'react';

export default function Logos({ isVisible }) {
    const className = isVisible ? '' : 'hidden';

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://wyatt-elevator.s3.amazonaws.com/crozer-health.svg"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://wyatt-elevator.s3.amazonaws.com/kimberly-clark-logo.svg"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://wyatt-elevator.s3.amazonaws.com/SAP.svg"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://wyatt-elevator.s3.amazonaws.com/ACP_stacked_logo_200.png"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://wyatt-elevator.s3.amazonaws.com/Liberty_Property_Trust_Logo.svg"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
                <div className={className}>
                    <div className="mt-16 flex justify-center services-hide">
                         <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                             <span className="hidden md:inline">Over 1500 companies use our services to keep things operating smoothly.</span>
                                <a href="#" className="font-semibold text-green-600">
                             <span className="absolute inset-0" aria-hidden="true" /> Read our customer stories{' '}
                             <span aria-hidden="true">&rarr;</span>
                             </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
