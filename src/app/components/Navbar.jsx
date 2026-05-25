import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex
     justify-between p-5  "
    >
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
          <Link href={"/my-idea"}>My Ideas</Link>
        </li>
      </ul>

      <ul className="flex gap-3 items-center">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
