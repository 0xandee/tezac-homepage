"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { phases } from "@/lib/contants"

export default function RoadmapTimeline() {
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

 

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="bg-zinc-800 pt-20 pb-40 font-mono overflow-hidden">
      <motion.div
        className="container text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-20" variants={itemVariants}>
          2025_Roadmap
        </motion.h1>

        <div
          className={`flex ${isMobile ? "flex-col justify-center w-full items-center" : "justify-start w-fit animate-scroll hover:pause"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {isMobile ? ([...phases].map((phase, index) => (
            <motion.div
              key={index}
              className={`flex items-start ${isMobile ? "mb-8 flex-col w-full px-5" : "w-fit px-0 flex-row flex-shrink-0"}`}
              variants={itemVariants}
            >
              <motion.div
             style={{ backgroundColor: phase.title === phases[0].title ? "white" : "gray" }}
                className={`${isMobile ? "w-full h-[15px]" : "w-[200px] h-[15px]"} rounded-none shadow-none`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
              <div className={`${isMobile ? "pl-0" : "pl-4"} pt-0 w-fit`}>
                <motion.h2
                  className={`${isMobile ? "pt-5" : "pt-0"} text-xl font-bold p-0 leading-none text-white text-left`}
                  variants={itemVariants}
                >
                  {phase.title}
                </motion.h2>
                <motion.ul className="text-left mt-2 p-0" variants={itemVariants}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-zinc-400 text-xs text-left">
                      . {item}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))):([...phases, ...phases].map((phase, index) => (
            <motion.div
              key={index}
              className={`flex items-start ${isMobile ? "mb-8 flex-col w-full px-5" : "w-fit px-0 flex-row flex-shrink-0"}`}
              variants={itemVariants}
            >
              <motion.div
             style={{ backgroundColor: phase.title === phases[0].title ? "white" : "gray" }}
                className={`${isMobile ? "w-full h-[15px]" : "w-[200px] h-[15px]"} rounded-none shadow-none`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
              <div className={`${isMobile ? "pl-0" : "pl-4"} pt-0 w-fit`}>
                <motion.h2
                  className={`${isMobile ? "pt-5" : "pt-0"} text-xl font-bold p-0 leading-none text-white text-left`}
                  variants={itemVariants}
                >
                  {phase.title}
                </motion.h2>
                <motion.ul className="text-left mt-2 p-0" variants={itemVariants}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-zinc-400 text-xs text-left">
                      . {item}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )))}
        </div>
      </motion.div>
    </div>
  )
}

