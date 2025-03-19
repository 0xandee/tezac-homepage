"use client";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { HyperText } from "./magicui/hyper-text";
import { description } from "@/lib/contants"

const Description = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 2xl:px-64 z-50 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <NeonGradientCard className="items-center justify-center text-center">
        <HyperText
          startOnView={true}
          duration={0.1}
          speed={5}
          animateOnHover={false}
        >
          {description}
        </HyperText>
      </NeonGradientCard>
    </div>
  );
};

export default Description;