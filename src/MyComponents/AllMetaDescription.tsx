"use client";

import BreadCrumbMeta from "./BreadCrumbMeta";

interface MetaDescription {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}

interface MetaDescriptionProps {
  data: MetaDescription[];
}

const AllMetaDescription: React.FC<MetaDescriptionProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div className="py-5" key={index}>
          <BreadCrumbMeta data={item} />

          {/* Wrap link content in a single element */}
          <a
            href={item.linkTo}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="text-xl py-2 text-blue-600">{item.question}</div>
          </a>

          <div className="text-justify text-base text-gray-600">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMetaDescription;
