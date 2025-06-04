import { useRef, useState, type MouseEventHandler } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import hero1 from "assets/images/hero-1.avif";
import hero2 from "assets/images/hero-2.avif";
import hero3 from "assets/images/hero-3.avif";

export const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export const TiltCard = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const { left, top, width, height } = rect;
    const offsetX = e.clientX - left - width / 2;
    const offsetY = e.clientY - top - height / 2;

    const rotationX = (offsetY / (height / 2)) * -10;
    const rotationY = (offsetX / (width / 2)) * 10;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - left);
    y.set(e.clientY - top);
  }

  function handleMouseEnter() {
    scale.set(1.05);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      className="relative perspective-midrange"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
        }}
        className="transform-3d"
      >
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: "spring", delay: 1, ...springValues }}
          className="min-[500px]:w-[14.5rem] w-[9rem] absolute top-[3rem] z-10 min-[500px]:right-[-3.5rem] right-[2.5rem]"
        >
          <img src={hero3} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: "spring", delay: 1, ...springValues }}
          className="min-[500px]:w-[20rem] w-[15rem] absolute bottom-[3rem] z-20 min-[500px]:left-[-3.5rem] left-[-2rem]"
        >
          <img src={hero2} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div></div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring", delay: 0.8, ...springValues }}
          className=" min-[500px]:w-[25rem] w-[18rem]"
        >
          <img
            src={hero1}
            alt="hero-assest-1"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
