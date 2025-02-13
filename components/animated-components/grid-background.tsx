"use client"
import { motion } from "framer-motion"

export default function GridBackground({columns = 12, rows = 6}) {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
      },
    },
  }

  const cellVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const plusVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <motion.div
      className="absolute inset-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Grid lines */}
      <motion.div
        className="absolute inset-0 grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(5,1fr)]"
        variants={gridVariants}
      >
        {[...Array(55)].map((_, index) => (
          <motion.div key={index} className="border-[0.1px] border-zinc-800 relative" variants={cellVariants}>
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
              {[...Array(16)].map((_, nestedIndex) => (
                <div key={nestedIndex} className="border-[0.05px] border-zinc-700"></div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0" variants={gridVariants}>
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${columns - 1}, 1fr)`,
            gridTemplateRows: `repeat(${rows - 1}, 1fr)`,
          }}
        >
          {[...Array(columns * rows)].map((_, index) => {
            const row = Math.floor(index / columns)
            const col = index % columns

            return (
              <motion.div
                key={index}
                className="relative"
                style={{
                  position: "absolute",
                  left: `${(col / (columns - 1)) * 100}%`,
                  top: `${(row / (rows - 1)) * 100}%`,
                }}
                variants={plusVariants}
              >
                <span className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-extrabold select-none">
                  +
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

