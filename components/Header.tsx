import { Link } from "react-router";
import { Button } from "./Button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navs = [
  { label: "Home", link: "#" },
  { label: "Pages", link: "#" },
  { label: "Resources", link: "#" },
  { label: "Contact", link: "#" },
];

const Header = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <header className="bg-primary  z-40 border-b border-gray-500/40 text-white fixed  w-full top-0 left-0 py-2.5 px-5">
      <div className="flex items-center justify-between">
        <h5>
          <Link
            to={"#"}
            className="inline-block  text-xl font-semibold bg-clip-text bg-gradient-to-r text-transparent from-white to-gray-400/50"
          >
            Clay.ai
          </Link>
        </h5>

        <nav className="md:flex hidden items-center gap-x-5 ">
          <ul className="flex items-center gap-x-5">
            {navs.map((nav, i) => (
              <li key={i}>
                <Link
                  to={"#"}
                  className="inline-flex hover:text-white transition-colors text-gray-400"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button>Get the Templates</Button>
        </nav>
        <button onClick={() => setIsOpen(!open)} className="md:hidden block">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Responsive Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="absolute top-[100%] border-b border-gray-500/50 overflow-hidden left-0 p-5 w-full  bg-primary z-50"
          >
            <ul onClick={() => setIsOpen(false)}>
              {navs.map((nav, i) => (
                <li key={i} className="py-3.5">
                  {nav.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
