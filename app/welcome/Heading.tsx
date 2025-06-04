import { springValues } from "./TiltCard";
import { motion } from "motion/react";

const Heading = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "spring", delay: 0.2, ...springValues }}
      className="mt-5  sm:text-5xl text-3xl font-semibold"
    >
      {text}
    </motion.h1>
  );
};
export default Heading;
