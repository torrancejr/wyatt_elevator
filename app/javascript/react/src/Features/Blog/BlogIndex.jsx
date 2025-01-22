import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
    { name: "All", value: "all" },
    { name: "Philly Local Life", value: "philly-local-life" },
    { name: "Maintenance & Safety", value: "maintenance-safety" },
    { name: "Technology Trends", value: "technology-trends" },
    { name: "Business Insights", value: "business-insights" },
];

const posts = [
    {
        id: 2,
        title: "The History of Elevators in Philadelphia",
        description: "Explore how elevators shaped Philadelphia's skyline and historic buildings.",
        imageUrl: "https://wyatt-elevator.s3.us-east-1.amazonaws.com/history-of-elevators.webp",
        date: "2025-01-05",
        category: "philly-local-life",
        path: "/elevate-philly/philly-local-life/history-of-elevators",
    },
];

export default function BlogIndex() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Filter posts based on selected category
    const filteredPosts =
        selectedCategory === "all"
            ? posts
            : posts.filter((post) => post.category === selectedCategory);

    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-7xl text-center">
                    <img
                        src="https://wyatt-elevator.s3.us-east-1.amazonaws.com/elevate-philly-clover.webp"
                        alt="Elevate Philly Logo"
                        className="mx-auto w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
                    />
                    <p className="mt-4 text-lg text-gray-600">
                        Insights, updates, and local stories about elevators, technology, and the Philadelphia community.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="mt-10 flex justify-center items-center space-x-4">
                    {/* All Button */}
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`py-2 px-4 text-sm font-medium rounded-lg ${
                            selectedCategory === "all"
                                ? "bg-gray-800 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                    >
                        All
                    </button>

                    {/* Dropdown for Other Categories */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            className="py-2 px-4 text-sm font-medium rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center"
                        >
                            Categories
                            <svg
                                className={`ml-2 h-4 w-4 transform transition-transform ${
                                    dropdownOpen ? "rotate-180" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-md border border-gray-200 z-10">
                                {categories
                                    .filter((category) => category.value !== "all") // Exclude "All"
                                    .map((category) => (
                                        <button
                                            key={category.value}
                                            onClick={() => {
                                                setSelectedCategory(category.value);
                                                setDropdownOpen(false); // Close dropdown on selection
                                            }}
                                            className={`block w-full text-left px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 ${
                                                selectedCategory === category.value
                                                    ? "bg-gray-800 text-white"
                                                    : ""
                                            }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/"
                        className="py-2 px-4 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700"
                    >
                        HOME
                    </Link>
                </div>

                {/* Blog Posts or Placeholder */}
                <div className="mt-16">
                    {filteredPosts.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <Link to={post.path}>
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        <h3 className="mt-4 text-lg font-semibold text-gray-900 hover:text-green-600">
                                            {post.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                                        <p className="mt-2 text-xs text-gray-500">{post.date}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-600 text-lg">
                            Coming soon... Stay tuned for updates!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
