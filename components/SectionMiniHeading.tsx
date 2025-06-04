import type { ReactNode } from "react";

interface SectionMiniHeadingProps {
  children: ReactNode;
}

const SectionMiniHeading = ({ children }: SectionMiniHeadingProps) => {
  return (
    <div className="inline-flex text-sm items-center gap-x-1 border border-gray-600 p-2 rounded-full w-max  bg-gradient-to-r from-white/20 to-white/0">
      {children}
    </div>
  );
};

export default SectionMiniHeading;
