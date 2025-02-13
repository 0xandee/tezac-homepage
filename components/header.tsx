import Image from "next/image"
import { Button } from "./ui/button"


const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 bg-zinc-800 px-5 md:px-20">
      <div className="flex align-middle gap-2">
        <Image src="/tezac-logo-horizontal.svg" alt="tezac logo" width={156} height={40} />
      </div>
      <Button className="text-sm bg-transparent text-white hover:bg-transparent shadow-none whitespace-nowrap sm:block border-none font-light">Coming s00n</Button>
    </div>
  )
}

export default Header

