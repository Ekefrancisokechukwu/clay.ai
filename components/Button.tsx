interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variants?: "default" | "white";
}

export const Button = ({
  children,
  variants = "default",
  ...props
}: ButtonProps) => {
  // const buttonvariants = {
  //   default:""
  // }
  return (
    <button
      className={`py-2 font-medium text-sm  px-5 h-[35px] button rounded-md ${
        variants === "default"
          ? "bg-gradient-blue text-white "
          : "bg-white text-black"
      } `}
      {...props}
    >
      {children}
    </button>
  );
};
