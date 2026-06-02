import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import React from "react";

const BookingIdeas = ({ idea }) => {
  const {
    ideaTitle,
    imageUrl,
    estimatedBudget,
    category,
    shortDescription,
    targetAudience,
    tags,
  } = idea || {};

  return (
    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
      

        <Chip
          size="sm"
          color="primary"
          className="absolute top-3 right-3"
        >
          {category}
        </Chip>
      </div>

      {/* Content */}
      <Card className="p-5 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
            {ideaTitle}
          </h2>

          <p className="text-gray-500 text-sm mt-2 line-clamp-3">
            {shortDescription}
          </p>
        </div>

        {/* Budget & Audience */}
        <div className="flex justify-between items-center text-sm">
          <div>
            <p className="text-gray-400">Budget</p>
            <p className="font-semibold text-green-600">
              ${estimatedBudget}
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-400">Audience</p>
            <p className="font-medium text-gray-700">
              {targetAudience}
            </p>
          </div>
        </div>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag, index) => (
              <Chip
                key={index}
                size="sm"
                variant="flat"
                color="secondary"
              >
                #{tag}
              </Chip>
            ))}
          </div>
        )}

        {/* Button */}
        <button className="w-full py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
          View Details
        </button>
      </Card>
    </Card>
  );
};

export default BookingIdeas;