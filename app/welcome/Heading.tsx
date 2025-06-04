import { springValues } from "./TiltCard";
import { motion } from "motion/react";

const Heading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "spring", delay: 0.2, ...springValues }}
      className="mt-5  text-5xl font-semibold"
    >
      Boost your Productivity with Creative AIs
    </motion.h1>
  );
};
export default Heading;
