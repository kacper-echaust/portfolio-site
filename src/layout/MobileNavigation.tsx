import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pointer-events-auto fixed inset-x-0 top-4 z-99999 px-4 sm:px-8 lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <a
          href="#home"
          className="font-semibold uppercase tracking-[0.35em] text-white transition hover:text-primaryOrange"
          onClick={() => setIsOpen(false)}
        >
          KACPER
        </a>
        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-primaryOrange hover:text-primaryOrange"
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      <div
        className={`fixed inset-x-6 top-22 z-40 overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-300 ${
          isOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-center text-base uppercase tracking-[0.35em] text-white transition hover:border-primaryOrange hover:text-primaryOrange"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { MobileNavigation };
