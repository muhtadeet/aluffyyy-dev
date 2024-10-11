import React from "react";
import { Tooltip } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import FramerMgBtn from "./FramerMgBtn";
import { useRef } from "react";
import { FileText, Github, Linkedin } from "lucide-react";
import Alu from "../public/alu.png";
import Image from "next/image";

type Props = {};

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

const Hero = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const smx = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div className="flex flex-col h-dvh xl:mt-0 xl:pt-10 sm:mt-24 md:mt-12 md:h-screen md:-mb-80 xl:h-screen justify-center xl:mb-0 bg-white">
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
          className=" text-black mr-10 text-sm md:text-lg md:m-5 xl:text-2xl xl:m-10 font-ubuntu  font-black"
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
          className=" text-black  text-sm md:text-lg md:m-5 xl:text-2xl xl:m-10 font-ubuntu  font-black"
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
              data-cursor-color="#005c77"
              id="stick-title"
              variants={items}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              href="./Mustakim_Islam_Alif.pdf"
              download
              className="text-black hover:text-[#FA939F] font-lato font-black"
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
              data-cursor-color="#005c77"
              id="stick-title"
              variants={items}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aluffyy"
              className="text-black transition ease-in-out hover:text-[#FA939F] font-lato font-black"
            >
              <Github className="ml-1" />
            </motion.a>
          </Tooltip>
        </FramerMgBtn>
        <FramerMgBtn>
          <Tooltip showArrow={true} placement="right" content="LinkedIn">
            <motion.a
              data-cursor-size="100px"
              data-cursor-exclusion
              data-cursor-color="#005c77"
              id="stick-title"
              variants={items}
              viewport={{
                once: true,
              }}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/alifisalu/"
              className="transition ease-in-out text-black hover:text-[#FA939F] font-lato font-black"
            >
              <Linkedin className="ml-1" />
            </motion.a>
          </Tooltip>
        </FramerMgBtn>
      </motion.div>
      {/* <div className="flex justify-center -mt-10">
        <Image
          className="absolute w-[92%] sm:w-[30%] -mt-5 md:-mt-40 md:w-[40%] xl:-mt-32 xl:w-[35%] 2xl:w-[40%] 2xl:-mt-20 z-10 drop-shadow-[0_0_7px_rgba(0,0,0,0.55)]"
          src={Alu}
          alt="photo"
          width={600}
          height={600}
        />
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="hidden sm:flex flex-col justify-around items-center md:-mt-20 md:h-[90vh] xl:-mt-7 xl:w-[100vw] xl:h-[100vh]"
        >
          <motion.p
            variants={items}
            viewport={{
              once: true,
            }}
            className=" text-[#242424] md:text-7xl md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
          >
            Mustakim Islam Alif
          </motion.p>
          <motion.p
            variants={items}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="hehe text-white md:text-7xl md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
          >
            Mustakim Islam Alif
          </motion.p>
          <motion.p
            variants={items}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="hehe text-white md:text-7xl md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
          >
            Mustakim Islam Alif
          </motion.p>
          <motion.p
            variants={items}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-[#242424] md:text-7xl md:mb-5 md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
          >
            Mustakim Islam Alif
          </motion.p>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Hero;
