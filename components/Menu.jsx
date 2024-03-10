import { menuSlide } from "./anim.jsx";
import { motion } from "framer-motion";
import NavG from './NavG.jsx'


const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
  window.innerHeight
} Q-100 ${window.innerHeight / 2} 100 0`;
const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
  window.innerHeight
} Q100 ${window.innerHeight / 2} 100 0`;

const pathAnimation = {
  initial: {
    d: initialPath,
  },
  enter: {
    d: targetPath,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: initialPath,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

function Menu() {

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100%] w-screen sm:w-auto bg-[#050411] fixed right-0 top-0 text-white"
    >
      <div className="box-border h-[100%] p-[100px] flex flex-col justify-between">
        <div className="flex flex-col text-[56px] gap-3 mt-32 md:mt-12 xl:mt-20">
          <div className="border-b border-solid border-[#999999] uppercase text-xs xl:mb-10">
            <p>Navigation</p>
          </div>
            <NavG/>
          
        </div>
      </div>
      <svg className="absolute top-0 -left-24 w-[100px] h-[100%] stroke-none">
        <motion.path
          variants={pathAnimation}
          fill={"#050411"}
          initial="initial"
          animate="enter"
          exit="exit"
        ></motion.path>
      </svg>
    </motion.div>
  );
}

export default Menu;
