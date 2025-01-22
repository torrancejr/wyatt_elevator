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
        path: "/elevate-philly/philly-local-life/history-of-elevators", // Correct route for the article
    },
];

export default function BlogIndex() {
    const [selectedCategory, setSelectedCategory] = useState("all");

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
                        Insights, updates, and local stories about elevators, technology, and the Philadelphia
                        community.
                    </p>
                </div>


                {/* Category Navigation */}
                <div className="mt-10 flex justify-center space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => setSelectedCategory(category.value)}
                            className={`py-2 px-4 text-sm font-medium rounded ${
                                selectedCategory === category.value
                                    ? "bg-gray-800 text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                    <Link
                        to="/"
                        className="py-2 px-4 text-sm font-medium rounded bg-green-600 text-white hover:bg-green-700"
                    >
                        HOME
                    </Link>
                </div>

                {/* Blog Posts */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            </div>
        </div>
    );
}
