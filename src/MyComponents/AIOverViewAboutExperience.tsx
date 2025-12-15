"use client";

import { useEffect, useState } from "react";

const FULL_TEXT =
  "has gained hands-on industry experience through internships that span both software development and system-level technical work, with exposure to backend engineering, infrastructure tooling, and real-world operational environments.";

export default function AIOverViewExperience() {
  const [typedText, setTypedText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(FULL_TEXT.slice(0, index));
      index++;

      if (index > FULL_TEXT.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 30);

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

        {/* Overview Text */}
        <p className="text-gray-800 leading-relaxed">
          <span className="font-medium">Nithish </span>
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

        {/* Experience Details */}
        {isExpanded && (
          <ul className="mt-4 space-y-3 text-gray-700 text-sm sm:text-base animate-fadeIn">
            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">
                  Software Developer Intern — TakeMyTickets
                </span>{" "}
                (Feb 2025 – Apr 2025): Worked on backend middleware features,
                implemented secure scheduled cron jobs using MongoDB, added API
                rate limiting with Redis, and gained practical exposure to
                containerization and orchestration using Docker and Kubernetes
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 sm:mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="leading-relaxed">
                <span className="font-medium">
                  Intern — Armtech Computers Services Pvt. Ltd.
                </span>{" "}
                (Dec 2023 – Jan 2024): Gained hands-on experience with hardware
                diagnostics and operating system installations, ensuring
                reliable performance across RAM, SSD, HDD, and Windows-based
                systems
              </p>
            </li>
          </ul>
        )}

        {/* Footer */}
        <div className="mt-5 border-t pt-3 text-xs text-gray-500">
          Generated summary based on publicly visible experience information
        </div>
      </div>
    </div>
  );
}
