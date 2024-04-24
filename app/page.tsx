"use client";
import HomePage from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbarmenu from "../components/NavMenu";
import FooterComp from "../components/FooterComp";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Test from "../components/Test";
import { NavBar } from "@/components/NavBar";
import CC from "../components/CC";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import Hero from "@/components/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <div>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        {/* <Test /> */}
        <Cursor isGelly={true} cursorBackgrounColor={"#FA939F"} />
        {/* <CC /> */}
        {/* <Navbarmenu /> */}
        <div
          data-cursor-size="100px"
          data-cursor-exclusion
          data-cursor-color="#004EA3"
          id="stick-title"
        >
          <NavBar />
        </div>
        <Hero />
        <HomePage />
        <div data-cursor-color="#BC97FC">
          {/* <About /> */}
          <Projects />
        </div>
        <Contact />
        <FooterComp />
      </div>
    </>
  );
}
