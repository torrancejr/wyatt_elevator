import React from 'react';
import Divider from "../Divider";

export default function TestimonialTwo() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <img className="h-24 self-start" src="https://wyatt-elevator.s3.amazonaws.com/temple-logo.svg" alt="" />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    “I appreciate your help and all the good things Wyatt does for me here at Temple.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">Jose Ramos</div>
                                    <div className="mt-1 text-gray-500">Project Manager at Temple University Health System</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p>
                                    "This elevator modernization project is now considered to be substantially complete with a few remaining items to be addressed and completed for closeout.

                                    All substantial completion reports have been submitted to the University of Pennsylvania, Burns Group, and Wyatt Elevator Company for review, correction, and completion." </p><br/>




                                   <p> This was a difficult project with unforeseen challenges throughout. Wyatt kept pressing forward to overcome these challenges while accepting responsibility to do what was necessary.

                                    From ownership and office personnel to the technicians in the field, Wyatt Elevator Company has provided a first class, quality elevator modernization to the University of Pennsylvania.</p><br/>


                                <p>
                                    Please take the time to review the attached photo document, which helps capture the modernization teams professional abilities, technical knowledge, and understanding of the elevator industry.

                                    The finished product truly demonstrates pride in their trade through attention to detail.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900">Paul Meyer</div>
                                    <div className="mt-1 text-gray-500">Zipf Associates, Inc.</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>


    )
}