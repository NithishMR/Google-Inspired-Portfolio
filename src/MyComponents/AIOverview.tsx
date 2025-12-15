"use client";

import { useEffect, useState } from "react";

const FULL_TEXT =
  "software engineering student focused on building robust backend systems, practical developer tools, and performance-aware applications. He prioritizes fundamentals, clean architecture, and real-world problem solving over superficial solutions.";

export default function AIOverView() {
  const [typedText, setTypedText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(FULL_TEXT.slice(0, index));
      index++;

      if (index > FULL_TEXT.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 30); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="max-w-3xl mx-auto mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all">
        {/* Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
          <h2 className="text-sm font-semibold text-gray-700">AI Overview</h2>
        </div>

        {/* Main Overview Text */}
        <p className="text-gray-800 leading-relaxed">
          <span className="font-medium">Nithish</span> is a{" "}
          <span className="bg-blue-300">
            {typedText}
            {!isTypingDone && <span className="ml-0.5 animate-pulse">|</span>}
          </span>
        </p>

        {/* Expand / Collapse */}
        {isTypingDone && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-sm font-medium text-blue-600 hover:underline"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}

        {/* Key Highlights */}
        {isExpanded && (
          <ul className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base animate-fadeIn">
            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Strong interest in{" "}
                <span className="font-medium">Software Engineering</span>,
                distributed systems, and developer infrastructure
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Builds{" "}
                <span className="font-medium">resume-worthy projects</span> with
                real constraints, edge cases, and scalability considerations
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Long-term goals include{" "}
                <span className="font-medium">backend mastery</span>, cloud
                systems, and applied AI for productivity and security
              </p>
            </li>
          </ul>
        )}

        {/* Footer */}
        <div className="mt-5 border-t pt-3 text-xs text-gray-500">
          Generated summary based on publicly visible portfolio information
        </div>
      </div>
    </div>
  );
}
