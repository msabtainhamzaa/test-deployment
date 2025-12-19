import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";

const sitemap = [
  {
    label: "Home",
    path: "/",
  },
  { label: "Outsourcing", path: "/outsourcing" },
  { label: "Custom Development", path: "/portfolio" },
  { label: "Portfolio", path: "/portfolio" },
];
const contacts = [
  {
    label: "Calendly",
    path: "/",
  },
  { label: "Linkedin", path: "/outsourcing" },
  { label: "Github", path: "/portfolio" },
  { label: "E-mail Us", path: "/portfolio" },
];

const contactUs = ["Calendly", "Linkedin", "Github", "E-mail Us"];

const Footer = () => {
  return (
    <section className="bg-[#DCECF0] px-5 py-10 flex justify-center items-center w-full">
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
              AI systems. Custom or outsourced. <br />
              From design to deployment, we combine engineering execution with
              structured project management.
            </div>
            <Button>Back to Top</Button>
          </div>
          <div className="flex justify-start items-start gap-20 md:w-[45%] w-full">
            <div>
              <div className="text-lg font-semibold mb-4">Sitemap</div>
              <div className="flex justify-start items-start flex-col gap-y-2">
                {sitemap.map((item) => (
                  <Link
                    to={item.path}
                    className={`text-[15px] transition-all duration-300 text-[#1F1F1F] hover:text-[#2f80c9]`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-4">Contact Us</div>
              <div className="flex justify-start items-start flex-col gap-y-2">
                {contacts.map((item) => (
                  <Link
                    to={item.path}
                    className={`text-[15px] transition-all duration-300 text-[#1F1F1F] hover:text-[#2f80c9]`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
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
