"use client"; 

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'



const Intro = () => {
 
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt={`${OWNER_NAME.split(" ")[0]} portrait`}
              width={256}
              height={256}
              quality={95}
              priority={true}
              className="h-64 w-64 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-5xl bottom-4 right-4"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[-5px] px-[10px] border border-[#7042f88b] opacity-90'
            >
              <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
              <h1 className='Welcome-text text-[13px]'>
                Fullstack Devloper Portfolio
              </h1>
            </motion.div> */}
        <b className="font-bold">Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>Veera Vivek Telagani</span>.</b>{" "}
        I&apos;m a <b className="font-bold">Full Stack Software Engineer</b> with{" "}
        <b className="font-bold">2+ years</b> of experience.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
      >
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href={EXTRA_LINKS.resume}
            target="_blank"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition borderBlack dark:bg-white/10"
          >
            My Resume
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </Link>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>

          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
