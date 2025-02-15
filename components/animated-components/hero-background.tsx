"use client"
import AnimatedDiamond from "./animated-diamond"
import { gridIntersections } from "@/lib/contants"
import { useEffect, useState } from "react"

export default function HeroBackground() {
    // Determine if the screen width is at least the "sm" breakpoint (640px)
    const [isSm, setIsSm] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSm(window.innerWidth >= 640);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Set gridSize based on the breakpoint:
    // Mobile: { x: 33.15, y: 18 }
    // sm and up: { x: 10, y: 16.666 }
    const gridSize = isSm ? { x: 10, y: 16.666 } : { x: 33.15, y: 20 };

    return (
        <div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2C2D2F_1px,transparent_1px),linear-gradient(to_bottom,#2C2D2F_1px,transparent_1px)] bg-[length:33.15%_20%] sm:bg-[length:10%_16.666%]" />
            <div className="absolute inset-0 overflow-hidden">
                {gridIntersections.map((intersection, index) => (
                    <AnimatedDiamond
                        key={index}
                        initialPosition={intersection}
                        hasOutline={index === 0 || index === 1}
                        gridSize={gridSize}
                    />
                ))}
            </div>
        </div>
    )
}