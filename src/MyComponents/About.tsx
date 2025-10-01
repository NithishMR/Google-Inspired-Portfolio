"use client";

import Accord from "@/MyComponents/Accord";
import AllMetaDescription from "@/MyComponents/AllMetaDescription";
import MetaDescription from "@/MyComponents/MetaDescription";

interface QandA {
  question: string;
  answer: string;
}
interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}

const aboutData: QandA[] = [
  {
    question: "Are you open for work",
    answer: "I am always open to working on innovative and creative projects.",
  },
  {
    question: "How to reach you?",
    answer: "You can reach me through nithishmr004@gmail.com",
  },
  {
    question: "What are your hobbies?",
    answer:
      "I play sports at my free time, learn new things for my profession and like to watch movies and anime",
  },
];

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
      "IT Support Intern - Armtech Computers Services Pvt. Ltd. – Alandur, Chennai (Dec 2023 – Jan 2024)",
    answer:
      "Worked as an intern, gaining hands-on experience in hardware diagnostics and OS installations, ensuring the optimal performance of RAM, SSD, HDD, and Windows systems",
    bc: "Experience",
    linkTo: "https://www.linkedin.com/in/nithishmr/",
  },
  {
    question: "Resume",
    answer:
      "Click here to download my resume for more details about my qualifications and experience",
    bc: "About",
    linkTo: "/NithishMR.pdf",
  },

  {
    question: "My Technical Expertise and Areas of Interest",
    answer:
      "HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, ExpressJS, MySQL, Java, PostgreSQL",
    bc: "Expertise and Interest",
    linkTo: "/about",
  },
  {
    question: "Asynchronous Email Job Queue System ",
    answer:
      "A scalable job queue system built with BullMQ and Redis for asynchronous task processing. Supports email sending jobs with progress tracking, retry mechanisms, and a dead-letter queue, with Bull Board integrated for real-time monitoring.",
    bc: "Everhome Realty",
    linkTo: "https://github.com/NithishMR/Multi-Task-Job-Queue-System",
  },
  {
    question: "Whiscrypt – Anonymous Reporting Platform (In Progress)",
    answer:
      "A secure, anonymous whistleblower platform featuring encrypted data storage, an admin dashboard built with React.js, and a RESTful API backend with Express.js and MongoDB. Applied AES-256 encryption and cryptographic hashing to ensure data confidentiality and integrity.",
    bc: "Everhome Realty",
    linkTo: "https://github.com/NithishMR/Multi-Task-Job-Queue-System",
  },
  {
    question: "Everhome Realty",
    answer:
      "Personal project inspired by Sotheby's Real Estate. Developed using React, Tailwind CSS, and various UI libraries. Emphasizes user-friendly interfaces, responsive layouts, and ongoing updates with new functionalities.",
    bc: "Everhome Realty",
    linkTo: "https://github.com/NithishMR/EverHome",
  },
  {
    question: "LinkedIn",
    answer:
      "I invite you to view my professional background and connections on LinkedIn. Please visit the following link to explore my profile.",
    bc: "LinkedIn",
    linkTo: "https://www.linkedin.com/in/nithishmr/",
  },
  {
    question: "Github",
    answer:
      "You can explore my work, including various repositories and contributions, by visiting my GitHub profile.",
    bc: "Github",
    linkTo: "https://github.com/NithishMR/",
  },
];

const metaData1: QandA1[] = [
  {
    question: "Myself, Me and I",
    answer:
      "I am a final-year Computer Science student seeking opportunities as a software developer. I am eager to learn and apply my skills to solve real-world problems while growing in a dynamic technology environment. I have hands-on experience in both backend and frontend development, building projects that demonstrate my ability to design, implement, and maintain scalable applications ",
    bc: "About",
    linkTo: "/about",
  },
];

export default function About() {
  return (
    <div className="">
      {/* Header Info */}
      <div className="w-[70%] m-auto pt-4 pb-2">
        <div className="text-base text-gray-400">
          About {metaData.length} Results (0.69 seconds)
        </div>
      </div>

      {/* Intro / MetaDescription */}
      <div className="">
        <MetaDescription data={metaData1} />
      </div>

      {/* People Also Ask */}
      <div className="w-[70%] m-auto">
        <div className="text-3xl py-4">People also Ask</div>
        <Accord data={aboutData} />
      </div>

      {/* Additional MetaData */}
      <div className="w-[70%] m-auto">
        <AllMetaDescription data={metaData} />
      </div>
    </div>
  );
}
