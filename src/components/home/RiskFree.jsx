import React from "react";
import Button from "../shared/Button";
import { IMAGES } from "../../assets";

const data = [
  {
    title: "Work Assessment",
    description:
      "We start with a technical and business-oriented call to understand your project, constraints and objectives.",
  },
  {
    title: "Go/No-Go Program",
    description:
      "We define a clear approach, tangible milestones and expected KPIs in a structured design document.",
  },
  {
    title: "Reviews",
    description:
      "For each milestone, we show the KPIs. If expectations are not met, we don’t move forward to the next phase and you pay only the work you’ve approved.",
  },
  {
    title: "Delivery & Maintenance",
    description:
      "We deliver the system with full documentation. You can choose ongoing maintenance or take full ownership.",
  },
];

const RiskFree = () => {
  return (
    <section className="h-auto py-10 bg-[#DCECF0] flex justify-center items-center w-full">
      <div className="lg:w-[80%] md:w-[85%] w-[90%] mx-auto flex gap-10 justify-between items-start">
        <div className="text-[#1F1F1F] flex flex-col gap-y-5">
          <h1 className="font-medium text-[28px]">
            We are not just developers.
          </h1>
          <p className="mt-0 text-lg">
            Building AI systems requires more than writing code. <br /> We take
            ownership of planning, coordination and delivery, ensuring clear
            milestones, alignment with business goals and predictable outcomes.
          </p>
          <div className="flex justify-start items-center gap-x-7">
            <Button>Book AI Assessment</Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          {data?.map((card, index) => (
            <StackCard key={index} index={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StackCard = ({ card, index }) => {
  return (
    <div className="w-full rounded-4xl p-5 bg-[#D0DFE2] text-[#1F1F1F] flex justify-start items-center gap-x-5 h-[161px]">
      <div className="font-semibold text-4xl">{index + 1}</div>
      <div className="flex flex-col justify-center items-start gap-y-2">
        <div className="font-semibold text-lg">{card.title}</div>
        <div className="text-[15px]">{card.description}</div>
      </div>
    </div>
  );
};

export default RiskFree;
