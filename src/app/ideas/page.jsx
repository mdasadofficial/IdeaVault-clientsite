import React from "react";
import IdeaCard from "../../components/IdeaCard";

const IdeasPage = async () => {
  const res = await fetch("http://localhost:8000/ideas");
  const ideas = await res.json();
  // console.log("What an idea", ideas);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch p-4">
        {/* Heading full width jore thakbe */}
        <h1 className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-3xl font-extrabold text-gray-800 mb-2">
          All Ideas
        </h1>

        {/* Dynamic vabe direct loop hobe jate grid e card gulo thikmoto bose */}
        {ideas.map((idea) => (
          <div key={idea._id} className="h-full w-full flex">
            <IdeaCard idea={idea} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeasPage;
