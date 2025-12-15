"use client";

import { useEffect, useState } from "react";

// const FULL_TEXT =
//   "has developed multiple full-stack applications since his college years, showing a clear progression from frontend experimentation to backend-driven and end-to-end systems, with increasing focus on scalability, security, and maintainable architecture.";

const FULL_TEXT =
  "has developed many full-stack applications since his college years, using each project as a learning step to move from frontend fundamentals toward deeper backend engineering and complete system ownership.";

export default function AIOverViewAboutProjects() {
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
          <span className="font-medium">Nithish </span> is a{" "}
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
                <span className="font-medium">Anamnesis</span> — a Next.js–based
                application designed for repetitive problem solving, combining
                daily reminders, progress tracking, and centralized organization
                of tasks and problems in a single workflow
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">
                  Asynchronous Email Job Queue System
                </span>{" "}
                — a scalable background processing system built with BullMQ and
                Redis, supporting asynchronous email jobs with retry logic,
                progress tracking, dead-letter queues, and real-time monitoring
                via Bull Board
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">Whiscrypt</span> — an in-progress
                anonymous reporting platform focused on security and privacy,
                featuring encrypted data storage, cryptographic hashing, a
                RESTful backend with Express and MongoDB, and an administrative
                dashboard built using React
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">Everhome Realty</span> — a
                front-end–focused personal project inspired by Sotheby’s Real
                Estate, emphasizing responsive design, polished UI components,
                and user-friendly browsing experiences using React and Tailwind
                CSS
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">YouTube Clone</span> — a static UI
                project built with HTML and CSS that replicates the core layout
                and visual structure of YouTube, focusing on layout accuracy and
                responsive styling
              </p>
            </li>
            {/* <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">
                  SafeLink (Pre-Click Guardian)
                </span>{" "}
                — a security-focused system designed to analyze URLs before user
                interaction, combining heuristic checks, machine learning
                concepts, and cloud-based verification
              </p>
            </li> */}

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">
                  Git for Data - Under development and have not released
                </span>{" "}
                — a command-line tool that brings version control concepts such
                as commits, diffs, and rollback to structured data formats like
                CSV and JSON, emphasizing tooling design and developer
                ergonomics
              </p>
            </li>

            {/* <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">Raja Rajini</span> — an offline
                LAN-based multiplayer game built with React Native, focusing on
                local networking, real-time interaction, UI/UX laws, and
                performance on low-end devices
              </p>
            </li> */}

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                Across projects, there is a consistent emphasis on{" "}
                <span className="font-medium">
                  system thinking, edge-case handling, and scalability
                </span>
                , rather than one-off feature development
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
