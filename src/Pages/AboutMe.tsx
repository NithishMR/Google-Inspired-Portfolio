import AllMetaDescription from "./AllMetaDescription";
import NewSearch from "./NewSearch";

interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}
const metaData: QandA1[] = [
  {
    question: "Myself,Me and I",
    answer:
      " An enthusiastic student deeply passionate about software development, eager to contribute my evolving skills and enthusiasm to the dynamic field of technology, determined to reach new heights in both my academic pursuits and professional endeavors.",
    bc: "about",
    linkTo: "/all",
  },
  {
    question: "My Technical Expertise and Areas of Interest",
    answer:
      "HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACTJS, NODEJS, EXPRESS JS, MYSQL, JAVA, POSTGRESQL",
    bc: "Expertise and Interest",
    linkTo: "/all",
  },
];
function AboutMe() {
  return (
    <>
      <div className="">
        <NewSearch />
        <div className="">
          <AllMetaDescription data={metaData} />
        </div>
      </div>
    </>
  );
}
export default AboutMe;
