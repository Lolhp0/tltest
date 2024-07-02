"use client";

import { useSkin } from "@/hooks/useSkin";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const OverallPlayerBox = ({
  name,
  rank,
  reason,
  cheater,
  region,
  index,
}: {
  name: string;
  rank?: string;
  reason?: string;
  cheater?: boolean;
  region: string;
  index: number;
}) => {
  const skinURL = useSkin(name);

  const [hovering, setHovering] = useState(false)

  return (
    <div
      className={`w-[98%] mx-auto my-0.5 h-[80px] cursor-pointer max-[550px]:w-full ${
        rank === "H" ? "bg-[#2a2b3c]" : rank === "L" ? "bg-[#2e3347]" : ""
      } rounded-lg flex items-center justify-start gap-5`}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      aria-hovering={hovering}
      aria-haspopup="dialog"
    >
      {/* INDEX OF THE PLAYER */}
      <table className="w-full h-[inherit]">
        <tr className="w-full h-[inherit] flex items-center justify-start">
          <td className="w-fit h-[inherit]">
            <div
              className={`w-[100px] max-[550px]:w-[60px] h-[inherit] flex items-center justify-center ${
                index == 1
                  ? "bg-[#f7cc3b]"
                  : index == 2
                  ? "bg-zinc-200"
                  : index == 3
                  ? "bg-[#8f4f17]"
                  : "bg-slate-900/50"
              } rounded-lg
              duration-[70ms] ease-[ease-out]
              ${hovering ? "w-[110px]" : ""}
              `
            }
            >
              <span className="text-4xl text-white font-bold max-[550px]:text-2xl">{index}</span>
            </div>
          </td>
          <td className="h-[inherit] flex items-center justify-center">
            <div className="w-[80px] h-[70px] bg-slate-950/20 rounded-lg ml-4 mr-2 !relative flex items-center justify-center overflow-clip">
              {skinURL ? (
                <>
                  <Image
                    src={skinURL}
                    width={180}
                    height={180}
                    priority
                    alt={`${name}'s Minecraft Skin`}
                    className="absolute top-0 left-0 z-[50]"
                  />
                </>
              ) : (
                <div className="w-fit" role="status">
                  <div className="w-8 h-8 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </td>
          <td className="h-[inherit] flex items-center justify-center">
            <strong className="text-2xl px-5 max-[550px]:text-xl">{name}</strong>
          </td>

          <td className="ml-auto h-[inherit] flex items-center justify-center">
            <div
              className={`!w-[50px] h-[45px] overflow-hidden mr-3 flex items-center justify-center text-black font-bold text-[20px] rounded-[10%] duration-[250ms] ease-[ease-out]
          ${
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
              <strong className="text-zinc-900 duration-[200ms] ease-[ease] delay-[50ms] !font-extrabold">
                {region.toUpperCase()}
              </strong>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OverallPlayerBox;
