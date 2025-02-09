"use client"

import { TypewriterTextProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0.4 }) => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < text.length) {
            setDisplayText(text.substring(0, currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
          } else {
            // Wait a bit before starting to delete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(text.substring(0, currentIndex - 1));
            setCurrentIndex(prev => prev - 1);
          } else {
            setIsDeleting(false);
            // Wait a bit before starting to type again
            setTimeout(() => setCurrentIndex(0), 1000);
          }
        }
      }, isDeleting ? 50 : 100); // Faster deletion, slower typing
  
      return () => clearTimeout(timeout);
    }, [currentIndex, text, isDeleting]);
  
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        className="text-white inline-block"
      >
        {displayText}
        <span className="animate-pulse ml-1">|</span>
      </motion.span>
    );
  };

  export default TypewriterText;