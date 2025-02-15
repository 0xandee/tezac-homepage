"use client"
import { motion } from "framer-motion"
import GridBackground from "./animated-components/grid-background"
import { features } from "@/lib/contants"
import { EncryptedText } from "./animated-components/encrypted-text-effect"
import { useState } from "react"

export default function FeaturesGrid() {
  const [inViewTitle, setInViewTitle] = useState(false);
  const [inViewDescription, setInViewDescription] = useState(false);

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
    <div className="bg-brand-bg pt-20 sm:pt-40 overflow-hidden px-0 sm:px-16 ">
      <motion.h1 className="text-white text-3xl md:text-5xl font-medium text-center mb-20" onViewportEnter={() => setInViewTitle(true)}>
        {inViewTitle ? (
          <EncryptedText text="Privacy at your Fingertips" />
        ) : null}
      </motion.h1>
      <motion.div
        className="w-full max-w-[100vw] mx-auto sm:my-14 lg:container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full" variants={containerVariants} onViewportEnter={() => setInViewDescription(true)}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 relative min-h-[200px] text-center flex flex-col items-center justify-center`}
              variants={itemVariants}
            >
              {(index % 2 === 0 || index === 0) && <GridBackground columns={12} rows={6} />}
              {feature.title && (
                inViewDescription ? (
                  <>
                    <h3 className="text-xl text-white mb-2 relative z-10 font-normal">
                      <EncryptedText text={feature.title} />
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed max-w-[300px] relative z-10 font-light">
                      <EncryptedText text={feature.description} />
                    </p>
                  </>
                ) : null
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

