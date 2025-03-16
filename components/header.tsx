'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonLabels = ["Mint", "Transfer", "Trade", "Bridge"];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className={`sticky top-0 flex items-center justify-between py-4 sm:py-6 px-4 sm:px-5 md:px-10 lg:px-20 z-50 transition-all ease-in-out duration-500 ${scrolled ? 'bg-brand-bg/75 backdrop-blur-sm' : 'bg-transparent'
      }`}>
      <div className="flex align-middle gap-2">
        <Image
          src="/tezac-text.svg"
          alt="tezac logo"
          width={100}
          height={32}
          className="w-[90px] sm:w-[100px] md:w-[124px]"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        {buttonLabels.map((label) => (
          <Button
            key={label}
            className="text-sm bg-transparent text-white hover:text-primary-green transition-colors duration-200 shadow-none whitespace-nowrap border-none font-light"
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-primary-green p-1"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden z-40 py-4 border-t border-zinc-800">
          <div className="flex flex-col items-center gap-3">
            {buttonLabels.map((label) => (
              <Button
                key={label}
                className="text-base w-full bg-transparent text-white hover:text-primary-green transition-colors duration-200 shadow-none whitespace-nowrap border-none font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header

