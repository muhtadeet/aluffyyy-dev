import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FramerMgBtn from "./FramerMgBtn";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const smx = useTransform(scrollYProgress, [1, 0], [-400, 0]);

  return (
    <>
      <motion.div
        ref={container}
        style={{ y: sm }}
        id="contact"
        className="h-unit-8xl md:h-unit-18 xl:h-[32rem] xl:mt-20 ml-5 sm:ml-0 flex flex-row justify-around"
      >
        <motion.div style={{ y: smx }} className="flex flex-col">
          <h3 className="mt-72 text-6xl md:text-8xl xl:text-9xl md:mt-20 xl:mt-36 font-generalSans text-white">
            Let&apos;s talk!
          </h3>

          <p className="xl:text-4xl md:text-3xl md:mt-5 md:m-2 xl:mt-10 xl:m-2 font-semibold font-lato text-white">
            ✉️
            <a
              className="ml-2"
              target="_blank"
              href="mailto: mi.aliifff@gmail.com"
              rel="noreferrer"
            >
              mi.aliifff@gmail.com
            </a>
          </p>
        </motion.div>
        <FramerMgBtn className="hidden sm:flex">
          <motion.div ref={container} style={{ y: smx }}>
            <div className="cursor-grab mr-5 md:mr-8 mt-[520px] md:mt-40 xl:mr-24 xl:mt-80 font-ubuntu text-base md:text-xl flex justify-center items-center rounded-full w-36 h-36 md:w-52 md:h-52 hover:bg-[#242424] text-white transition-all ease-in-out duration-300 bg-[#FA939F]">
              <FramerMgBtn>
                <a
                  target="_blank"
                  href="mailto: mi.aliifff@gmail.com"
                  rel="noreferrer"
                >
                  Hit Me Up! 🙌
                </a>
              </FramerMgBtn>
            </div>
          </motion.div>
        </FramerMgBtn>
      </motion.div>
    </>
  );
}
