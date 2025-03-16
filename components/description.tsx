"use client";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const Description = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 2xl:px-64 z-50 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <NeonGradientCard className="items-center justify-center text-center">
        <span className="text-center text-white text-sm/6 sm:text-base/7 md:text-xl/8 lg:text-2xl/9 font-light relative z-10">
          Securely trade NFTs cross-chain while keeping your ownership and transactions private
        </span>
      </NeonGradientCard>
      {/* <motion.div
        className="bg-brand-bg/30 backdrop-blur-sm rounded-md py-10 md:py-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-center text-white px-10 2xl:px-[28rem] sm:px-24 text-base/8 sm:text-2xl/9 font-light relative z-10"
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
      </motion.div> */}
    </div>
  );
};

export default Description;