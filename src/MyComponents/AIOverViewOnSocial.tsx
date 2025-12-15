"use client";

import { useEffect, useState } from "react";

const FULL_TEXT =
  "has a presence on professional and developer platforms, including LinkedIn for career-related updates, GitHub for sharing and maintaining code repositories and cssbattle.dev for daily css challenges.";

export default function AIOverViewSocial() {
  const [typedText, setTypedText] = useState("");
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
      <div className="max-w-3xl mx-auto mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
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

        {/* Footer */}
        <div className="mt-5 border-t pt-3 text-xs text-gray-500">
          Generated summary based on publicly visible social profiles
        </div>
      </div>
    </div>
  );
}
