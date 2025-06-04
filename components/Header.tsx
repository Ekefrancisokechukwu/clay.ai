import { Link } from "react-router";
import { Button } from "./Button";

const navs = [
  { label: "Home", link: "#" },
  { label: "Pages", link: "#" },
  { label: "Resources", link: "#" },
  { label: "Contact", link: "#" },
];

const Header = () => {
  return (
    <header className="bg-primary z-40 border-b border-gray-500/40 text-white sticky top-0 left-0 py-2.5 px-5">
      <div className="flex items-center justify-between">
        <h5>
          <Link
            to={"#"}
            className="inline-block  text-xl font-semibold bg-clip-text bg-gradient-to-r text-transparent from-white to-gray-400/50"
          >
            Clay.ai
          </Link>
        </h5>

        <nav className="flex items-center gap-x-5">
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
      </div>
    </header>
  );
};
export default Header;
