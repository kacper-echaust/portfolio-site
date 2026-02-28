import { useEffect, useState } from "react";

const Header = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "TAILWINDCSS",
    "JAVASCRIPT",
    "REACT",
    "TYPESCRIPT",
    "REACT-TESTING-LIBRARY",
    "VITEST",
    "REACT-HOOK-FORM",
    "RWD",
    "TRELLO",
    "CONFLUENCE",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <header className="min-h-screen text-white relative flex items-center  ">
      {/* Text */}
      <div className="text-4xl font-light md:text-5xl lg:text-6xl w-full">
        <h1 className="mb-6">Kacper Echaust</h1>
        <h1 className="mb-6">Junior Frontend Developer</h1>
        {/* Word cycler */}
        <div className="overflow-hidden relative h-12 sm:h-16 md:h-20">
          {skills.map((skill, index) => {
            const className =
              index === activeIndex
                ? "translate-y-0 opacity-100"
                : index ===
                    (activeIndex === 0 ? skills.length - 1 : activeIndex - 1)
                  ? "-translate-y-10 opacity-0"
                  : "translate-y-10 opacity-0";
            return (
              <h1
                key={index}
                className={`${className} duration-500 transition-all absolute w-full ease-in-out text-sm sm:text-2xl md:text-4xl `}
              >
                REACT-TESTING-LIBRARY
              </h1>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export { Header };
