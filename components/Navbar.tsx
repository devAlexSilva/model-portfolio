import { Socials } from "@/utils/dataSkills"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="fixed w-full h-16 top-0 px-10 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-30">
      <ul className="w-full h-full flex flex-row items-center justify-between mt-auto px-2">
        <li>
          <a href="/" className="h-auto w-auto flex flex-row items-center">
            <Image
              src='/NavLogo.png'
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-spin"
            />
            <span className="font-bold ml-2 hidden md:block text-gray-300">
              Delavex
            </span>
          </a>
        </li>

        <ul className="w-[500px] h-auto flex flex-row items-center justify-between md:mr-20     border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
          <li><a href="#about" className="cursor-pointer">Sobre mim</a></li>
          <li><a href="#skills" className="cursor-pointer">Habilidades</a></li>
          <li><a href="#projects" className="cursor-pointer">Projetos</a></li>
        </ul>

        <li className="flex flex-row gap-6">
          {
            Socials.map(item => (
              <a key={item.name} href={item.url ? item.url : undefined} target="_blank">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={24}
                  height={24}
                />
              </a>
            ))
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar