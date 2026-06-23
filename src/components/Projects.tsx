import { useState } from "react";
import { projects } from "../data";
import { CustomButton } from "./CustomButton";
import { HeadingSection } from "./HeadingSection";

const buttonStyles =
  "z-30 hover:bg-primaryOrange transition-all text-white border border-white/20 hover:border-transparent px-5 py-2 rounded-lg backdrop-blur-sm font-medium";

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  const cardStackHeightRem = projects.length * 8;

  return (
    <section
      className={`min-h-screen bg-black py-20  transition-all duration-500 ${activeProjectId !== null ? "pb-60" : "pb-35 md:pb-45"}`}
    >
      <HeadingSection text="Projekty" />
      <div
        className="flex flex-col place-items-center relative max-w-4xl mx-auto w-full"
        style={{ minHeight: `calc(80vh + ${cardStackHeightRem}rem)` }}
      >
        {projects.map((project, index) => {
          const isActive = activeProjectId === project.id;
          const anyCardOpen = activeProjectId !== null;

          return (
            <div
              key={project.id}
              onClick={() => handleCardClick(project.id)}
              className={`w-full absolute transition-all duration-500 ease-in-out cursor-pointer
                ${
                  isActive
                    ? "h-[90vh] top-0! rotate-0! translate-y-0! z-50"
                    : "h-[60vh] md:h-[80vh] hover:-translate-y-10 hover:rotate-1 hover:z-40"
                }
                ${anyCardOpen && !isActive ? "opacity-20 pointer-events-none scale-95" : "opacity-100"}
              `}
              style={{
                top: isActive ? "0rem" : `${project.id * 8}rem`,
                backgroundImage: `url(${project.photo})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: isActive ? 50 : index,
              }}
            >
              <div
                className={`group w-full h-full relative overflow-hidden border transition-all duration-500 rounded-2xl
                ${isActive ? "border-primaryOrange shadow-[0_0_60px_rgba(249,115,22,0.3)]" : "border-white/10 shadow-2xl hover:border-primaryOrange hover:shadow-[0_0_50px_rgba(249,115,22,0.2)]"}
              `}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/80 z-10 transition-all duration-500 ${isActive ? "from-black via-black/60" : ""}`}
                />

                <div className="absolute top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-2xl md:text-3xl tracking-wide uppercase">
                    {project.title}
                  </h3>
                </div>

                <div
                  className={`absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 delay-100
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
                `}
                >
                  <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-widest text-primaryOrange font-bold mb-1">
                      Szczegóły projektu
                    </p>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <CustomButton
                      text="Live Demo"
                      className={`${buttonStyles}`}
                      link={project.live}
                    />
                    <CustomButton
                      text="GitHub"
                      className={`${buttonStyles}`}
                      link={project.github}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Projects };
