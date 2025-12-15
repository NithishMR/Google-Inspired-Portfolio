"use client";

import { useEffect, useState } from "react";

const FULL_TEXT =
  "software engineering student who focuses on designing reliable  systems, developer-facing tools etc. He values strong computer science fundamentals, clean and maintainable architecture, and solving real-world problems with practical constraints in mind, rather than relying on surface-level or shortcut solutions.";

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
                Primarily interested in{" "}
                <span className="font-medium">Software Engineering</span>, with
                emphasis on system design, data handling, scalability, and
                distributed systems
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Develops{" "}
                <span className="font-medium">
                  practical, resume-grade projects
                </span>{" "}
                that account for real constraints such as edge cases,
                performance trade-offs, maintainability, and long-term
                extensibility
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Long-term direction includes achieving deep{" "}
                <span className="font-medium">backend mastery</span>, building
                cloud-native systems, and applying AI to improve developer
                productivity, security, and system intelligence
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Approaches learning with a focus on{" "}
                <span className="font-medium">first principles</span>,
                preferring deep understanding of how systems work internally
                over memorizing frameworks or abstractions
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
