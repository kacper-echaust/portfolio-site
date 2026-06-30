import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};

const AnimationDiv = ({ className, children }: Props) => {
  const [randomCoords] = useState(() => ({
    x: Math.round(Math.random() * 300),
    y: Math.round(Math.random() * 300),
  }));
  return (
    <motion.div
      initial={{ opacity: 0, x: randomCoords.x, y: randomCoords.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { AnimationDiv };
