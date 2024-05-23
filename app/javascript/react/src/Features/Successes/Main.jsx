import React from 'react';
import Logos from "../Homepage/Logos";

export default function Main() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                                We built our business on great customer service
                            </h2>
                            <p className="mt-4 text-gray-500">
                                Wyatt is privileged to provide service for a wide range of private, public, and non-profit entities throughout Philadelphia and the larger tri-state area. Our customers include:
                            </p>
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="https://wyatt-elevator.s3.amazonaws.com/Services.jpeg"
                                alt=""
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}