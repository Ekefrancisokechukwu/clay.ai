import { Button } from "components/Button";
import { motion } from "motion/react";

import { springValues, TiltCard } from "./TiltCard";
import Heading from "./Heading";
import SectionMiniHeading from "components/SectionMiniHeading";

export const Hero = () => {
  return (
    <section className="pt-[8rem] px-5 pb-[3rem] relative overflow-hidden">
      <div className="w-full rounded-full h-[10rem] top-[-5rem]  absolute blur-2xl  bg-radial-[at_50%_75%] from-sky-200/40 via-blue-400/45 to-indigo-900 to-90%" />
      <div className="wrapper flex lg:flex-row flex-col gap-y-14 justify-between items-center">
        <div className="max-w-[30rem]">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", ...springValues }}
          >
            <SectionMiniHeading>
              <span className="gradient-blue bg-gradient-blue rounded-full px-2 py-1 text-xs">
                New
              </span>
              Top selling on Framer
            </SectionMiniHeading>
          </motion.div>
          <Heading
            text="Boost your Productivity with Creative AIs
"
          />
          <motion.p
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.4, ...springValues }}
            className="mt-5 paragraphy"
          >
            Specialising in crafting visually stunning and highly functional
            user interfaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.6, ...springValues }}
            className="mt-7 flex items-center gap-x-3.5"
          >
            <Button>Get Started</Button>
            <Button variants={"white"}>Contact us</Button>
          </motion.div>
        </div>
        <div>
          <TiltCard />
        </div>
      </div>
    </section>
  );
};
