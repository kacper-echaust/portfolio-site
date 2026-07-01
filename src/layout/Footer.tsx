import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-black pt-64 mt-12"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mx-auto max-w-7xl md:px-6 py-24"
      >
        <h2 className="relative text-center text-5xl md:text-6xl lg:text-8xl font-black uppercase  text-white">
          Zbudujmy coś razem
          <div className=" pointer-events-none absolute text-[48px] md:text-6xl lg:text-8xl uppercase text-white/8 text-center w-full top-5 font-stretch-expanded">
            FRONTEND
          </div>
        </h2>

        <div className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-lg text-neutral-400">
            Masz pomysł, projekt lub ofertę pracy?
          </p>
          <p className="text-lg text-neutral-400">
            Chętnie się z Tobą skontaktuję.
          </p>

          <a
            href="mailto:k9echaust@gmail.com"
            className="mt-8 inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Napisz!
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 Kacper Echaust. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kacper-echaust"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kacper-echaust-b13749286/"
              className="hover:text-white"
            >
              LinkedIn
            </a>

            <a href="mailto:k9echaust@gmail.com" className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export { Footer };
