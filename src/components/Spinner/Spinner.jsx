import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-[99px] mx-auto">
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
    </div>
  );
};

export default Spinner;
