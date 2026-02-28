import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};
export { Container };
