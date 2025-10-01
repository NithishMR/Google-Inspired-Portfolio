"use client";

import Link from "next/link";

export default function AccountDetails() {
  return (
    <div className="flex flex-col items-center justify-around gap-y-5">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3">
        {/* Profile Picture */}
        <div className="cursor-pointer">
          <img
            src="/AshKetchum.jpeg"
            alt="profile picture"
            className="h-[100px] w-[100px] rounded-full"
          />
        </div>
        {/* Name and Email */}
        <div className="text-center">
          <div className="font-bold text-lg">Nithish M R</div>

          <div className="text-gray-500 text-sm">
            <a href="mailto:nithishmr004@gmail.com" target="_blank">
              nithishmr004@gmail.com
            </a>
          </div>
        </div>
        {/* Website Design Button */}
        {/* <div className="border-gray-300 border-[1px] py-2 px-4 text-center rounded-xl shadow-md text-sm cursor-pointer hover:bg-gray-100">
          View Another Website Design
        </div> */}
      </div>

      {/* More About Me Section */}
      <div className="text-center">
        <div className="text-blue-500 cursor-pointer hover:underline">
          <Link href="/all"> More about me</Link>
        </div>
      </div>

      {/* GitHub Button */}
      <div className="border-gray-300 border-[1px] py-2 px-10 text-center rounded-xl shadow-md text-sm cursor-pointer hover:bg-gray-100">
        <Link href="https://www.github.com/NithishMR" target="_blank">
          Github
        </Link>
      </div>

      {/* Footer Links */}
      <div className="text-center text-gray-600 text-sm">
        <div className="inline-block cursor-pointer hover:underline">
          <Link
            href="https://github.com/NithishMR/Google-Inspired-Portfolio"
            target="_blank"
          >
            View Code
          </Link>
        </div>
        <span> • </span>
        <div className="inline-block cursor-pointer hover:underline">
          Blog & news
        </div>
      </div>
    </div>
  );
}
