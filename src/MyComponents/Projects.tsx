import AIOverViewAboutProjects from "./AIOverViewAboutProjects";
import AllMetaDescription from "./AllMetaDescription";

interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}

const metaData: QandA1[] = [
  {
    question: "Anamnesis",
    answer:
      "A project created using Nextjs  Next.js–based application designed for repetitive problem solving, combining daily reminders,progress tracking, and centralized organization of tasks and problems in a single workflow",
    bc: "Anamnesis",
    linkTo: "https://github.com/NithishMR/leetcode-recurse",
  },
  {
    question: "Asynchronous Email Job Queue System",
    answer:
      "A scalable job queue system built with BullMQ and Redis for asynchronous task processing. Supports email sending jobs with progress tracking, retry mechanisms, and a dead-letter queue, with Bull Board integrated for real-time monitoring.",
    bc: "Asynchronous Email Job Queue System",
    linkTo: "https://github.com/NithishMR/Multi-Task-Job-Queue-System",
  },
  {
    question: "Whiscrypt – Anonymous Reporting Platform (In Progress)",
    answer:
      "A secure, anonymous whistleblower platform featuring encrypted data storage, an admin dashboard built with React.js, and a RESTful API backend with Express.js and MongoDB. Applied AES-256 encryption and cryptographic hashing to ensure data confidentiality and integrity.",
    bc: "Whiscrypt",
    linkTo: "https://github.com/NithishMR/Whiscrypt-frontend",
  },
  {
    question: "Everhome Realty",
    answer:
      "Personal project inspired by Sotheby's Real Estate. Developed using React, Tailwind CSS, and various UI libraries. Emphasizes user-friendly interfaces, responsive layouts, and ongoing updates with new functionalities.",
    bc: "Everhome Realty",
    linkTo: "https://github.com/NithishMR/EverHome",
  },
  // {
  //   question: "Pokémon Name Finder",
  //   answer:
  //     "This page allows users to find a Pokémon's name by fetching data dynamically from an API rather than relying on hardcoded information.",
  //   bc: "Pokémon Name Finder",
  //   linkTo: "https://github.com/NithishMR/PokemonSearch-Basic-Version",
  // },
  {
    question: "YouTube Clone",
    answer:
      "A project created using HTML and CSS, replicating the core design and layout of YouTube. Features a static interface with simulated video browsing.",
    bc: "YouTube Clone",
    linkTo: "https://github.com/NithishMR/YoutubeClone",
  },
];

function Projects() {
  return (
    <div>
      <div className="w-[70%] m-auto pt-4 pb-2">
        <div className="text-base text-gray-400">
          About {metaData.length} Results (0.69 seconds)
        </div>
      </div>
      <div className="w-[70%] m-auto">
        <AIOverViewAboutProjects />
      </div>
      <div className="w-[70%] m-auto ">
        <AllMetaDescription data={metaData} />
      </div>
    </div>
  );
}

export default Projects;
