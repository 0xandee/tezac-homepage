'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { EncryptedText, generateRandomSymbols } from "./animated-components/encrypted-text-effect"
import { useState } from "react"

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-between py-6 bg-brand-bg px-5 md:px-20">
      <div className="flex align-middle gap-2">
        <Image src="/tezac-text.svg" alt="tezac logo" width={124} height={40} />
      </div>
      <Button className="text-sm bg-transparent text-white hover:bg-transparent shadow-none whitespace-nowrap sm:block border-none font-light" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <EncryptedText
          key={isHovered ? "revealed" : "encrypted"}
          text={isHovered ? generateRandomSymbols("Coming s00n".length) : "Coming s00n"}
          interval={25}
        />
      </Button>
    </div>
  )
}

export default Header

