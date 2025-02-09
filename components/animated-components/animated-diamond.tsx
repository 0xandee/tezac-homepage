"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { AnimatedDiamondProps } from "@/lib/types"

function AnimatedDiamond({ initialPosition, hasOutline = false }: AnimatedDiamondProps) {
  const [position, setPosition] = useState(initialPosition)

  useEffect(() => {
    const interval = setInterval(
      () => {
        const newPosition = {
          x: Math.floor(Math.random() * 10),
          y: Math.floor(Math.random() * 6),
        }
        setPosition(newPosition)
      },
      Math.random() * 5000 + 5000,
    ) 

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="absolute"
      animate={{
        left: `calc(${position.x * 10}% - 0.5rem)`,
        top: `calc(${position.y * 16.666}% - 0.5rem)`,
      }}
      initial={{
        left: `calc(${initialPosition.x * 10}% - 0.5rem)`,
        top: `calc(${initialPosition.y * 16.666}% - 0.5rem)`,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      <div
        className={`h-4 w-4 rotate-45 bg-zinc-700 ${
          hasOutline ? "outline outline-1 outline-zinc-700 outline-offset-[10px]" : ""
        }`}
      />
    </motion.div>
  )
}

export default AnimatedDiamond

