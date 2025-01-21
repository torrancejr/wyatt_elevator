import React from "react";

const CircularInfographic = () => {
    return (
        <div className="relative isolate bg-white">
            {/* Background Pattern */}
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(50%_50%_at_center,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="background-pattern"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M0 200V0H200"
                            fill="none"
                            strokeWidth={1}
                        />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#background-pattern)"
                />
            </svg>

            {/* Responsive Image Container */}
            <div className="flex justify-center items-center">
                <img
                    src="https://wyatt-elevator.s3.us-east-1.amazonaws.com/graph-test.png"
                    alt="Elevator Lifecycle Infographic"
                    className="w-full max-w-[85%] md:max-w-[700px] lg:max-w-[1000px] object-contain"
                />
            </div>
        </div>
    );
};

export default CircularInfographic;



