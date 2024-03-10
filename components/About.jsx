import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FramerMgBtn from "./FramerMgBtn";

const items = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
};

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const smx = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <>
      <div id="about"></div>
      <motion.div
        ref={container}
        style={{ y: sm }}
        className="flex justify-center z-20 relative items-start mt-[550px] sm:mt-56 h-[100%] mb-10 pt-10 bg-[#242424]"
      >
        <div className="flex flex-col w-unit-5xl md:w-unit-9xl xl:w-unit-9xl xl:mr-52">
          <motion.p
            variants={items}
            initial="initial"
            whileInView="animate"
            className=" text-[#fafafa] md:p-5 xl:p-5 pt-10 md:pt-20 xl:pt-36 xl:-my-10 text-3xl md:text-5xl xl:text-6xl font-ubuntu"
          >
            Hey there, I&apos;m Muhtadee Taron👋🏼
          </motion.p>
          <motion.p
            variants={items}
            initial="initial"
            whileInView="animate"
            className=" text-[#fafafa] w-unit-6xl md:w-unit-9xl md:p-5 xl:p-5 pt-5 md:pt-5 xl:pt-36 xl:-my-10 text-base md:text-lg xl:text-xl max-w-5xl font-lato"
          >
            Code whisperer. Building stunning, intuitive UIs that wow. React + Tailwind master. Cross-team ninja. Devouring tech trends. Seeking complex challenges to conquer. Building accessible UIs with React & fighting for UX justice in spare time
          </motion.p>
        </div>
        <FramerMgBtn>
          <motion.div ref={container} style={{ y: smx }}>
            <div className="cursor-grab xl:ml-0 mt-24 sm:mt-0 md:mt-56 xl:mt-80 font-ubuntu text-xl flex justify-center items-center rounded-full w-36 h-36 md:w-52 md:h-52 bg-white hover:text-white text-black transition-all ease-in-out duration-300 hover:bg-light-blue-600">
              <FramerMgBtn>About me</FramerMgBtn>
            </div>
          </motion.div>
        </FramerMgBtn>
      </motion.div>
    </>
  );
}
