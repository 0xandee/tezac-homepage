"use client"
import { motion } from "framer-motion"
import AnimatedDiamond from "./animated-components/animated-diamond"
import { TextRevealButton } from "./animated-components/text-reveal-button"
import { gridIntersections } from "@/lib/contants"
import { useEffect, useState } from "react"


export default function Hero() {
  // Determine if the screen width is at least the "sm" breakpoint (640px)
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSm(window.innerWidth >= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Set gridSize based on the breakpoint:
  // Mobile: { x: 33.15, y: 18 }
  // sm and up: { x: 10, y: 16.666 }
  const gridSize = isSm ? { x: 10, y: 16.666 } : { x: 33.15, y: 20 };

  return (
    <div className="relative min-h-screen w-full bg-brand-bg">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(46,46,48,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,46,48,1)_1px,transparent_1px)] bg-[length:33.15%_20%] sm:bg-[length:10%_16.666%]" />

      <div className="absolute inset-0 overflow-hidden">
        {gridIntersections.map((intersection, index) => (
          <AnimatedDiamond
            key={index}
            initialPosition={intersection}
            hasOutline={index === 0 || index === 1}
            gridSize={gridSize}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <motion.h1
            className="max-w-4xl font-semibold leading-none text-[2.8rem] md:text-8xl whitespace-normal sm:whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}
          >
            <span className="text-zinc-500">Privately</span>
          </motion.h1>
          <motion.h1
            className="max-w-4xl font-semibold text-[2.8rem] md:text-8xl whitespace-normal sm:whitespace-nowrap leading-[64px] mt-2 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}
          >
            <span className="text-white">Own✕Trade NFTs</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}
          >
            <TextRevealButton
              text="Launch App"
              revealText="Coming s00n"
              className="mt-7 sm:mt-14 bg-white py-6 whitespace-nowrap px-24 scale-95"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}