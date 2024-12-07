import Accord from "./Accord";
import AllMetaDescription from "./AllMetaDescription";
import MetaDescription from "./MetaDescription";

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
    question: "what are your hobbies",
    answer:
      "I play sports at my free time, learn new things for my profession and like to watch movies and anime",
  },
  // Add more QandA pairs as needed
];
const metaData: QandA1[] = [
  {
    question: "My Technical Expertise and Areas of Interest",
    answer:
      "HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACTJS, NODEJS, EXPRESS JS, MYSQL, JAVA, POSTGRESQL",
    bc: "Expertise and Interest",
    linkTo: "/about",
  },
  {
    question: " Everhome Realty (In Progress)",
    answer:
      " Personal project inspired by Sotheby's Real Estate. Developed using React, Tailwind CSS, and various UI libraries. Emphasizes user-friendly interfaces, responsive layouts, and ongoing updates with new functionalities.",
    bc: "Everhome Realty",
    linkTo: "https://github.com/NithishMR/EverHome",
  },
  // {
  //   question: "Random Quote Generator",
  //   answer:
  //     "Personal project using React. Features dynamic content rendering with randomized quotes, text colors, and background colors on button clicks. Includes responsive design and user-friendly interface.",
  //   bc: "Random Quote Generator",
  //   linkTo: "https://github.com/NithishMR/QuoteApp-React",
  // },
  {
    question: "Pokémon Name Finder",
    answer:
      "This page allows users to find a Pokémon's name by fetching data dynamically from an API rather than relying on hardcoded information.",
    bc: "Pokémon Name Finder",
    linkTo: "https://github.com/NithishMR/PokemonSearch-Basic-Version",
  },
  {
    question: "YouTube Clone",
    answer:
      "A project created using HTML and CSS, replicating the core design and layout of YouTube. Features a static interface with simulated video browsing.",
    bc: "YouTube Clone",
    linkTo: "https://nithishmr.github.io/YoutubeClone/",
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
    question: "Myself,Me and I",
    answer:
      " An enthusiastic student deeply passionate about software development, eager to contribute my evolving skills and enthusiasm to the dynamic field of technology, determined to reach new heights in both my academic pursuits and professional endeavors.",
    bc: "about",
    linkTo: "/about",
  },
];
function About() {
  return (
    <>
      <div className="">
        <div className="w-[70%] m-auto pt-4 pb-2">
          <div className="text-base text-gray-400">
            {" "}
            About {metaData.length} Results (0.69 seconds)
          </div>
        </div>
        <div className="">
          <MetaDescription data={metaData1} />
        </div>
        <div className="w-[70%] m-auto">
          <div className="text-3xl py-4">People also Ask</div>
          <div className="pb-7">
            <Accord data={aboutData} />
          </div>
        </div>
        <div className="">
          <AllMetaDescription data={metaData} />
        </div>
      </div>
    </>
  );
}

export default About;
