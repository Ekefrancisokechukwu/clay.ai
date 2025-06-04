import SectionMiniHeading from "components/SectionMiniHeading";
import test1 from "assets/images/testmo-1.avif";
import test2 from "assets/images/testmo-2.avif";
import test3 from "assets/images/testmo-3.avif";
import test4 from "assets/images/testmo-4.avif";
import test5 from "assets/images/testmo-5.avif";
import { motion } from "motion/react";
import React from "react";

const testimonials = [
  {
    comment:
      "My company provides critical software services for customers such as Medium, Spotify, Google, Spotify, Coinbase, and many others.",
    img: test1,
    name: "Floyd Miles",
    role: "Business Strategist",
  },
  {
    comment:
      "“It’s simple. ClayAI makes me more productive. Whether I write copy, tasks, code or anything in between I’m faster and make fewer mistakes. It’s one of those things that when missing. My company provides critical software services for customers such as Medium, Spotify, Google, Spotify, Coinbase, and many others. I liked the idea of inline triggers.",
    img: test2,
    name: "Devon Lane",
    role: "Business Analyser",
  },
  {
    comment:
      "I have been using Clay for quite some time now and been absolutely loving every part of the experience. Super intuitive!  leave my current task.",
    img: test3,
    name: "Jerome Bell",
    role: "Interaction Designer",
  },
  {
    comment:
      "I bought ClayAI shortly after its release as I am a sucker for beautiful native apps. I liked the idea of inline triggers that let's you do things like generating.",
    img: test4,
    name: "Cody Fisher",
    role: "UX/UI Designer",
  },
  {
    comment:
      "Super intuitive! Its release as I am a sucker for beautiful native apps. I liked the idea of inline triggers that let's you do things like generating.",
    img: test5,
    name: "Tristram Jones",
    role: "Founder",
  },
];

const loopedCards = [...testimonials, ...testimonials, ...testimonials];

const Testimonial = () => {
  return (
    <section className="py-[3rem] z-10 px-5 relative overflow-hidden">
      <div
        style={{
          background:
            "radial-gradient(circle,rgba(85, 225, 221, 1) 6%, rgba(0, 100, 158, 1) 28%, rgba(1, 52, 88, 1) 98%, rgba(2, 8, 22, 1) 100%)",
        }}
        className="bottom-[-5rem] -z-10 blur-xl   rounded-full absolute left-[-25rem]  h-[30rem] w-[70%]"
      />
      <div className="wrapper z-10">
        <div className="text-center">
          <SectionMiniHeading>Testimonial</SectionMiniHeading>
          <h2 className="heading mt-4">
            Professionals use ClayAI to 10x Their Productivity
          </h2>
        </div>

        {/* GRID */}

        <div className="h-[40rem] overflow-hidden  mt-[3rem] grid md:grid-cols-3 min-[525px]:grid-cols-2 grid-cols-1 gap-x-[2rem]  mask-y-from-70% mask-y-to-100%">
          <motion.div
            animate={{ y: ["0", "-33.33%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-col gap-y-[2rem] pb-[3rem]"
          >
            {loopedCards.map((test, i) => (
              <article
                key={i}
                className="w-full bg-white text-neutral-900 rounded-lg p-5"
              >
                <p>{test.comment}</p>
                {/* rating */}

                <div className="flex items-center mt-5">
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <svg
                      key={rate}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star-icon lucide-star fill-yellow-700  text-yellow-700"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>

                {/*  profile */}
                <div className="mt-[1rem] flex items-center gap-x-3">
                  <div className="size-[2rem] rounded-full bg-neutral-200 ">
                    <img
                      src={test.img}
                      alt="assest"
                      className="size-full object-cover rounded-full"
                    />
                  </div>
                  <div className="leading-5">
                    <span className="block  text-sm font-medium">
                      {test.name}
                    </span>
                    <span className="text-sm ">{test.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: "-33.33%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className=" min-[525px]:flex  hidden flex-col gap-y-[2rem] pb-[3rem]"
          >
            {loopedCards.map((test, i) => (
              <article
                key={i}
                className="w-full bg-white text-neutral-900 rounded-lg p-5"
              >
                <p>{test.comment}</p>
                {/* rating */}

                <div className="flex items-center mt-5">
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <svg
                      key={rate}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star-icon lucide-star fill-yellow-700  text-yellow-700"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>

                {/*  profile */}
                <div className="mt-[1rem] flex items-center gap-x-3">
                  <div className="size-[2rem] rounded-full bg-neutral-200 ">
                    <img
                      src={test.img}
                      alt="assest"
                      className="size-full object-cover rounded-full"
                    />
                  </div>
                  <div className="leading-5">
                    <span className="block  text-sm font-medium">
                      {test.name}
                    </span>
                    <span className="text-sm ">{test.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
          <motion.div
            animate={{ y: ["0", "-33.33%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="md:flex flex-col gap-y-[2rem] pb-[3rem]  "
          >
            {loopedCards.map((test, i) => (
              <article
                key={i}
                className="w-full bg-white text-neutral-900 rounded-lg p-5"
              >
                <p>{test.comment}</p>
                {/* rating */}

                <div className="flex items-center mt-5">
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <svg
                      key={rate}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star-icon lucide-star fill-yellow-700  text-yellow-700"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                  ))}
                </div>

                {/*  profile */}
                <div className="mt-[1rem] flex items-center gap-x-3">
                  <div className="size-[2rem] rounded-full bg-neutral-200 ">
                    <img
                      src={test.img}
                      alt="assest"
                      className="size-full object-cover rounded-full"
                    />
                  </div>
                  <div className="leading-5">
                    <span className="block  text-sm font-medium">
                      {test.name}
                    </span>
                    <span className="text-sm ">{test.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
