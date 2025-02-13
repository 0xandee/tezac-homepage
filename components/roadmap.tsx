"use client"

import { useState, useEffect } from "react"
import { phases } from "@/lib/contants"

export default function RoadmapTimeline() {
  const [isMobile, setIsMobile] = useState(false)

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

  return (
    <div className="bg-zinc-800 pt-20 pb-60  overflow-hidden w-[100%]">
      <div className="text-center">
        <h1 className="text-white text-3xl md:text-5xl font-medium text-center mb-20">
          Roadmap 2025
        </h1>

        <div
          className={`flex ${isMobile ? "flex-col justify-center w-full items-center" : "flex-row justify-stretch"
            }`}
        >
          {isMobile
            ? phases.map((phase, index) => (
              <div
                key={index}
                className="flex items-center flex-col w-full px-5"
              >
                {index % 2 === 0 && index !== phases.length - 1 ? <div
                  style={{
                    backgroundColor:
                      index === 0 ? "white" : "gray",
                  }}
                  className="w-full h-[15px] rounded-none shadow-none"
                /> : null}
                {phase.title !== "" ? <div className="pl-0 pt-0 w-fit mb-16 mt-4">
                  <h2 className="pt-5 text-2xl font-medium p-0 leading-none text-white text-center">
                    {phase.title}
                  </h2>
                  <ul className="text-center mt-4 p-0">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-zinc-400 text-base mt-1">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div> : null}
              </div>
            ))
            : [...phases].map((phase, index) => (
              <div
                key={index}
                className="flex items-start px-0 flex-row w-[100%]"
              >
                {index % 2 === 0 ?
                  <div
                    style={{
                      backgroundColor:
                        index === 0 ? "white" : "gray",
                    }}
                    className="w-full h-[15px] rounded-none shadow-none mt-2"
                  /> : <div className="min-w-96 mx-[-2rem]">
                    <h2 className="pt-0 text-3xl font-medium p-0 leading-none text-white text-center">
                      {phase.title}
                    </h2>
                    <ul className="mt-4 p-0">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-zinc-400 text-base text-center mt-2 font-light">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}