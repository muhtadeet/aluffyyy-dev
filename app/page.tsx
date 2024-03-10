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
        {/* <Navbarmenu /> */}
        <NavBar />
        <HomePage />
        {/* <About /> */}
        <Projects />
        <Contact />
        <FooterComp />
      </div>
    </>
  );
}
