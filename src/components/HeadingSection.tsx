import { motion } from "framer-motion";

type Props = {
  text: string;
};

const HeadingSection = ({ text }: Props) => {
  return (
    <div className="relative">
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="uppercase w-full text-white text-4xl py-6 mb-12"
      >
        {text}
      </motion.h3>
      <motion.span
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute h-px w-full bottom-0 bg-white"
      ></motion.span>
    </div>
  );
};

export { HeadingSection };
