import { useEffect, useState } from "react";

const GridBackground = () => {
  const getLines = () => {
    if (window.innerWidth < 640) return 5;
    if (window.innerWidth < 1024) return 7;
    return 9;
  };
  const [count, setCount] = useState(getLines());
  useEffect(() => {
    const handleResize = () => setCount(getLines());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none  flex justify-center opacity-50 mx-16 lg:mx-36">
      <div className="flex justify-between h-full w-full">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="bg-grid-lines w-px"></div>
        ))}
      </div>
    </div>
  );
};

export { GridBackground };
