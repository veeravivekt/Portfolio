import Link from "next/link";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME.split(" ")[0]}</b>
        {" "}
      </small>
      <p className="text-xs">
        <b className="font-semibold">About this website:</b> built with React
        &amp; Next.js, Typescript, Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
