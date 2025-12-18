import React from "react";
import Button from "../shared/Button";
import { IMAGES } from "../../assets";

const Hero = () => {
  return (
    <section className="h-[90vh] flex justify-center items-center w-full">
      <div className="lg:w-[80%] md:w-[85%] w-[90%] mx-auto flex gap-10 justify-between items-center">
        <div className="text-[#1F1F1F] flex flex-col gap-y-10">
          <h1 className="font-semibold text-[44px]">
            We build AI Systems. Custom and outsourced.
          </h1>
          <p className="mt-0 text-lg">
            From design to deployment, we operate as an external AI unit or
            build custom systems around your business processes, combining
            strong engineering with structured project management skills.
          </p>
          <div className="flex justify-start items-center gap-x-7">
            <Button>Book AI Assessment</Button>
            <Button variant="outlined">Our Services</Button>
          </div>
        </div>
        <img
          src={IMAGES.heroImg}
          alt={"hero image"}
          width={419}
          height={419}
          className="w-full h-full bg-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
