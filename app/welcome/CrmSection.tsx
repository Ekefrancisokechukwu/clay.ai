import SectionMiniHeading from "components/SectionMiniHeading";
import crm1 from "assets/images/crm-1.avif";
import crm2 from "assets/images/crm-2.avif";

import { motion } from "motion/react";
import { springValues } from "./TiltCard";

const lists = [
  "Engagement tracking",
  "Send on behalf of clients",
  "Open & click tracking",
];

const CrmSection = () => {
  return (
    <section className="py-[5rem] px-5 ">
      <div className="wrapper flex  lg:flex-row flex-col gap-y-[4rem] items-center justify-between">
        <motion.div
          initial={{ opacity: 0, translateX: "-50%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{
            once: true,
            amount: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            ...springValues,
          }}
          className="max-w-[35rem]"
        >
          <div>
            <SectionMiniHeading>CRM Design</SectionMiniHeading>
          </div>
          <h2 className="font-semibold text-5xl mt-3">
            Designed to Take the Pain Out of Contacts
          </h2>
          <p className="mt-5 paragraphy">
            Organize your team’s media lists in one tool and see how each
            contact engages with your campaigns.
          </p>

          <ul className="mt-5 space-y-1.5">
            {lists.map((list, i) => (
              <li key={i} className="flex items-center gap-x-3 text-gray-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-icon lucide-check text-blue-4"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {list}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{
              once: true,
              amount: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 1.1,
              type: "spring",
              ...springValues,
            }}
            className="sm:w-[20rem] z-10 absolute top-[5rem] w-[13rem] sm:left-[-4rem] left-[-1.4rem] "
          >
            <img
              src={crm1}
              alt="CRM assets 1"
              className="  object-cover w-full "
            />
          </motion.div>

          <motion.div
            initial={{ translateX: 70, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              delay: 0.7,
              ...springValues,
            }}
            className="sm:w-[22rem] w-[17rem]"
          >
            <img
              src={crm2}
              alt="CRM assets 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default CrmSection;
