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
      "Armtech Computers Services Pvt. Ltd. – Alandur, Chennai (Dec 2023 – Jan 2024)",
    answer:
      "Worked as an intern, gaining hands-on experience in hardware diagnostics and OS installations, ensuring the optimal performance of RAM, SSD, HDD, and Windows systems",
    bc: "Experience",
    linkTo: "https://www.linkedin.com/in/nithishmr/",
  },
];
function Experience() {
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
export default Experience;
