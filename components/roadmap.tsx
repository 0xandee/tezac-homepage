"use client"

import { useState, useEffect } from "react"
import { roadmap } from "@/lib/contants"
import { motion } from "framer-motion";

export default function RoadmapTimeline() {
  const [isMobile, setIsMobile] = useState(false)
  const [inViewTitle, setInViewTitle] = useState(false);
  const [inViewDescription, setInViewDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="pt-20 pb-20 sm:pb-60 overflow-hidden w-[100%]">
      <div className="text-center">
        <motion.h1
          className="text-primary-green text-3xl md:text-5xl font-medium text-center mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInViewTitle(true)}
        >
          {inViewTitle ? "Roadmap 2025" : null}
        </motion.h1>

        <motion.div
          className={`flex ${isMobile ? "flex-col justify-center w-full items-center" : "flex-row justify-stretch"}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {isMobile
            ? roadmap.map((phase, index) => (
              <motion.div
                key={index}
                className="flex items-center flex-col w-full px-5 relative"
                variants={itemVariants}
              >
                {index % 2 === 0 && index !== roadmap.length - 1 ?
                  <motion.div
                    variants={lineVariants}
                    style={{
                      backgroundColor:
                        index === 0 ? "#a0e82c" : "#a0e82c50",
                    }}
                    className="w-full h-[3px] rounded-full shadow-[0_0_10px_rgba(140,255,186,0.5)] relative"
                  >
                  </motion.div> : null}

                {phase.title !== "" ?
                  <motion.div
                    className="pl-0 pt-0 w-fit mb-16 mt-4 group cursor-pointer transition-all duration-300 hover:scale-105"
                    whileHover={{
                      boxShadow: "0 0 25px rgba(140, 255, 186, 0.15)",
                      backgroundColor: "rgba(20, 20, 20, 0.5)",
                      borderRadius: "8px",
                      padding: "16px"
                    }}
                  >
                    <motion.h2
                      className="pt-5 text-2xl font-medium p-0 leading-none text-white group-hover:text-primary-green transition-colors duration-300"
                      onViewportEnter={() => setInViewTitle(true)}
                    >
                      {inViewTitle ? phase.title : null}
                    </motion.h2>
                    <motion.ul className="text-center mt-4 p-0" onViewportEnter={() => setInViewDescription(true)}>
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 text-base mt-1"
                          initial={{ opacity: 0 }}
                          animate={inViewDescription ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                        >
                          • {inViewDescription ? item : null}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div> : null}
              </motion.div>
            ))
            : [...roadmap].map((phase, index) => (
              <motion.div
                key={index}
                className="flex items-start px-0 flex-row w-[100%] relative"
                variants={itemVariants}
              >
                {index % 2 === 0 ?
                  <motion.div
                    variants={lineVariants}
                    style={{
                      backgroundColor:
                        index === 0 ? "#a0e82c" : "#a0e82c50",
                    }}
                    className="w-full h-[3px] rounded-full shadow-[0_0_10px_rgba(140,255,186,0.5)] mt-8 relative"
                  >
                  </motion.div> :
                  <motion.div
                    className="min-w-96 mx-[-2rem] group cursor-pointer transition-all duration-300"
                  >
                    <motion.h2
                      className="pt-0 text-3xl font-medium p-0 leading-none text-white text-center group-hover:text-primary-green transition-colors duration-300"
                      onViewportEnter={() => setInViewTitle(true)}
                    >
                      {inViewTitle ? phase.title : null}
                    </motion.h2>
                    <motion.ul className="mt-4 p-0" onViewportEnter={() => setInViewDescription(true)}>
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-zinc-400 text-base text-center mt-2 font-light group-hover:text-zinc-200 transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          animate={inViewDescription ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.1 * itemIndex }}
                        >
                          • {inViewDescription ? item : null}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  )
}