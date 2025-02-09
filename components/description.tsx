"use client"
import { motion } from "framer-motion"

const Description = () => {
  return (
    <div className="bg-zinc-800 px-0 md:px-16">
      <motion.div
        className="bg-[#2c2d2f] py-10 md:py-40"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-center text-white md:px-0 px-4 text-sm sm:text-xl leading-10 font-mono"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Privacy-preserving NFT marketplace on Aztec with <br />
          encrypted ownership, hidden auctions, <br />
          cross-chain trading, and front-running resistance
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Description

