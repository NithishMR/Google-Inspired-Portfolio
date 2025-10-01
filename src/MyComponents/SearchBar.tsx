"use client";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SandA {
  suggest: string;
  linkTo: string;
}

const initialSuggestions: SandA[] = [
  { suggest: "About me", linkTo: "/all" },
  { suggest: "Projects", linkTo: "/projects" },
  // { suggest: "Images", linkTo: "/images" },
  { suggest: "Social", linkTo: "/social" },
  { suggest: "Experience", linkTo: "/experience" },
];

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<SandA[]>(initialSuggestions);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  // Show suggestions
  const showSuggestions = () => setIsVisible(true);

  // Hide suggestions if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Enter + Arrow keys
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        router.push(suggestions[activeIndex].linkTo);
      } else if (inputValue.trim()) {
        router.push(`/${inputValue.trim().toLowerCase()}`);
      }
      setIsVisible(false);
      setActiveIndex(-1);
    }
  };

  // Filter suggestions
  const filteredSuggestions = suggestions.filter((s) =>
    s.suggest.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Remove a suggestion
  const removeSuggestion = (index: number) => {
    setSuggestions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div ref={searchRef} className="relative w-full flex justify-center px-2">
      <div className="flex items-center w-full max-w-[600px]">
        {/* Search Button */}
        <button
          type="button"
          onClick={showSuggestions}
          className="h-10 w-10 border border-gray-500 rounded-l-md flex justify-center items-center"
        >
          <img src="/search.svg" alt="search" className="h-6" />
        </button>

        {/* Input */}
        <input
          type="text"
          value={inputValue}
          onClick={showSuggestions}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className={`h-10 flex-1 border border-gray-500 rounded-r-md focus:outline-none px-3 text-sm sm:text-base ${
            isVisible ? "rounded-r-none" : ""
          }`}
          autoComplete="off"
        />
      </div>

      {/* Suggestions Dropdown */}
      {isVisible && filteredSuggestions.length > 0 && (
        <ul className="absolute top-12 w-full max-w-[600px] border border-gray-500 bg-white shadow-lg rounded-md z-50">
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-2 cursor-pointer group ${
                index === activeIndex ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => router.push(item.linkTo)}
            >
              <span className="text-blue-500">{item.suggest}</span>
              {/* Remove button as an "X" only on hover */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSuggestion(index);
                }}
                className="opacity-0 group-hover:opacity-100 transition text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
