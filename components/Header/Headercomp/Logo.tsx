import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 0.5, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 0.5, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
        >
          Mohit
        </motion.span>

        <motion.div animate={{ rotate: 0, y: 5 ,x: -10}} className="h-1 w-16 rounded bg-AAsecondary"></motion.div>
      
        <motion.div animate={{ rotate: 0, y: 36, x: -10 }} className="h-1 w-16 rounded bg-AAsecondary"></motion.div>
      
      </motion.div>
    </>
  );
}
