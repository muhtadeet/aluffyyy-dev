import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Phone from "../Phone";
import AboutText from "../AboutText";

const Card3d = () => {
  return (
    <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 52.5;
const HALF_ROTATION_RANGE = 52.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-10">
      <AboutText />
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        className="relative"
        data-cursor-color="#BC97FC"
      >
        <Phone />
      </motion.div>
    </div>
  );
};

export default Card3d;
