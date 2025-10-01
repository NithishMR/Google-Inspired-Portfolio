"use client";

import Footer from "./Footer";
import SearchBar from "./SearchBar";
import AccountDetails from "./AccountDetails";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function FrontPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Nav */}
      <div className="w-full">
        <div className="flex flex-row items-center justify-end space-x-6 p-4">
          <div className="cursor-pointer text-gray-500 hover:underline">
            <a href="mailto:nithishmr004@gmail.com" target="_blank">
              Gmail
            </a>
          </div>
          <div className="cursor-pointer text-gray-500 hover:underline">
            <Link href="https://www.github.com/NithishMR" target="_blank">
              Github
            </Link>
          </div>

          {/* User Avatar */}
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger>
                <div className="cursor-pointer">
                  <img
                    src="/AshKetchum.jpeg"
                    alt="profile picture"
                    className="h-[45px] w-[45px] rounded-full"
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start">
        <div className="logo flex justify-center items-center mt-36 md:mt-20">
          <img src="./copy1.png" alt="google_logo" className="mx-auto" />
        </div>
        <SearchBar />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
