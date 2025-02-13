"use client"
import { motion } from "framer-motion"

const Description = () => {
  return (
    <div className="bg-zinc-800 px-0 md:px-16">
      <motion.div
        className="bg-[#2c2d2f] py-10 md:py-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-center text-white md:px-40 px-6 text-base/8 sm:text-2xl/9 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.4 }}
          viewport={{ once: true }}
        >
          Securely trade NFTs on layer 1 and Aztec <br /> while keeping your ownership and transactions private
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Description

