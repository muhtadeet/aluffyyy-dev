import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Sites from "./Sites";
import { HoverProject } from "./ui/HoverProject";
import IconCloud from "./ui/icon-cloud";
import { ProjectGrid } from "./ui/project-grid";

const slugs = [
  "kotlin",
  "flutter",
  "dart",
  "materialdesign",
  "mysql",
  "prisma",
  "scala",
  "ktor",
  "git",
  "github",
  "docker",
  "postman",
  "androidstudio",
  "visualstudiocode",
  "android",
];
export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <>
      <motion.div
        id="projects"
        ref={container}
        style={{ y: sm }}
        className="mt-0 sm:mt-56 pt-10 pb-32 bg-[#FA939F]"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl sm:text-5xl text-white pt-10 mb-20 sm:pt-32 sm:-mb-36 md:mb-0 flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3">
            Tech Stack ⚙️
          </p>
          <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
        <p className="text-3xl sm:text-5xl text-white pt-10 pb-36 mb-20 sm:pt-20 sm:-mb-36 md:mb-80 flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3">
          Projects ✨
        </p>

        <div className="h-[60vh] sm:h-screen flex items-center justify-center">
          <div className="w-[85%] sm:w-[70%] z-[99999] mb-72">
            {/* <HoverProject /> */}
            <ProjectGrid />
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ height }}
        className="relative overflow-x-clip overflow-y-visible z-[1] mt-[100px]"
      >
        <div className="h-[1750%] w-[120%] -left-[10%] -mt-96 rounded-r-[80%] rounded-l-[80%] bg-[#FA939F] -z-[1] absolute"></div>
      </motion.div>
    </>
  );
}
