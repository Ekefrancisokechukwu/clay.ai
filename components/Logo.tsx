import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

interface logoProps {
  className?: string;
}

export const Logo = ({ className }: logoProps) => {
  return (
    <h5>
      <Link
        to={"#"}
        className={twMerge(
          "inline-block  sm:text-[10rem] text-[5rem] cursor-default font-semibold bg-clip-text bg-gradient-to-r text-transparent from-white to-gray-400/50",
          className
        )}
      >
        Clay.ai
      </Link>
    </h5>
  );
};
