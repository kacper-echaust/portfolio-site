import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../assets/models/Laptop";
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
  }, []);
  return (
    <header
      id="home"
      className="relative flex min-h-screen flex-col-reverse md:flex-col items-center justify-center overflow-visible pt-24 text-white lg:flex-row lg:items-center"
    >
      <div className="relative mx-auto flex w-full max-w-8xl flex-col gap-6 text-center lg:min-h-screen lg:flex-row">
        <div className="flex flex-col justify-center space-y-6 sm:max-w-[90%] md:max-w-[85%] lg:max-w-[55%] lg:text-left">
          <div className="space-y-3">
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Kacper Echaust
            </h1>
            <p className="text-3xl font-light text-white/80 md:text-4xl lg:text-5xl">
              Frontend Developer
            </p>
          </div>

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
                <h2
                  key={index}
                  className={`${className} absolute w-full text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium transition-all duration-500 ease-in-out text-primaryOrange`}
                >
                  {skill}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative h-80 w-full overflow-visible sm:h-95 md:h-115 lg:h-140 lg:w-[55%]">
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 38 }}
          className="h-full w-full"
        >
          <ambientLight intensity={1.5} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </header>
  );
};

export { Header };
