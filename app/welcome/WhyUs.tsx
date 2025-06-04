import SectionMiniHeading from "components/SectionMiniHeading";
import us1 from "assets/images/us-1.avif";
import us2 from "assets/images/us-2.avif";
import { motion } from "motion/react";
import { springValues } from "./TiltCard";

const variantChildFirst = {
  onHover: { rotateY: "-15deg", skewY: -5 },
};

const variantChildSecond = {
  onHover: { rotateX: "15deg", skewY: 5 },
};

const WhyUs = () => {
  return (
    <section className="px-5 py-[3rem]">
      <div className="wrapper">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ type: "spring", ...springValues }}
          className="text-center  max-w-[40rem] mx-auto"
        >
          <SectionMiniHeading>Why Choose ClayAI</SectionMiniHeading>
          <h2 className="heading mt-2">Your Ultimate AI Solution</h2>
          <p className="paragraphy mt-3 ">
            his customization enhances the utility and adaptability of ClayAI,
            making it a versatile tool across various professional and creative
            contexts.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div className="mt-[2rem]  grid  sm:grid-cols-6 grid-cols-1 auto-rows-[minmax(5em,_1fr)] gap-5">
          <div className="border z-10 relative overflow-hidden border-gray-600/60 rounded-lg p-8 col-span-3 row-span-2">
            <div
              style={{
                background:
                  "radial-gradient(50% 25% at 50% 0%, rgba(0, 145, 189, .1) 0%, var(--primary, rgb(2, 8, 22)) 100%)",
              }}
              className="size-[80%] absolute top-[0] -z-10 blur-md rounded-3xl  "
            ></div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wallet-icon lucide-wallet"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path
                  d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
                  className="text-blue-3"
                />
              </svg>
            </div>

            <h5 className="font-semibold text-lg mt-2">Budget Friendly</h5>
            <p className="text-gray-500 mt-3">
              No in-app analytics. No middle servers. Your prompt are sent
              directly to budget.
            </p>
          </div>

          <motion.div
            variants={{ onhover: {} }}
            whileHover={"onHover"}
            className="border  perspective-midrange  overflow-hidden relative border-gray-600/60   rounded-lg p-8 col-span-3 sm:col-start-4 md:row-span-5 row-span-4"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
              >
                <path d="M12 16v5" />
                <path d="M16 14v7" />
                <path d="M20 10v11" />
                <path
                  className="text-blue-3"
                  d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
                />
                <path d="M4 18v3" />
                <path d="M8 14v7" />
              </svg>
            </div>

            <h5 className="font-semibold text-lg mt-2">
              Native, Fast & Powerful
            </h5>
            <p className="text-gray-500 mt-3">
              Offers a library of prompts that you can leverage to get the most
              out of the AI assistance.
            </p>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              variants={variantChildFirst}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", ...springValues }}
              // whileHover={{ rotateY: "-15deg", skewY: -5 }}
              className="absolute right-0 bottom-0   rotate-y-[(-4.67669deg)] lg:w-[25rem] md:w-[20rem] w-[15rem] "
            >
              <img src={us1} alt="use asset" className="w-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={{ onhover: {} }}
            whileHover={"onHover"}
            className="border overflow-hidden relative border-gray-600/60   rounded-lg p-8 col-span-3 row-start-3 md:row-span-5 row-span-4"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users-icon lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" className="text-blue-3" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" className="text-blue-3" />
              </svg>
            </div>

            <h5 className="font-semibold text-lg mt-2">
              Native, Fast & Powerful
            </h5>
            <p className="text-gray-500 mt-3">
              Offers a library of prompts that you can leverage to get the most
              out of the AI assistance.
            </p>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              variants={variantChildSecond}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", ...springValues }}
              className="absolute right-0 bottom-0  lg:w-[25rem] md:w-[20rem] w-[15rem]"
            >
              <img src={us2} alt="use asset" className="w-full object-cover" />
            </motion.div>
          </motion.div>

          <div className="border border-gray-600/60   rounded-lg p-8 col-span-3 row-span-2 sm:col-start-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-kanban-icon lucide-square-kanban"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 7v7" className="text-blue-3" />
                <path d="M12 7v4" className="text-blue-3" />
                <path d="M16 7v9" className="text-blue-3" />
              </svg>
            </div>

            <h5 className="font-semibold text-lg mt-2">Budget Friendly</h5>
            <p className="text-gray-500 mt-3">
              No in-app analytics. No middle servers. Your prompt are sent
              directly to budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
