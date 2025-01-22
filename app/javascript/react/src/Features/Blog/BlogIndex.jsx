import React, { useState } from "react";
import PostCard from "./components/PostCard";

const categories = [
    { name: "All", value: "all" },
    { name: "Philly Local Life", value: "philly-local-life" },
    { name: "Maintenance & Safety", value: "maintenance-safety" },
    { name: "Technology Trends", value: "technology-trends" },
    { name: "Business Insights", value: "business-insights" },
];

const posts = [
    {
        id: 1,
        title: "Top 10 Attractions in Philly with Iconic Elevators",
        description: "Discover the best attractions in Philadelphia featuring unique and historic elevators.",
        imageUrl: "path-to-image.jpg",
        date: "2025-01-01",
        category: "philly-local-life",
    },
    {
        id: 2,
        title: "The History of Elevators in Philadelphia",
        description: "Explore how elevators shaped Philadelphia's skyline and historic buildings.",
        imageUrl: "path-to-image.jpg",
        date: "2025-01-05",
        category: "philly-local-life",
    },
    {
        id: 3,
        title: "Best Practices for Elevator Maintenance",
        description: "Learn the essential steps to maintain elevators for safety and efficiency.",
        imageUrl: "path-to-image.jpg",
        date: "2025-01-10",
        category: "maintenance-safety",
    },
    {
        id: 4,
        title: "Top Elevator Technology Trends in 2025",
        description: "Discover the latest advancements in elevator technology shaping the future.",
        imageUrl: "path-to-image.jpg",
        date: "2025-01-15",
        category: "technology-trends",
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
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Elevate Philly
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Insights, updates, and local stories about elevators, technology, and the Philadelphia community.
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
                </div>

                {/* Blog Posts */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
