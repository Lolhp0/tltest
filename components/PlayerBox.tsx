"use client";

import React, { useState } from "react";

const PlayerBox = ({
  name,
  rank,
  reason,
  cheater,
  region,
}: {
  name: string;
  rank?: string;
  reason?: string;
  cheater?: boolean
  region: string;
}) => {
  const [hovering, setHovering] = useState<boolean>(false);

  return (
    <div 
      className={`w-[250px] h-[42px] mx-auto flex items-center justify-start my-0.5 text-[18px] z-50 cursor-pointer font-bold tracking-wide ${rank === "H" ? "bg-[#2a2b3c]" : rank === "L" ? "bg-[#2e3347]" : cheater && "bg-[#0b1d26]"} rounded-md rounded-l-sm max-md:w-full overflow-hidden`}
      role="row"
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      aria-hovering={hovering}
      aria-haspopup="dialog"
    >
      <div
        className={`!w-[11px] h-[inherit] overflow-hidden mr-3 flex items-center justify-center text-black font-bold text-[20px] ${
          hovering && "!w-[40px] px-5"
        } rounded-[10%] duration-[250ms] ease-[ease-out] ${
          region === "eu"
            ? "bg-[#a6e3a1]"
            : region === "na"
            ? "bg-[#e78284]"
            : region === "as"
            ? "bg-[#ca9ee6]"
            : region === "sa"
            ? "bg-[#fc9656]"
            : region === "au"
            ? "bg-[#ef9f76]"
            : region === "me"
            ? "bg-[#e5c890]"
            : region === "af"
            ? "bg-[#9c6ad9]"
            : ""
        }`}
      >
        <strong
          className={`text-zinc-900 opacity-0 ${
            hovering && "opacity-100"
          } duration-[200ms] ease-[ease] delay-[50ms] !font-extrabold`}
          data-opacity={hovering ? "1" : "0"}
        >
          {region.toUpperCase()}
        </strong>
      </div>

      <span className="text-[16px] font-medium">{name}</span>
      <div className="w-10 h-[inherit] relative ml-auto px-6">
          {
            rank ? (
                <span
                className={`absolute text-[14px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-300 font-extralight text-zinc-400 ${
                  hovering && "opacity-100"
                }`}
                data-opacity={hovering ? "1" : "0"}
              >
                {rank === "H" ? "High" : "Low"}
              </span>
            ) : (
                <span 
                className={`absolute text-[14px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 duration-300 font-light text-zinc-300 ${
                    hovering && "opacity-100"
                  }`}
                  data-opacity={hovering ? "1" : "0"}
                  >
                    {reason}
                </span>
            )
          }
      </div>
    </div>
  );
};

export default PlayerBox;
