import React from "react";
import { Box } from "@mui/material";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";

const items = [
  {
    label: "Home",
    subItems: [
      { label: "Outsourcing", path: "/outsourcing" },
      { label: "Custom AI", path: "/custom-ai" },
    ],
  },
  { label: "Outsourcing", path: "/portfolio" },
  { label: "About", path: "/about" },
];

const siteMap = ["Home", "Outsourcing", "Custom Development", "Portfolio"];
const contactUs = ["Calendly", "Linkedin", "Github", "E-mail Us"];

const Footer = () => {
  return (
    <section className="bg-[#DCECF0] px-10 py-20 flex justify-center items-center w-full">
      <div className="w-full bg-[#D0DFE2] text-[#1F1F1F] rounded-4xl py-3">
        <div className="px-20 w-full flex  justify-between items-center">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <p
                className="text-center text-[#1F1F1F] leading-4 text-[26px]"
                style={{
                  fontWeight: 800,
                  leadingTrim: "none",
                  letterSpacing: "30%",
                }}
              >
                HIRUNDO
              </p>
              <img
                src={IMAGES.logo} // replace with your logo path
                alt="HIRUNDO Logo"
                width={95}
                height={95}
              />
            </div>
            <div className="max-w-md text-[15px] leading-5 mb-5">
              AI systems. Custom or outsourced.From design to deployment, we
              combine engineering execution with structured project management.
            </div>
            <Button>Back to Top</Button>
          </div>
          <div className="flex justify-start items-start">
            <div>Sitemap</div>
            {/* {sitemap} */}
          </div>
        </div>
        <div className="text-xs px-10 mt-10 mb-5">
          Hirundo Technologies s.r.l.s., Massafra (TA), Italy, VAT: 03375820739.
          All rights are reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
