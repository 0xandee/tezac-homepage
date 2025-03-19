"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { socials } from "@/lib/contants";
import Image from "next/image"
import { EncryptedText } from "./animated-components/encrypted-text-effect";
import { cloneElement } from 'react';

const Footer = () => {
  const [inView, setInView] = useState(false);
  return (
    <div className="px-0">
      <div className="bg-white py-10 md:py-10 px-8 md:px-12 lg:px-24 xl:px-40 2xl:px-64">
        <div className="flex flex-row items-center justify-between gap-10">
          <Image src="/tezac-text-black.svg" alt="tezac logo" width={156} height={40} className="w-24 md:w-[128px]" />
          <div id="socials" className="flex items-center gap-6">
            {socials.map((social, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2 }}>
                <Link href={social.url} id={social.name} target="_blank" className="text-brand-bg">
                  {cloneElement(social.icon, {
                    className: "w-6 h-6 sm:w-8 sm:h-8"
                  })}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p className="text-center text-brand-bg text-xs mt-10" onViewportEnter={() => setInView(true)}>
          {inView ? (
            <EncryptedText text="©2025 Tezac. All rights reserved" interval={25} />
          ) : null}
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
