import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import React, { useRef } from "react";

export const HoverProject = () => {
  return (
    <section className="bg-neutral-950 p-4 z-[99999] md:p-8">
      <div className="mx-auto max-w-5xl z-[99999]">
        <Link
          heading="Batash"
          subheading="Native Android Weather App"
          imgSrc="/Batash.jpg"
          href="https://github.com/aluffyyyy/Batash"
        />
        <Link
          heading="Doust"
          subheading="Native Android Gemini AI Chat-bot App"
          imgSrc="/Doust.jpg"
          href="https://github.com/aluffyy/Doust"
        />
        <Link
          heading="Contacts-KMM"
          subheading="Multi-Platform App using Kotlin"
          imgSrc="/ContactsKMM.jpg"
          href="https://github.com/aluffyy/ContactsComposeMaterial3-KMM"
        />
        <Link
          heading="Shokhi"
          subheading="Cross Platform Gemini AI Chat-bot App using Flutter"
          imgSrc="/Shokhi.jpg"
          href="https://github.com/aluffyy/Shokhi"
        />
        <Link
          heading="FlutterBatash"
          subheading="Cross Platform Weather App using Flutter"
          imgSrc="/FlutterBatash.jpg"
          href="https://github.com/aluffyy/flutterBatash"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between z-[99999999] font-ubuntu border-b-2 border-white transition-all ease-in-out duration-500 hover:border-[#6A43C4] md:py-8"
    >
      <div className="z-[99999]">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-white transition-all ease-in-out duration-500 group-hover:text-[#6A43C4] md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block z-[99999]"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative block mt-2 text-base text-white transition-all ease-in-out group-hover:text-[#6A43C4] z-[99999]">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "0%",
          translateY: "-50%",
          z: 99999,
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute h-24 w-32 rounded-lg object-cover md:h-60 z-[99999999] md:w-28 ml-20"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-[99999] p-4"
      >
        <MoveRight className="text-5xl text-[#6A43C4] z-[99999]" />
      </motion.div>
    </motion.a>
  );
};
