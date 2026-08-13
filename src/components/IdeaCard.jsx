import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdeaCard = ({ idea }) => {
  // Destructuring with fallback values to handle empty or missing data smoothly
  const { ideaTitle, imageUrl, _id, estimatedBudget, category } = idea || {};

  // Default fallback image if imageUrl is empty or broken
  const defaultImage =
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";


// console.log(ideaTitle);

  return (
    <div className=" max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col justify-between group h-full">
      {/* 1. Image & Category Section */}
      <div className="relative overflow-hidden aspect-video bg-gray-50 ">
        <Image
          src={imageUrl && imageUrl.trim() !== "" ? imageUrl : defaultImage}
          alt={ideaTitle}
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          priority={false}
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm tracking-wide capitalize">
          {category}
        </span>
      </div>

      {/* 2. Content Section (Title, Budget, Action Button) */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* Title */}
        <div className="mb-4">
          <h3
            className="font-bold text-lg md:text-xl text-gray-800 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-200"
            title={ideaTitle}
          >
            {ideaTitle}
          </h3>
        </div>

        {/* Footer: Budget & View Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Est. Budget
            </p>
            <p className="text-lg font-extrabold text-emerald-600">
              {estimatedBudget > 0
                ? `$${Number(estimatedBudget).toLocaleString()}`
                : "Flexible"}
            </p>
          </div>

          {/* Action Button */}
          <Link href={`/ideas/${_id}`}>
            <button
              className="flex items-center gap-2 bg-gray-50 hover:bg-blue-600 text-gray-600 hover:text-white p-2.5 rounded-xl transition-all duration-300 border border-gray-100 hover:border-blue-600 shadow-sm"
              aria-label="View Details"
            >
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
