// Accord.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QandA {
  question: string;
  answer: string;
}

interface AccordProps {
  data: QandA[];
}

const Accord: React.FC<AccordProps> = ({ data }) => {
  return (
    <Accordion type="single" collapsible className="w-[100%] m-auto">
      {data.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accord;
