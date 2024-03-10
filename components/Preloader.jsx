"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = ["Be", "Greater", "Be", "Yourself"];

function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 800 : 500
    );
  }, [index]);

  return (
    <div>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="h-screen w-screen flex items-center justify-center fixed z-[99999] bg-[#FA939F]"
      >
        {dimension.width > 0 && (
          <>
            <motion.p
              className="flex text-white text-5xl items-center absolute z-20"
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              {words[index]}
            </motion.p>
            <motion.div
              style={{ slideUp }}
              className="overflow-x-clip overflow-y-visible -z-40"
            >
              <div className="h-[70%] md:h-[80%] w-[120%] -left-[10%] -mt-20 rounded-r-[60%] rounded-l-[60%] bg-[#FA939F] absolute"></div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default Preloader;
