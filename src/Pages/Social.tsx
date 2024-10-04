import AllMetaDescription from "./AllMetaDescription";

interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}
const metaData: QandA1[] = [
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
function Social() {
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
export default Social;
