import React from "react";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";

const items = [
  {
    icon: IMAGES.service1,
    title: "Machine Learning",
    description:
      "Predictive, classification, regression models, Neural Networks, along with other tailored approaches designed to support data-driven decisions.",
  },
  {
    icon: IMAGES.service2,
    title: "Computer Vision",
    description:
      "Image recognition, classification and structuring models designed to improve workflows and automate visual processes.",
  },
  {
    icon: IMAGES.service3,
    title: "Generative AI",
    description:
      "Generative AI systems built through fine-tuning or APIs and prompt design, tailored to make knowledge accessible and actionable.",
  },
  {
    icon: IMAGES.service4,
    title: "Agents",
    description:
      "Autonomous and semi-autonomous systems that connect language models to software actions and operational workflows.",
  },
];

const Services = () => {
  return (
    <section className="h-auto pb-10 bg-[#DCECF0] flex justify-center items-center w-full">
      <div>
        <div className="text-[#1F1F1F] p-10 rounded-4xl lg:w-[80%] md:w-[85%] w-[90%] bg-[#D0DFE2] mx-auto flex gap-10 justify-between items-start">
          <div className="md:w-[45%] w-full text-[28px]">
            If you want to integrate AI, you need a Team.
          </div>
          <div className="md:w-[45%] w-full">
            <div className="text-[15px] mb-4 leading-5">
              To generate real impact, AI systems must be designed around your
              actual needs, developed with solid engineering, and maintained
              reliably over time. Only then can you reduce costs, increase
              revenue and improve operational efficiency.
            </div>
            <Button>Book AI Assessment</Button>
          </div>
        </div>
        <div className="md:mt-10 mt-5 lg:w-[80%] md:w-[85%] w-[90%] bg-[#DCECF0] mx-auto flex gap-x-2 justify-between items-center">
          {items?.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ item }) => {
  return (
    <div
      className="md:w-[240px] w-full"
      style={{
        color: "#1F1F1F",
        height: 373,
        background: "#D0DFE2",
        borderRadius: "32px",
        textAlign: "center",
      }}
    >
      <img
        src={item.icon}
        width={145}
        height={145}
        alt={item.title}
        className="mx-auto"
      />
      <div className="text-lg mb-4 font-semibold">{item.title}</div>
      <div className="text-[15px] text-center leading-6 px-6">
        {item.description}
      </div>
    </div>
  );
};

export default Services;
