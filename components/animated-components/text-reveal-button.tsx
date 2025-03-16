"use client";

import type React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextRevealButtonProps } from "@/lib/types";
import { EncryptedText } from "./encrypted-text-effect";

export const TextRevealButton: React.FC<TextRevealButtonProps> = ({ text, revealText, className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden px-4 py-2 text-black transition-colors duration-300",
        "min-w-[110px] flex justify-center items-center",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-primary-green" />
      <span className="relative z-10 flex items-center justify-center w-full font-medium">
        <span className={"absolute text-black"}>
          <EncryptedText
            key={isHovered ? "revealed" : "encrypted"}
            text={isHovered ? revealText : text}
            interval={25}
          />
        </span>
      </span>
    </button>
  );
};
