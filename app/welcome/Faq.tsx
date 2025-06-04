import SectionMiniHeading from "components/SectionMiniHeading";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { springValues } from "./TiltCard";

const faqs = [
  {
    heading: "How do I install ClayAI?",
    content:
      "All of our prices are exclusive of VAT. Depending on your location and business, VAT will be included in the final invoice and charge.",
  },
  {
    heading: "Is VAT included in the prices?",
    content:
      "All of our prices are exclusive of VAT. Depending on your location and business, VAT will be included in the final invoice and charge.",
  },
  {
    heading: "Can I add more users to a plan?",
    content:
      "Sure. There’s no limit on the number of users you can add to a license. The cost of each additional user depends on the plan you’re on.",
  },
  {
    heading: "Can I share my login with a colleague?",
    content:
      "No – it causes unexpected behaviour in the app, messes up team logging and can compromise security. It's also against our terms of use.",
  },
  {
    heading: "Do I get an invoice for ClayAI?",
    content:
      "Yes. For every charge, you’ll get an invoice. You can manage your billing and account information inside the platform.",
  },
];

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 70 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, type: "spring", ...springValues },
    },
  };

  return (
    <section className="px-5 py-[4rem]">
      <div className="wrapper flex  md:flex-row flex-col gap-y-8 gap-x-14 md:items-start items-center justify-between">
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", ...springValues }}
          className="md:text-start !text-center"
        >
          <SectionMiniHeading>FAQs</SectionMiniHeading>
          <div className="mt-6" />
          <h2 className="heading ">Frequently Asked Questions</h2>
          <p className="paragraphy mt-3">
            In the digital age, your voice on social media is your brand's
            heartbeat.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-grow flex flex-col gap-y-4 w-full"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              viewport={{ once: true, amount: 0.5 }}
              variants={childVariants}
              className="border border-gray-500/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev === i ? null : i))
                }
                className="font-semibold sm:text-lg text-base px-4 py-2 flex items-center justify-between w-full"
              >
                {faq.heading}
                <div className="p-2 bg-gray-600/20 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-plus-icon lucide-plus transition duration-300 ease-out ${
                      selectedIndex === i ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {selectedIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    <p className="text-gray-500 px-4 pb-3">{faq.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Faqs;
