import { Logo } from "components/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pt-[3rem]">
      <div className="pb-10 text-center ">
        <Logo className="text-center font-5xl" />
      </div>
      <div className="text-gray-500 wrapper py-4 text-sm text-center">
        Designed by{" "}
        <Link
          to={"https://pentaclay.com/"}
          target="_blank"
          className="text-gray-200 font-semibold"
        >
          pentaclay
        </Link>{" "}
        | Developer{" "}
        <Link
          to={"https://ekefrancisokechukwu.vercel.app/"}
          target="_blank"
          className="text-gray-200 font-semibold"
        >
          Eke Francis Okechukwu
        </Link>{" "}
        — Copyright 2025
      </div>
    </footer>
  );
};
export default Footer;
