"use client";

import AllMetaDescription from "@/MyComponents/AllMetaDescription";

interface QandA1 {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}

const metaData: QandA1[] = [
  {
    question: "Myself, Me and I",
    answer:
      "I am a final-year Computer Science student seeking opportunities as a software developer. I am eager to learn and apply my skills to solve real-world problems while growing in a dynamic technology environment. I have hands-on experience in both backend and frontend development, building projects that demonstrate my ability to design, implement, and maintain scalable applications",
    bc: "About",
    linkTo: "/all",
  },
  {
    question: "My Technical Expertise and Areas of Interest",
    answer:
      "HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, ExpressJS, MySQL, Java, PostgreSQL",
    bc: "Expertise and Interest",
    linkTo: "/all",
  },
];

export default function AboutMe() {
  return (
    <div className="w-[70%] m-auto flex flex-col gap-8 py-6">
      <AllMetaDescription data={metaData} />
    </div>
  );
}
