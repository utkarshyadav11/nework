"use client";

import Image from "next/image";
import Utkarsh_portrait from "@/public/Final.png"
import React from "react";
import "../app/globals.css"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
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
              src={Utkarsh_portrait}
              alt="Utkarsh portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

           <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.3,
              duration: 0.7,
            }}
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
       
        <span className="">Hello, I'm Utkarsh.</span> I'm a{" "}
        <span className="">Frontend React Developer</span> with{" "}
        <span className="">2 years</span> of experience. I develop{" "}
        <span className="">web applications and dynamic user interfaces</span>. My focus is{" "}
        <span className="">React & Next.js</span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link  href="#contact" >
        <button onClick={()=>{
           setActiveSection("Contact");
          setTimeOfLastClick(Date.now());

        }}>
    <span>Contact Me</span>
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M16.9614258,11.80896c-0.0254517-0.0614624-0.0622559-0.1168213-0.1085815-0.1630249l-4.4993896-4.4993896c-0.1937256-0.1871948-0.5009155-0.1871948-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L15.2930298,11.5H7.5C7.223877,11.5,7,11.723877,7,12s0.223877,0.5,0.5,0.5h7.7930298l-3.6465454,3.6464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C11.5,16.776062,11.723877,16.999939,12,17c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l4.4997559-4.4997559c0.0462646-0.0462036,0.0828247-0.1015015,0.1082153-0.1628418c0.0239258-0.0580444,0.0354004-0.1194458,0.0366211-0.1812134C16.9981079,12.0062866,17,12.003418,17,12c0-0.0023804-0.0012817-0.0043945-0.0013428-0.0067749C16.9978027,11.930481,16.9857788,11.8678589,16.9614258,11.80896z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z"/></svg>
</button>
    </Link>

       

          <a href="/UtkarshYadav.pdf" >
        <button>
    <span>Download CV</span>
   <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M16.9614258,11.80896c-0.0254517-0.0614624-0.0622559-0.1168213-0.1085815-0.1630249l-4.4993896-4.4993896c-0.1937256-0.1871948-0.5009155-0.1871948-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L15.2930298,11.5H7.5C7.223877,11.5,7,11.723877,7,12s0.223877,0.5,0.5,0.5h7.7930298l-3.6465454,3.6464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C11.5,16.776062,11.723877,16.999939,12,17c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l4.4997559-4.4997559c0.0462646-0.0462036,0.0828247-0.1015015,0.1082153-0.1628418c0.0239258-0.0580444,0.0354004-0.1194458,0.0366211-0.1812134C16.9981079,12.0062866,17,12.003418,17,12c0-0.0023804-0.0012817-0.0043945-0.0013428-0.0067749C16.9978027,11.930481,16.9857788,11.8678589,16.9614258,11.80896z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z"/></svg>
</button>
    </a>

        <a
           className="flex items-center gap-2 p-4 text-gray-700 transition bg-white border-0 rounded-full cursor-pointer hover:text-gray-950 active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/iutkarshyadav/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:text-gray-950 active:scale-105 transition cursor-pointer border-0 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/utkarshyadav11"
          target="_blank"
        >
          <FaGithubSquare />
          
        </a>
         <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:text-gray-950 active:scale-105 transition cursor-pointer border-0 dark:bg-white/10 dark:text-white/60"
          href="https://x.com/iUtkarshyadav11?mx=2"
          target="_blank"
        >
          <FaTwitterSquare />
          
        </a>
        

        
      </motion.div>
    </section>
  );
}
