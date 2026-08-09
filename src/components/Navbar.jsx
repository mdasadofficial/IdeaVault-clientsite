"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="flex justify-between p-5">
      <div>
        <Link href={"/"}>
          {" "}
          <Image
            className="bg-transparent"
            src="/assets/IdeaVault.png"
            alt="IdeaVault"
            width={200}
            height={200}
          />
        </Link>
      </div>

      <ul className="flex gap-3 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/ideas"}>Ideas</Link>
        </li>
        <li>
          <Link href={"/add-idea"}>Add Idea</Link>
        </li>
        <li>
          <Link href={"/my-ideas"}>My Ideas</Link>
        </li>
      </ul>

      <ul className="flex gap-3 items-center">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {user ? (
          <>
            <li>
              {" "}
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt="John Doe"
                  src={user?.image}
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/signin"}>Sign In</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
