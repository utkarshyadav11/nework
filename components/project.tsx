"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiLink } from "react-icons/ti";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLink,
}: ProjectProps & {projectLink: string}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-200 max-w-[42rem]  rounded-3xl overflow-hidden sm:pr-0 relative sm:h-[22rem] hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/10">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl ">{title}</h3>
          <p className="mt-2 leading-relaxed text-black dark:text-white/80">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-4">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 mt-4 font-semibold text-white transition-colors bg-black w-fit rounded-[16px]"
          >
            <TiLink />
          </a>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
