import BreadCrumbMeta from "./BreadCrumbMeta";

interface MetaDescription {
  question: string;
  answer: string;
  bc: string;
}

interface MetaDescriptionProps {
  data: MetaDescription[];
}

const MetaDescription: React.FC<MetaDescriptionProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div className="w-[70%] m-auto py-3" key={index}>
          <BreadCrumbMeta data={item} />
          <div className="text-xl py-2 text-blue-600">{item.question}</div>
          <div className="text-justify text-base text-gray-600">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaDescription;
