"use client";

import AllMetaDescription from "./AllMetaDescription";

interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}

const metaData: QandA1[] = [
  {
    question:
      "Software Developer Intern - TakeMyTickets - (Feb 2025 - April 2025)",
    answer:
      "I worked as a Software Developer Intern at TakeMyTickets, where I built backend middleware features, implemented secure cron jobs with MongoDB, added API rate limiting with Redis, and gained experience with Docker and Kubernetes",
    bc: "Experience",
    linkTo: "https://www.linkedin.com/in/nithishmr/",
  },

  {
    question:
      "Armtech Computers Services Pvt. Ltd. – Alandur, Chennai (Dec 2023 – Jan 2024)",
    answer:
      "Worked as an intern, gaining hands-on experience in hardware diagnostics and OS installations, ensuring the optimal performance of RAM, SSD, HDD, and Windows systems",
    bc: "Experience",
    linkTo: "https://www.linkedin.com/in/nithishmr/",
  },
];

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="w-[70%] m-auto pt-4 pb-2">
        <div className="text-base text-gray-400">
          About {metaData.length} Results (0.69 seconds)
        </div>
      </div>

      {/* AllMetaDescription expects an array of objects */}
      <div className="w-[70%] m-auto ">
        <AllMetaDescription data={metaData} />
      </div>
    </div>
  );
}
