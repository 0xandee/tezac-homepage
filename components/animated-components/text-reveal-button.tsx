"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextRevealButtonProps } from "@/lib/types";

export const TextRevealButton: React.FC<TextRevealButtonProps> = ({ text, revealText, className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isHovered]);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden px-4 py-2 rounded-md border text-black transition-colors duration-300",
        "min-w-[110px] flex justify-center items-center",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-zinc-800"
        initial={false}
        animate={{
          clipPath: isHovered
            ? `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`
            : `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
        }}
      />
      <span className="relative z-10 flex items-center justify-center w-full">
        <span className={cn("absolute", isHovered ? "text-white" : "text-black")}>
          {isHovered ? revealText : text}
        </span>
      </span>
    </button>
  );
};
