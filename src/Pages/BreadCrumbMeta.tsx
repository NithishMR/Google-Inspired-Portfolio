import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface MetaDescription {
  question: string;
  answer: string;
  bc: string;
  linkTo: string;
}

interface MetaDescriptionProps {
  data: MetaDescription;
}

const BreadCrumbMeta: React.FC<MetaDescriptionProps> = ({ data }) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              https://googleInspiredPortfolio.NithishMR.com
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to={data.linkTo}>{data.bc}</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbMeta;
