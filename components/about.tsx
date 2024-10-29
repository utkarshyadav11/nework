"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

        After completing my engineering degree,{" "}
        <span className="font-medium">in 2022</span>, I shifted my focus to
        programming, following my passion for technology.{" "}
        <span className="font-medium">frontend development</span>.{" "}
        <span className="">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React and Next.js
        </span>
        . I am also familiar with Redux and TanStack Query. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="">full-time position</span> as a software
        developer.
      </p>
      
      <p>
        <span className="">I've collaborated with two dynamic organizations, channeling my skills to craft innovative and intuitively designed websites and web applications that enhance user experiences.</span>When I'm not coding, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="">learning new things</span>. I am currently
        learning about{" "}
        <span className="">Cooking and photography</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>



  );
}
