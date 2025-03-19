"use client"
import { motion } from "framer-motion"
import { TextRevealButton } from "./animated-components/text-reveal-button"
import Description from "./description"
import { MorphingText } from "./magicui/morphing-text"
import { generateRandomSymbols } from "./animated-components/encrypted-text-effect"
import { subtitleTexts } from "@/lib/contants"
import { titleTexts } from "@/lib/contants"

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-transparent">
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <MorphingText className="text-primary-green" texts={titleTexts} />
          <MorphingText className="text-white" texts={subtitleTexts} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}
          >
            <TextRevealButton
              text="Coming s00n"
              revealText={generateRandomSymbols("Coming s00n".length)}
              className="mt-7 sm:mt-14 bg-white py-6 whitespace-nowrap px-32 scale-95 rounded-sm"
            />
          </motion.div>
        </div>
      </motion.div>
      <Description />
    </div>
  )
}