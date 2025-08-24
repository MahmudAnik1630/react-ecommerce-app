import React from "react";

function ToolTip({ position = "bottom-left", colors = ["#FF5733", "#33FF57", "#3357FF"] }) {
  const buttonPositions = {
    "bottom-left": "absolute bottom-9 left-10",
    "bottom-right": "absolute bottom-11 right-10",
  };

  return (
    <button
      className={`${buttonPositions[position]} p-4 bg-white/30 rounded-full shadow-lg border hover:shadow-xl transition duration-300 group`}
    >
     
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center bg-black/70 gap-1.5">
        {colors.map((color, i) => (
          <div key={i} className="size-5 border border-white rounded-full" style={{ backgroundColor: color }}/>
        ))}
      </div>
    </button>
   
  );
}

export default ToolTip;
