import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Logo from "../components/Logo";
import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
import FramerMgBtn from "./FramerMgBtn";
import { AnimatePresence } from "framer-motion";
// import Menu from "./Menu.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

export default function App() {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const Menu = dynamic(
    () => {
      return import("./Menu");
    },
    { ssr: false }
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 10,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            burger.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [isActive]);

  return (
    <Navbar
      ref={header}
      id="home"
      className="bg-transparent"
      isBlurred="false"
      maxWidth="2xl"
      position="static"
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <div className="pr-5 font-ubuntu font-semibold">
        <NavbarContent className="hidden sm:flex gap-10">
          {/* <NavbarItem>
            <FramerMgBtn>
              <Link
                to=""
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                onClick={() => scroll.scrollToTop()}
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </FramerMgBtn>
          </NavbarItem> */}

          <NavbarItem>
            <FramerMgBtn>
              <Link
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                to="about"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </FramerMgBtn>
          </NavbarItem>
          <NavbarItem>
            <FramerMgBtn>
              <Link
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                to="projects"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </FramerMgBtn>
          </NavbarItem>
          <NavbarItem>
            <FramerMgBtn>
              <Link
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </FramerMgBtn>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
      </div>

      <div>
        <div className="pt-16 px-10 md:px-14 md:pb-14 md:pt-7 fixed right-0 z-30">
          <FramerMgBtn>
            <div
              ref={burger}
              onClick={() => {
                setIsMenuActive(!isMenuActive);
              }}
              className="w-[100px] h-[100px] rounded-full scale-0 transition-all ease-in-out hover:bg-light-blue-600 bg-black border-2 border-[#555555] cursor-pointer flex items-center justify-center"
            >
              <div
                className={`${"burger"} ${isMenuActive ? "burgerActive" : ""}`}
              ></div>
            </div>
          </FramerMgBtn>
        </div>
      </div>
      <AnimatePresence mode="wait">{isMenuActive && <Menu />}</AnimatePresence>
    </Navbar>
  );
}
