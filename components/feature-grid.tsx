"use client"
import { motion } from "framer-motion"
import GridBackground from "./animated-components/grid-background"
import { features } from "@/lib/contants"

export default function FeaturesGrid() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        duration: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.1
      },
    },
  }

  return (
    <div className="bg-zinc-800 py-4 sm:py-24 overflow-hidden">
      <motion.div
        className="w-full max-w-[100vw] mx-auto sm:my-14 px-0 sm:px-6 lg:container lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 relative min-h-[200px] text-center flex flex-col items-center justify-center`}
              variants={itemVariants}
            >
              {index % 2 === 1 && <GridBackground columns={12} rows={6} />}
              {feature.title && (
                <>
                  <h3 className="text-xl text-white mb-2 relative z-10 font-normal">{feature.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed max-w-[300px] relative z-10 font-light">
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

