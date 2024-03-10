import { motion } from "framer-motion";
import { slide } from "./anim";
import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
import FramerMgBtn from './FramerMgBtn.jsx'

function NavG() {
  return (
    <motion.div
      className="relative flex flex-col"
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <FramerMgBtn>
      <a
        className="cursor-pointer md:text-5xl xl:text-8xl mb-10 transition ease-in-out duration-300 hover:text-light-blue-600 text-white w-full font-ubuntu font-semibold"
        size="lg"
        // onClick={() => scroll.scrollToTop()}
        href="/"
        // smooth={true}
        // duration={1000}
      >
        Home
      </a>
      </FramerMgBtn><FramerMgBtn>
      <Link
        className="cursor-pointer md:text-5xl xl:text-8xl mb-10 transition ease-in-out duration-300 hover:text-light-blue-600 text-white w-full font-ubuntu font-semibold"
        to="about"
        href="#about"
        size="lg"
        smooth={true}
        duration={1000}
      >
        About
      </Link>
      </FramerMgBtn><FramerMgBtn>
      <Link
        className="cursor-pointer md:text-5xl xl:text-8xl mb-10 transition ease-in-out duration-300 hover:text-light-blue-600 text-white w-full font-ubuntu font-semibold"
        to="projects"
        href="#projects"
        size="lg"
        smooth={true}
        duration={1000}
      >
        Projects
      </Link>
      </FramerMgBtn><FramerMgBtn>
      <Link
        className="cursor-pointer md:text-5xl xl:text-8xl mb-10 transition ease-in-out duration-300 hover:text-light-blue-600 text-white w-full font-ubuntu font-semibold"
        to="contact"
        href="#contact"
        size="lg"
        smooth={true}
        duration={1000}
      >
        Contact
      </Link></FramerMgBtn>
    </motion.div>
  );
}

export default NavG;
