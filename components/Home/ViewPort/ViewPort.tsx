import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/router";
export default function ViewPort(props: { finishedLoading: boolean }) {
  return (
    <div
      
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 3.4, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 3.4, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-AAsecondary font-mono"
        >
          Hi, my name is
        </motion.span>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 3.5, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 3.5, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Mohit Kumar.
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 3.6, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 3.6, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          I bring ideas to life.
        </motion.h2>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 3.7, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 3.7, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
        >
          I&apos;m a <span className="text-AAsecondary">software engineer</span> highly skilled Computer Science and Engineering Post Graduate with a passion for building innovative solutions. With expertise in modern technologies like TypeScript, Node.js, React, and DevOps. 
        
          I specialize in developing <span className="text-AAsecondary">end-to-end web applications.</span>
        </motion.h3>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 3.8, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 3.8, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="mt-12"
        >
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">

          <button
            className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary"
          >
            Check out my resume!
          </button>
          </a>
        </motion.div>
      
    </div>
  );
}
