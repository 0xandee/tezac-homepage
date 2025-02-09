import Image from "next/image"
import { GrMenu } from "react-icons/gr"
import { Button } from "./ui/button"


const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 bg-zinc-800 px-5 md:px-20">
      <div className="flex align-middle gap-2"><Image src="/tezac.png" alt="tezac logo" width={30} height={20} /><span className="text-xl font-bold tracking-wider text-white ">TEZAC</span></div>
      <Button className="text-sm bg-transparent text-white hover:bg-transparent shadow-none whitespace-nowrap hidden sm:block  border-none">Coming soon</Button>
      <GrMenu className="text-white text-3xl block sm:hidden"/>
    </div>
  )
}

export default Header

