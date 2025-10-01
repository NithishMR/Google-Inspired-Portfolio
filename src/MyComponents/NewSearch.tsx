"use client";

import React from "react";
import AccountDetails from "./AccountDetails";
import SearchBar from "./SearchBar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

function NewSearch() {
  return (
    <div className="w-full border-b border-gray-400 p-4">
      {/* Mobile layout (default: column) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Top row (Logo + Profile for mobile, Logo only for desktop left) */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo */}
          <Link href="/">
            {" "}
            <img src="/copy1.png" alt="Logo" className="h-8" />
          </Link>

          {/* Profile (only visible on mobile top row, hidden on desktop here) */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger>
                <div className="cursor-pointer">
                  <img
                    src="/AshKetchum.jpeg"
                    alt="Profile Picture"
                    className="h-11 w-11 rounded-full"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[400px]">
                <AccountDetails />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Search bar (always full width on mobile, centered on desktop) */}
        <div className="w-full md:flex-1 md:mx-4 mt-4 md:mt-0">
          <SearchBar />
        </div>

        {/* Profile (desktop only, right side) */}
        <div className="hidden md:flex items-center">
          <Popover>
            <PopoverTrigger>
              <div className="cursor-pointer">
                <img
                  src="/AshKetchum.jpeg"
                  alt="Profile Picture"
                  className="h-11 w-11 rounded-full"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[400px]">
              <AccountDetails />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default NewSearch;
