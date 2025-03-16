"use client"
import { motion } from "framer-motion"
import { features } from "@/lib/contants"
import { VelocityScroll } from "./magicui/scroll-based-velocity"
import { FaUserShield, FaExchangeAlt, FaBolt, FaLock } from "react-icons/fa"

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

  const getFeatureIcon = (title: string) => {
    switch (title) {
      case "Ownership":
        return <FaUserShield size={24} />;
      case "Cross-Chain":
        return <FaExchangeAlt size={24} />;
      case "Trading":
        return <FaBolt size={24} />;
      default:
        return <FaLock size={24} />;
    }
  };

  return (
    <div className="pb-0 sm:pb-16 overflow-hidden px-0">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-20 sm:my-40">
        <VelocityScroll className="text-white" numRows={1} defaultVelocity={3}>
          ⚠︎ Protect On-Chain Identity
        </VelocityScroll>
        <VelocityScroll className="text-primary-green" numRows={1} defaultVelocity={5}>
          Zero Tracking = Zero Hacks =
        </VelocityScroll>
      </div>
      <motion.div
        className="w-full max-w-[100vw] mx-auto sm:my-14 lg:container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 relative text-left flex flex-col group"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-zinc-900 rounded-md flex items-center justify-center mb-4">
                  <div className="text-primary-green text-2xl">
                    {getFeatureIcon(feature.title)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-white group-hover:text-primary-green font-medium mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed max-w-md font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

