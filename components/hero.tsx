"use client"
import { motion } from "framer-motion"
import { TextRevealButton } from "./animated-components/text-reveal-button"
import Description from "./description"
import HeroBackground from "./animated-components/hero-background"
import { EncryptedText, generateRandomSymbols } from "./animated-components/encrypted-text-effect"
import { useState } from "react"


export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative min-h-screen w-full bg-brand-bg">
      <HeroBackground />
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <motion.h1
            className="max-w-4xl font-semibold leading-none text-[2.8rem] md:text-8xl whitespace-normal sm:whitespace-nowrap text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <EncryptedText
              key={isHovered ? "revealed" : "encrypted"}
              text={isHovered ? generateRandomSymbols("Privately".length) : "Privately"}
              interval={25}
            />
          </motion.h1>
          <motion.h1
            className="max-w-4xl font-semibold text-[2.8rem] md:text-8xl whitespace-normal sm:whitespace-nowrap leading-[64px] mt-2 sm:mt-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <EncryptedText
              key={isHovered ? "revealed" : "encrypted"}
              text={isHovered ? generateRandomSymbols("Own✕Trade NFTs".length) : "Own✕Trade NFTs"}
              interval={25}
            />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.2 }}
          >
            <TextRevealButton
              text="Powered by Aztec"
              revealText={generateRandomSymbols("Powered by Aztec".length)}
              className="mt-7 sm:mt-14 bg-white py-6 whitespace-nowrap px-32 scale-95"
            />
          </motion.div>
        </div>
      </motion.div>
      <Description />
    </div>
  )
}