"use client"
import { motion } from "framer-motion"
import GridBackground from "./animated-components/grid-background"
import { features } from "@/lib/contants"

export default function FeaturesGrid() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="bg-zinc-800 py-24 overflow-hidden">
      <motion.div
        className="w-full max-w-[100vw] mx-auto my-14 px-0 sm:px-6 lg:container lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 relative min-h-[200px] text-center flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              {index % 2 === 1 && <GridBackground />}
              {feature.title && (
                <>
                  <h3 className="text-xl font-mono text-white mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-[300px] relative z-10">
                    {feature.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

