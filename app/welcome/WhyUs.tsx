import SectionMiniHeading from "components/SectionMiniHeading";
import us1 from "assets/images/us-1.avif";
import us2 from "assets/images/us-2.avif";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const variantChildFirst = {
  onHover: { rotateY: "-15deg", skewY: -5 },
};

const variantChildSecond = {
  onHover: { rotateX: "15deg", skewY: 5 },
};
const springValues = {
  stiffness: 300,
  damping: 30,
  mass: 1,
};

const WhyUs = () => {
  return (
    <section className="px-5 py-[3rem]">
      <div className="wrapper">
        {/* Bento Grid */}

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

        <div className="mt-[2rem]  grid  sm:grid-cols-6 grid-cols-1 auto-rows-[minmax(5em,_1fr)] gap-5">
          <GridItemWrapper className="col-span-3 row-span-2">
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
          </GridItemWrapper>

          <GridItemWrapper className=" perspective-midrange  overflow-hidden    col-span-3 sm:col-start-4 md:row-span-5 row-span-4">
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
          </GridItemWrapper>

          <GridItemWrapper className=" col-span-3 row-start-3 md:row-span-5 row-span-4">
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
          </GridItemWrapper>

          <GridItemWrapper className=" col-span-3 row-span-2 sm:col-start-4">
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
          </GridItemWrapper>
        </div>
      </div>
    </section>
  );
};

interface GridItemWrapperProps {
  children: React.ReactNode;
  className: string;
}

const GridItemWrapper = ({ children, className }: GridItemWrapperProps) => {
  const glowBorderRef = useRef<HTMLDivElement | null>(null);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springX = useSpring(rawX, springValues);
  const springY = useSpring(rawY, springValues);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${springX}px ${springY}px, black, transparent)`;

  useEffect(() => {
    const glowElement = glowBorderRef.current as HTMLDivElement;

    if (!glowBorderRef) return;

    const updateMousePosition = (e: MouseEvent) => {
      const { y, x } = e;

      const rect = glowElement.getBoundingClientRect();

      rawX.set(x - rect.x);
      rawY.set(y - rect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      variants={{ onhover: {} }}
      whileHover={"onHover"}
      className={twMerge(
        "border z-10 relative overflow-hidden border-gray-600/60 rounded-lg p-8 ",
        className
      )}
    >
      <motion.div
        ref={glowBorderRef}
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
        className="absolute w-full border-2 border-blue-4 inset-0 rounded-lg"
      />
      {children}
    </motion.div>
  );
};

export default WhyUs;
