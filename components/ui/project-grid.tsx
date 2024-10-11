"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ProjectGrid() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] lg:mt-[70rem] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold font-ubuntu text-neutral-700 dark:text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base font-lato"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-5 font-ubuntu py-3 text-sm rounded-full font-bold bg-[#BC97FC] text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 font-lato text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-80 w-full rounded-lg object-contain"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold font-ubuntu text-white text-center md:text-left text-2xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white font-lato text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Native Android Weather App",
    title: "Batash",
    src: "/Batash.jpg",
    ctaText: "GitHub Link",
    ctaLink: "https://github.com/aluffyy/Batash",
    content: () => {
      return (
        <p>
          Batash: Unwind the Weather, Crafted in Kotlin Batash isn't just
          another weather app. It's a breath of fresh air, built with the
          elegance and precision of Kotlin, a modern programming language.
          Forget clunky interfaces and generic forecasts. Batash delivers a
          sleek, intuitive experience that puts the weather at your fingertips
          in a way that feels personal and delightful.
        </p>
      );
    },
  },
  {
    description: "Cross Platform Gemini AI Chat-bot App using Flutter",
    title: "Shokhi",
    src: "/Shokhi.jpg",
    ctaText: "GitHub Link",
    ctaLink: "https://github.com/aluffyy/Shokhi",
    content: () => {
      return (
        <p>
          Shokhi: Your AI Friend in Flutter (Material 3 Design)
          <br />
          <br />
          Shokhi (meaning "friend" in Bangla) is a mobile application built with
          Flutter and utilizes the Gemini Pro API to provide users with an
          interactive and informative AI experience. Embracing a minimal
          Material 3 design pattern, Shokhi offers a clean and user-friendly
          interface for engaging with AI.
        </p>
      );
    },
  },
  {
    description: "Native Android Gemini AI Chat-bot App",
    title: "Doust",
    src: "/Doust.jpg",
    ctaText: "GitHub Link",
    ctaLink: "https://github.com/aluffyy/Doust",
    content: () => {
      return (
        <p>
          Doust: Unleash Your Creativity with Gemini AI
          <br />
          <br />
          Well I had a friend who used to say "Doust" to his friends. Doust is
          an Android app powered by the cutting-edge capabilities of Gemini Pro
          and Gemini Vision AI models. It allows you to fuse your imagination
          with powerful AI models to create unique and captivating outputs.
        </p>
      );
    },
  },

  
  {
    description: "Cross Platform Social Media App Using Flutter",
    title: "Hashi",
    src: "/Hashi.jpg",
    ctaText: "GitHub Link",
    ctaLink: "https://github.com/aluffyy/Hashi",
    content: () => {
      return (
        <p>
          Hashi is a full-fledged social media app built with Flutter, designed to foster connections and create a vibrant online community. We're in active development, constantly striving to improve the user experience and warmly welcome contributions from talented developers!
        </p>
      );
    },
  },
  {
    description: "Native Android Dictionary App Using Flutter",
    title: "Ortho",
    src: "/Ortho.jpg",
    ctaText: "GitHub Link",
    ctaLink: "https://github.com/aluffyy/ortho",
    content: () => {
      return (
        <p>
          Ortho is a modern, beautifully designed dictionary app built with Kotlin and Jetpack Compose. It leverages the Free Dictionary API, follows the MVVM architecture pattern, and uses Dagger Hilt for dependency injection. Retrofit is used for network requests, ensuring efficient and reliable data fetching.
        </p>
      );
    },
  },
  {
    description: "Kotlin MultiPlatform Game Using Compose and Material 3",
    title: "2048",
    src: "/2048.jpg",
    ctaText: "GitHub Link",
    ctaLink: "https://github.com/aluffyy/2048-kotlin-compose-material3",
    content: () => {
      return (
        <p>
          This Kotlin multiplatform mobile game brings the classic 2048 puzzle to life with a clean and modern twist using Jetpack Compose and Material 3 design.
        </p>
      );
    },
  },
];
