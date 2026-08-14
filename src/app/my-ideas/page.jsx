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
          <div key={idea?.id} className="border p-4 my-4 rounded-lg shadow-md">
            <Image
              src={idea?.image}
              alt={idea?.title || "Idea image"}
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyIdeas;
