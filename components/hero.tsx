"use client"
import { motion } from "framer-motion"
import AnimatedDiamond from "./animated-components/animated-diamond"
import { TextRevealButton } from "./animated-components/text-reveal-button"
import { gridIntersections } from "@/lib/contants"
import TypewriterText from "./animated-components/typewriter-effect"


export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:10%_16.666%] sm:bg-[length:10%_16.666%]" />

      <div className="absolute inset-0">
        {gridIntersections.map((intersection, index) => (
          <AnimatedDiamond
            key={index}
            initialPosition={intersection}
            hasOutline={index === 0 || index === 1}
            gridSize={{ x: 10, y: 16.666 }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-6 text-center">
          <motion.h1
            className="max-w-4xl font-extrabold leading-none font-mono text-5xl md:text-8xl whitespace-normal sm:whitespace-nowrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-zinc-500">Privately</span>
          </motion.h1>
          <motion.h1
            className="max-w-4xl font-extrabold font-mono text-5xl md:text-8xl whitespace-normal sm:whitespace-nowrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <TypewriterText text="Own+Trade JPEGs" />
          </motion.h1>
          <div className="mb-14" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <TextRevealButton
              text="Coming soon"
              revealText="Stay tuned"
              className="mt-0 sm:mt-14 bg-transparent text-white border py-6 whitespace-nowrap px-16"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}