import { Linkedin, Github, MessageCircle, ExternalLink } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/msalahz',
      icon: <ExternalLink className="w-5 h-5" />,
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
      url: 'https://discord.com/users/your-discord-id',
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-sm border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
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
    </footer>
  )
}

