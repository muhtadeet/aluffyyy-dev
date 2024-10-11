import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BoxReveal from "./ui/box-reveal";
import { Button } from "./ui/button";

// const items = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 2.8,
//     },
//   },
// };

function AboutText() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });

  // const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  // const smx = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    // <div
    //   ref={container}
    //   style={{ y: sm }}
    //   className="flex justify-center relative items-center mt-20 mb-20 sm:mt-0 sm:mb-32 bg-transparent"
    // >
    //   <div className="flex flex-col w-unit-5xl md:w-unit-9xl xl:w-unit-9xl">
    <div className="size-full max-w-lg text-white items-center justify-center overflow-hidden pt-20">
      <BoxReveal boxColor={"#FA939F"} duration={0.5}>
        <p
          className="text-[2.7rem] font-semibold font-ubuntu"
          data-cursor-size="100px"
          data-cursor-exclusion
          data-cursor-color="#005c77"
          id="stick-title"
        >
          Hey there,
          <br />
          I&apos;m Mustakim Islam Alif
        </p>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#FA939F"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal> */}

      <BoxReveal boxColor={"#FA939F"} duration={0.5}>
        <div className="mt-6">
          <p
            className="text-lg font-lato"
            data-cursor-size="100px"
            data-cursor-exclusion
            data-cursor-color="#005c77"
            id="stick-title"
          >
            Master of Cross-Platform and Native Development: Fluent in Kotlin
            Compose and Flutter. Bridging the gap between platforms, delivering
            seamless experiences across devices.
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#FA939F"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    </div>
    //   </div>
    // </div>
  );
}

export default AboutText;
