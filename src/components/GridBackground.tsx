const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-center opacity-50">
      <div className="h-full max-w-7xl w-full ">
        <div className="flex justify-between h-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="bg-grid-lines w-px"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { GridBackground };
