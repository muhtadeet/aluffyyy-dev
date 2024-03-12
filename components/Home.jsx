import { Tooltip } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import FramerMgBtn from "./FramerMgBtn";
import { useRef } from "react";
import { FileText } from "lucide-react";
import Card3d from "./ui/Card3d";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.8,
      staggerChildren: 0.7,
    },
  },
};

const items = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const items2 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const smx = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <>
      <div className="flex flex-col h-dvh xl:mt-0 xl:pt-10 sm:mt-24 md:mt-12 md:h-screen md:-mb-80 xl:h-[100vh] justify-center xl:-mb-56 bg-gradient-to-bl from-[#6A43C4] from-10% to-[#BC97FC] to-80%">
        <motion.div
          ref={container}
          className="absolute flex items-end translate-x-[60vw] md:translate-x-[75vw] md:m-5 xl:translate-x-[80vw] mt-[650px] sm:mt-0 xl:m-4 xl:mt-52 rotate-90"
        >
          <motion.p
            style={{ x: smx }}
            variants={items2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-[#FFFFFE] mr-10 text-sm md:text-lg md:m-5 xl:text-2xl xl:m-10 font-ubuntu  font-black"
          >
            App Developer
          </motion.p>
          <motion.p
            style={{ x: smx }}
            variants={items2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-[#FFFFFE]  text-sm md:text-lg md:m-5 xl:text-2xl xl:m-10 font-ubuntu  font-black"
          >
            Bangladesh📍
          </motion.p>
        </motion.div>
        <motion.div
          ref={container}
          style={{ y: sm }}
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-5 mt-[200px] ml-7 sm:mt-0 sm:ml-0 md:justify-center md:m-1 xl:m-5 xl:ml-20 z-20 sm:z-0 xl:mt-32 xl:justify-center absolute"
        >
          <FramerMgBtn>
            <Tooltip showArrow={true} placement="right" content="CV">
              <motion.a
                data-cursor-size="100px"
                data-cursor-exclusion
                data-cursor-color="#004EA3"
                id="stick-title"
                variants={items}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                href="./Mustakim_Islam_Alif.pdf"
                download
                className="text-[#FFFFFE] hover:text-[#FA939F] font-lato font-black"
              >
                <FileText className="ml-1" />
              </motion.a>
            </Tooltip>
          </FramerMgBtn>
          <FramerMgBtn>
            <Tooltip showArrow={true} placement="right" content="GitHub">
              <motion.a
                data-cursor-size="100px"
                data-cursor-exclusion
                data-cursor-color="#004EA3"
                id="stick-title"
                variants={items}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/aluffyy"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition ease-in-out hover:stroke-[#FA939F] stroke-[#FFFFFE] tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </motion.a>
            </Tooltip>
          </FramerMgBtn>
          <FramerMgBtn>
            <Tooltip showArrow={true} placement="right" content="LinkedIn">
              <motion.a
                data-cursor-size="100px"
                data-cursor-exclusion
                data-cursor-color="#004EA3"
                id="stick-title"
                variants={items}
                viewport={{
                  once: true,
                }}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alifisalu/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin transition ease-in-out hover:stroke-[#FA939F] stroke-[#FFFFFE]"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </motion.a>
            </Tooltip>
          </FramerMgBtn>
        </motion.div>
        <div className="flex flex-row h-screen justify-center bg-transparent -mt-20">
          <Card3d />
        </div>
      </div>
    </>
  );
}
