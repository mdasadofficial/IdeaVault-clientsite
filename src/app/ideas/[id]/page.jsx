import BookingIdeas from "@/components/BookingIdeas";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditIdea } from "@/components/EditIdea";
import IdeaCard from "@/components/IdeaCard";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/idea/${id}`);
  const idea = await res.json();
  // Default fallback image if imageUrl is empty or broken
  const defaultImage =
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
  const {
    _id,
    ideaTitle,
    imageUrl,
    estimatedBudget,
    category,
    shortDescription,
    detailedDescription,
    problemStatement,
    proposedSolution,
    targetAudience,
    tags,
  } = idea || {};

  return (
    <div className="min-h-screen bg-gray-50/60 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* 1. Hero Image Banner Section */}
        <div className="relative w-full h-[320px] sm:h-[450px] bg-gray-900">
          <Image
            src={imageUrl && imageUrl.trim() !== "" ? imageUrl : defaultImage}
            alt={ideaTitle}
            fill
            className="object-cover opacity-85"
            priority
          />
          {/* Smooth black gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          {/* Floating Edit Button - Top Right Corner */}
          <div className="absolute   top-6 right-6 z-10">
            <EditIdea idea={idea} />
          </div>

          {/* Floating Delete Button - Top Right Corner */}
          <div className="absolute   bottom-6 right-6 z-10">
            <DeleteAlert idea={idea} />
          </div>
          {/* Floating Category Tag & Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md backdrop-blur-sm">
              {category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold mt-3 leading-tight drop-shadow-md">
              {ideaTitle}
            </h1>
            <p className="text-gray-200 mt-2 text-sm sm:text-base max-w-3xl font-medium italic line-clamp-2">
              {shortDescription}
            </p>
          </div>
        </div>

        {/* 2. Meta Info Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-slate-50 border-b border-gray-100">
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
              Estimated Budget
            </span>
            <span className="text-xl font-black text-emerald-600 mt-0.5">
              ${estimatedBudget}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
              Target Audience
            </span>
            <span
              className="text-sm font-semibold text-gray-700 mt-1 line-clamp-1"
              title={targetAudience}
            >
              {targetAudience}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
              Timeline / Tags
            </span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md capitalize border border-blue-100">
                {tags}
              </span>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {" "}
          <div>
            {/* 3. Detailed Core Content Section */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Problem Statement Box */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block"></span>
                  Problem Statement
                </h2>
                <div className="bg-amber-50/40 p-5 rounded-2xl border border-amber-100 text-gray-700 leading-relaxed text-sm sm:text-base">
                  {problemStatement}
                </div>
              </div>

              {/* Proposed Solution Box */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
                  Proposed Solution
                </h2>
                <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100 text-gray-700 leading-relaxed text-sm sm:text-base">
                  {proposedSolution}
                </div>
              </div>

              {/* Detailed Description (Deep Dive) */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                  Detailed Analysis & Implementation Plan
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line antialiased">
                  {detailedDescription}
                </p>
              </div>
            </div>
          </div>
          <BookingIdeas />
        </div>
        {/* 4. Footer System Info */}
        <div idea={idea} className="bg-gray-50/80 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400">
          <p>
            Database Document ID:{" "}
            <span className="font-mono text-gray-600 font-semibold">
              {_id || id}
            </span>
          </p>
          <p>Idea System • All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;
