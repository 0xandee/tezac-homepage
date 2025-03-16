'use client'

import { FlickeringGrid } from "./magicui/flickering-grid"
import { useEffect, useState } from "react"

export default function GlobalBackground() {
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

    useEffect(() => {
        // Set initial dimensions
        updateDimensions();

        // Update dimensions on resize
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Calculate just enough size based on viewport
    const updateDimensions = () => {
        if (typeof window !== 'undefined') {
            const width = Math.max(window.innerWidth, 1200);
            const height = Math.max(window.innerHeight, 800);

            // Add a small buffer to prevent edges from showing during scroll/resize
            setDimensions({
                width: width * 1.1,
                height: height * 1.1
            });
        }
    };

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-brand-bg">
            <FlickeringGrid
                className="size-full"
                squareSize={4}
                gridGap={4}
                color="#8EE200"
                maxOpacity={0.075}
                flickerChance={0.5}
                height={dimensions.height}
                width={dimensions.width}
            />
        </div>
    )
} 