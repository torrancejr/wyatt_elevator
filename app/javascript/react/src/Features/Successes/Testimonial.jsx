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
                        <img className="h-12 self-start mt-10" src="https://wyatt-elevator.s3.amazonaws.com/ACP_stacked_logo_200.png" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    “When you call Wyatt Elevator for service, your call is answered by a locally based,
                                    company representative that knows you and your company.  They don’t ask you for an
                                    account number or any secret code word.  They just dispatch a mechanic to resolve your issue.
                                    Their mechanics are all top notch, polite, courteous and keep our elevator machine rooms spotlessly clean.
                                    They show up on time, complete their work, clean up and move on to the next assignment.
                                    If the repair is not complete, they tell you why and when they will be back to complete the work.  No follow-up (to chase them down) is ever necessary.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">Andrew Albero</div>
                                    <div className="mt-1 text-gray-500">Director of Facilities at American College of Physicians</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>


    )
}
