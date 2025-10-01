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

const MetaDescription: React.FC<MetaDescriptionProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="py-3 w-[70%] m-auto">
          <BreadCrumbMeta data={item} />
          <div className="text-xl py-2 text-blue-600 cursor-pointer">
            {item.question}
          </div>
          <div className="text-justify text-base text-gray-600">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaDescription;
