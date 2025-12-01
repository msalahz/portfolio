import Header from '@/components/Header'
import { createFileRoute } from '@tanstack/react-router'
import {
  Clock,
  Target,
  Users,
  Blocks,
  Layers,
  Code,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-neutral-200" />,
      title: 'Frontend Development',
      description:
        'React, TanStack Start, Vue, Next.js, Remix (React Router 7), Astro, Tailwind CSS, MUI, Radix UI, Vuetify, TanStack Query',
    },
    {
      icon: <Layers className="w-10 h-10 text-neutral-200" />,
      title: 'Full-Stack Development',
      description:
        'Next.js, React, Node.js, Fastify, TypeScript, PostgreSQL, AWS, and more. From frontend & UI to backend & APIs, testing, and DevOps.',
    },
    {
      icon: <Blocks className="w-10 h-10 text-neutral-200" />,
      title: 'System Design & Architecture',
      description:
        'End-to-end solutions from intuitive user interfaces to robust backend systems. Migrations, integrations, and modern React applications.',
    },
    {
      icon: <Clock className="w-10 h-10 text-neutral-200" />,
      title: 'Efficiency & Results',
      description:
        'Proven in tight deadlines—achieved 95% on-time delivery by addressing blockers proactively. Fast turnaround without compromising quality.',
    },
    {
      icon: <Target className="w-10 h-10 text-neutral-200" />,
      title: 'Client-Focused Impact',
      description:
        'Reduced process cycle times by 40% and support queries by 50% through automation and API integrations, empowering scalable operations.',
    },
    {
      icon: <Users className="w-10 h-10 text-neutral-200" />,
      title: 'Team Leadership & Mentoring',
      description:
        'Fostered team growth and safe environments, leading to senior-level promotions and enhanced collaboration across cross-functional teams.',
    },
  ]

  return (
    <div className="min-h-screen bg-black">

      <Header />
      <section className="relative py-24 px-6 text-center">
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8 mb-10">
            <img
              src="/circle_picture.png"
              alt="Mohammed Zaghloul"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-neutral-800"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Mohammed Zaghloul
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-neutral-200 mb-6 font-light">
            Top-Rated Lead Software Developer
          </p>

          <p className="text-base text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            12+ years building and scaling B2B/B2C platforms for e-commerce, farm management, decentralized credentials, event systems, and AI speech-to-text transcription systems.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:contact@mohammedzaghloul.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-neutral-100 text-black font-medium rounded-md transition-colors shadow-sm"
            >
              Contact Me
            </a>
            <p className="text-neutral-400 text-sm">
              Begin your journey by hiring a{' '}
              <code className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-200 text-xs">
                Professional Software Developer
              </code>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-medium text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
