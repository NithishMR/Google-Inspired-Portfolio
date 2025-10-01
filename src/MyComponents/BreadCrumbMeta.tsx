"use client";

import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <Link
              href="https://googleInspiredPortfolio.NithishMR.com"
              className="text-gray-500"
            >
              https://googleInspiredPortfolio.NithishMR.com
            </Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <Link href={data.linkTo} className="text-blue-600 hover:underline">
              {data.bc}
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbMeta;
