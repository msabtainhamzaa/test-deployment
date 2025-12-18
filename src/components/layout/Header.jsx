import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IMAGES } from "../../assets";
import Button from "../shared/Button";
import NavLink from "./NavLink";

const items = [
  {
    label: "Services",
    subItems: [
      { label: "Outsourcing", path: "/outsourcing" },
      { label: "Custom AI", path: "/custom-ai" },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
];

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 16,
        mx: "auto",
        width: "95%",
        borderRadius: 3,
        backgroundColor: "transparent",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo + Text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
          <p
            className="text-center text-[#1F1F1F] leading-4 text-[26px]"
            style={{
              fontWeight: 800,
              leadingTrim: "none",
              letterSpacing: "30%",
              verticalAlign: "middle",
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
        </Box>

        {/* Center: Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 10,
            background: "#D0DFE2",
            paddingX: 6,
            paddingY: 2,
            borderRadius: 8,
            boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          {items.map((link, index) => (
            <NavLink key={index} link={link} />
          ))}
        </Box>

        <Button>Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}
