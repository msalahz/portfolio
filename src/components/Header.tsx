import { Link, useNavigate } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Linkedin, Github, MessageSquare, Briefcase } from 'lucide-react'

export default function Header() {
  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  const socialLinks = [
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/msalahz',
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/msalahz',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/msalahz',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/2DtGzqPDZU',
      icon: <MessageSquare className="w-5 h-5" />,
    },
  ]

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-sm text-white shadow-lg border-b border-neutral-800">
      <div className="grid grid-cols-3 items-center justify-between w-full">
        {/* Center: Logo/Name */}
        <div className=" flex items-center">
          <img src="/circle_picture.png" alt="Mohammed Zaghloul" className="w-10 h-10 rounded-full" />
          <h1 className="ml-4 text-2xl font-semibold">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              MOHAMMED ZAGHLOUL
            </Link>
          </h1>
        </div>

        {/* Left: Navigation Menu */}
        <NavigationMenu className='m-auto'>
          <NavigationMenuList className="gap-2 ">
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => {
                  navigate({ to: '/' })
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-4 py-2 text-md font-medium text-white hover:text-neutral-300 transition-colors cursor-pointer rounded-md hover:bg-neutral-900"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 text-md font-medium text-white hover:text-neutral-300 transition-colors cursor-pointer rounded-md hover:bg-neutral-900"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-4 justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
