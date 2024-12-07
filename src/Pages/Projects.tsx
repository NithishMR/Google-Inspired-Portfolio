import AllMetaDescription from "./AllMetaDescription";

interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}
const metaData: QandA1[] = [
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
    linkTo: "https://github.com/NithishMR/YoutubeClone",
  },
];
function Projects() {
  return (
    <>
      <div className="w-[70%] m-auto pt-4 pb-2">
        <div className="text-base text-gray-400">
          {" "}
          About {metaData.length} Results (0.69 seconds)
        </div>
      </div>
      <AllMetaDescription data={metaData} />
    </>
  );
}
export default Projects;
