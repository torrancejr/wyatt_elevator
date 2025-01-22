import React from "react";

export default function PostCard({ title, description, imageUrl, date }) {
    return (
        <article className="flex flex-col rounded-lg border shadow-md overflow-hidden hover:shadow-lg">
            <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
                <time className="block mt-4 text-xs text-gray-500">{date}</time>
            </div>
        </article>
    );
}
