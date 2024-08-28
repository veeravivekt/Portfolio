import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // }
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/veera-vivek-telagani/",
  github: "https://github.com/veeravivekt",
  resume: "/resume.pdf",
  email: "telaganiveeravivek@gmail.com",
} as const;



export const OWNER_NAME = "Veera Vivek Telagani";
