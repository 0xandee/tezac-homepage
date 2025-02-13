"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { AnimatedDiamondProps } from "@/lib/types";

function AnimatedDiamond({
  initialPosition,
  hasOutline = false,
  gridSize = { x: 10, y: 16.666 },
}: AnimatedDiamondProps) {
  const [position, setPosition] = useState(initialPosition);
  const [visible, setVisible] = useState(true);

  // Determine multipliers based on gridSize
  const xMultiplier = gridSize.x === 10 ? 10 : 4;
  const yMultiplier = gridSize.y === 16.666 ? 6 : 6;

  useEffect(() => {
    const animationSpeed = 5000 * Math.random();
    const interval = setInterval(() => {
      // Fade out at current position
      setVisible(false);
      // After fade-out, update position and fade in
      setTimeout(() => {
        const newPosition = {
          x: Math.floor(Math.random() * xMultiplier),
          y: Math.floor(Math.random() * yMultiplier),
        };
        setPosition(newPosition);
        setVisible(true);
      }, 500); // Duration of fade-out
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [xMultiplier, yMultiplier]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(${position.x * gridSize.x}% - 0.5rem)`,
        top: `calc(${position.y * gridSize.y}% - 0.5rem)`,
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`h-4 w-4 rotate-45 bg-zinc-700 ${hasOutline ? "outline outline-1 outline-zinc-700 outline-offset-[10px]" : ""
          }`}
      />
    </motion.div>
  );
}

export default AnimatedDiamond;