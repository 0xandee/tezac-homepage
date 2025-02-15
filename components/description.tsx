"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { EncryptedText } from "./animated-components/encrypted-text-effect";

const Description = () => {
  const [inView, setInView] = useState(false);

  return (
    <div className="bg-brand-bg px-0 md:px-16 z-50">
      <motion.div
        className="bg-[#2C2D2F] py-10 md:py-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-center text-white md:px-80 px-6 text-base/8 sm:text-2xl/9 font-light relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => setInView(true)}
          transition={{ delay: 0, duration: 0.4 }}
          viewport={{ once: true }}
        >
          {inView ? (
            <EncryptedText text="Securely trade NFTs cross-chain while keeping your ownership and transactions private" />
          ) : null}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Description;