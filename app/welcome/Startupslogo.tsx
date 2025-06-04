import logo1 from "assets/icons/com-1.avif";
import logo2 from "assets/icons/com-2.avif";
import logo3 from "assets/icons/com-3.avif";
import logo4 from "assets/icons/com-4.avif";
import logo5 from "assets/icons/com-5.avif";
import { motion } from "motion/react";
import React from "react";

const logos = [
  { logo: logo1 },
  { logo: logo2 },
  { logo: logo3 },
  { logo: logo4 },
  { logo: logo5 },
];




const Startupslogo = () => {
  return (
    <section className="px-5 pt-[3rem] pb-[3rem] overflow-x-clip">
      <div className="max-w-[62rem]  mx-auto ">
        <h2 className="text-center text-[#73d0b9] text-xl font-semibold">
          Trusted by 67+ startups and agencies
        </h2>

        <div className="mt-[2rem] w-full flex    overflow-hidden mask-x-from-70% mask-x-to-100% ">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none items-center gap-x-24 pr-[5rem]"
          >
            {Array.from({ length: 2 }).map((_, i) => {
              return (
                <React.Fragment key={i}>
                  {logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo.logo}
                      alt="startup logos"
                      className="w-[8rem]"
                    />
                  ))}
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Startupslogo;
