import React from 'react';
import Divider from "../Divider";

export default function Testimonial() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <img className="h-32 self-start"  src="https://wyatt-elevator.s3.amazonaws.com/pennrose-logo.jpeg" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    “I became tired of getting the tun around and inferior service from the national elevator service companies. Wyatt Elevator was a natural choice: a locally owned and operated company with executives who possess more than 50
                                    years of combined experience in the business.”
                                </p><br />
                                <p>
                                    "With the professionals at Wyatt, my jobs are completed on time and I am receiving great customer service. I highly recommend Wyatt Elevator to the region's building management industry. You won't be disappointed."
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">Mark Dambly</div>
                                    <div className="mt-1 text-gray-500">President of Pennrose Properties LLC</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <img className="h-12 self-start mt-10" src="https://wyatt-elevator.s3.amazonaws.com/domus.png" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    "I seldom take the time to write a "thank you" letter however this letter had to be written. Since the beginning of time, my organization has had less than favorable experiences with the well-known big three international firms whom have controlled the market forever. Now that we have experienced Wyatt on the U-Haul project, I can honestly say that you are not all the same! Wyatt has somehow figured out how to tackle large and technical projects with a small firm feel! Your site Installers and office staff are true professionals whom have worked efficiently with Domus and have met our budget and scheduling goals.

                                    A personal thank you needs to be extended to you and your brother for always being attainable. It is refreshing to have access to the executive staff of a local elevator company, which is in stark contrast to trying to track down "the boss" of one of the conglomerates. Your firm is respected by Domus and it will be our mission to award many more projects to Wyatt in the future.

                                    Thank you for a job well done at U-Haul!"
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">Bob Malagoli</div>
                                    <div className="mt-1 text-gray-500">Principal - Domus Inc</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>


    )
}
