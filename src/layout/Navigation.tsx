import { navItems } from "../data";

const Navigation = () => {
  return (
    <nav className="pointer-events-auto fixed inset-x-0 top-4 z-999999 px-4 sm:px-8 hidden lg:block">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-black/70 px-5 py-3 text-sm text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <a
          href="#home"
          className="font-semibold uppercase tracking-[0.35em] text-white transition hover:text-primaryOrange"
        >
          KACPER
        </a>

        <div className="flex flex-wrap items-center justify-center gap-24">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/70 text-lg uppercase transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primaryOrange after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
