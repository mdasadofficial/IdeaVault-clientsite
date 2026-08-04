import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyIdeas = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:8000/idea/${user?.id}`);

  const ideas = await res.json();
  console.log("My Ideas:", ideas);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">My Ideas</h1>
      <div>
        {ideas?.map((idea) => (
          <div
            className="flex gap-5 flex-wrap  border p-4 min-w-3xl mx-auto px-4 py-8 mt-6"
            key={idea?._id}
          >
            {" "}
            <Image
              src={idea?.imageUrl}
              alt={idea?.ideaTitle}
              width={200}
              height={200}
            />
            <div>
              <h1>{idea?.ideaTitle}</h1>
              <h2 className="text-xl font-semibold">
                ${idea?.estimatedBudget}
              </h2>
              <p>{idea?.shortDescription}</p>
              <p>{idea?.longDescription}</p>
              <p>{idea?.category}</p>
              <p>{idea?.targetAudience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyIdeas;
