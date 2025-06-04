import cam1 from "assets/images/cam-1.avif";
import cam2 from "assets/images/cam-2.avif";
import cam3 from "assets/images/cam-3.avif";
import SectionMiniHeading from "components/SectionMiniHeading";
import { motion } from "motion/react";
import { springValues } from "./TiltCard";

const CampaignSection = () => {
  const starggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const starggerChild = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", ...springValues } },
  };

  return (
    <section className="px-5 py-[4rem]">
      <div className="wrapper flex items-center gap-y-10 justify-between lg:flex-row flex-col-reverse">
        <div className="relative">
          <motion.div
            viewport={{
              once: true,
              amount: 0,
            }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5, ...springValues }}
            className="absolute z-10 top-6  min-[500px]:w-[15rem] w-[12em] min-[500px]:right-[-5rem] right-[-3rem]"
          >
            <img
              src={cam1}
              alt="Campaign asset"
              className="w-full object-cover"
            />{" "}
          </motion.div>
          <motion.div
            viewport={{
              once: true,
              amount: 0,
            }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5, ...springValues }}
            className="absolute z-10 bottom-[2rem]  min-[500px]:w-[18rem] w-[12em]  min-[500px]:left-[-4rem] left-[-2rem]"
          >
            <img
              src={cam3}
              alt="Campaign asset"
              className="w-full object-cover"
            />{" "}
          </motion.div>

          <motion.div
            viewport={{
              once: true,
              amount: 0,
            }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2, ...springValues }}
            className="sm:w-[20rem] w-[17rem]"
          >
            <img
              src={cam2}
              alt="CRM assets 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="max-w-[32rem]">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0,
            }}
            transition={{ type: "spring", ...springValues }}
            className="space-y-3"
          >
            <SectionMiniHeading>Email Campaigns</SectionMiniHeading>
            <h2 className="heading">
              Email Campaigns & Pitching with a Record
            </h2>
          </motion.div>

          <motion.div
            variants={starggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0,
            }}
            className="mt-7 flex sm:flex-row flex-col  items-center gap-x-4 gap-y-3"
          >
            <motion.div variants={starggerChild}>
              <span className="font-semibold text-blue-4 text-2xl">#1</span>
              <h5 className="font-semibold text-xl">in the Market</h5>
              <p className="text-lg mt-3 text-gray-500">
                Real-life examples of stories built, & shared by some of the
                best PR teams.
              </p>
            </motion.div>
            <motion.div variants={starggerChild}>
              <span className="font-semibold text-blue-4 text-2xl">450+</span>
              <h5 className="font-semibold text-xl">Talented PR Teams</h5>
              <p className="text-lg mt-3 text-gray-500">
                Take the stress out of contact management with a dedicated
                outreach CRM.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
