import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return <div className={` mx-8 lg:mx-36 p-2 ${className}`}>{children}</div>;
};
export { Container };
