'use client'

import { motion } from 'framer-motion'
import { Github, Globe, ArrowLeft, Terminal } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'

interface Project {
  name: string
  description: string
  icon: string
  banner?: string
  homepage?: string
  source?: string
  timestamps: Record<string, Date>
}

const PROJECTS_DATA: Project[] = [
  {
    name: 'HibiscusMC',
    description:
      'HibiscusMC is a Minecraft survival server focused on enhancing the classic survival experience with innovative mechanics. No mods required.',
    icon: 'https://cdn.discordapp.com/icons/705536209694359683/16188193a73413586673a7290bd9f1bc.png?size=1024',
    banner: 'https://cdn1.hibiscuscreative.studio/hmc_kitchen_splash_store.png',
    timestamps: { 'Lead Developer': new Date('01/09/26'), Developer: new Date('10/26/24') },
    homepage: 'https://discord.gg/HibiscusMC',
    source: 'https://github.com/HibiscusMC',
  },
  {
    name: 'FOUP • PGCI',
    icon: 'https://www.foup.tech/assets/foup-logo.png',
    banner: '/foup-banner.png',
    description:
      'Clinical scheduling and patient management system for the Faculty of Dentistry at the University of Panama.',
    timestamps: { Created: new Date('09/24/22') },
    homepage: 'https://www.foup.tech/',
  },
  {
    name: 'Hypox Team',
    icon: 'https://avatars.githubusercontent.com/u/92902005?s=200&v=4',
    description:
      'A team of developers focused on creating Minecraft experiences.',
    timestamps: { Founder: new Date('10/17/21') },
    homepage: 'https://discord.gg/A6cxPgnaJY',
    source: 'https://github.com/HypoxTeam',
  },
  {
    name: 'Shiba ♡ サーバー     Social & Anime',
    icon: 'https://cdn.discordapp.com/icons/578693342871814144/a_109a270907adc6a302b67279901034b4.gif?size=1024',
    banner:
      'https://cdn.discordapp.com/banners/578693342871814144/b233c5718468e3513476eb476f153236.webp?size=4096',
    description:
      'A Spanish-speaking Discord community where people come together to hang out, play games, share ideas, and enjoy a friendly, welcoming vibe.',
    timestamps: {
      Owner: new Date('08/08/25'),
      'Development Leader': new Date('11/26/21'),
      Developer: new Date('09/27/21'),
    },
    homepage: 'https://discord.gg/shiba',
    source: 'https://github.com/ShibaDevelopment',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-primary/65 p-6 md:p-12 lg:p-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Button
          variant="ghost"
          asChild
          className="text-primary/65 hover:text-primary hover:bg-background/15 bg-background/5 backdrop-blur-md border border-foreground/10 -ml-4"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </motion.div>

      <header className="mb-20">
        <h1 className="text-5xl font-bold tracking-tight text-primary mb-4">
          Project Archive
        </h1>
        <p className="text-primary/65 max-w-xl">
          A documented history of my technical contributions across Web, Game
          Development, and Infrastructure.
        </p>
      </header>

      <div className="space-y-32">
        {PROJECTS_DATA.map((project, index) => (
          <motion.section
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div className="hidden lg:block lg:col-span-1 text-6xl font-black text-primary/65 select-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="max-w-12 max-h-12 rounded-md bg-background/15 backdrop-blur-md border border-foreground/10 overflow-hidden flex items-center justify-center text-2xl shadow-inner">
                  <img src={project.icon} className="w-full h-full" />
                </div>

                <h2 className="text-3xl font-bold text-primary transition-colors">
                  {project.name}
                </h2>
              </div>

              <p className="text-primary/65 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-foreground/5">
                <h4 className="text-xs uppercase tracking-widest text-primary/65 flex items-center gap-2">
                  <Terminal className="h-3 w-3" /> Assignments & Timeline
                </h4>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(project.timestamps).map(
                    ([roleName, date], i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-col p-3 rounded-lg bg-background/15 backdrop-blur-sm border border-foreground/5 min-w-35"
                        >
                          <span className="text-sm font-medium text-primary/65">
                            {roleName}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {date.toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {project.source && (
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="rounded-full backdrop-blur-md bg-background/5 border border-foreground/10 hover:bg-background/15"
                  >
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon="charm:github" className="h-4 w-4" />
                    </a>
                  </Button>
                )}

                {project.homepage && (
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="rounded-full backdrop-blur-md bg-background/5 border border-foreground/10 hover:bg-background/15"
                  >
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden border border-foreground/15 bg-background shadow-2xl">
              {project.banner ? (
                <img
                  src={project.banner}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-purple-900/20 to-slate-950">
                  <Terminal className="w-12 h-12 text-slate-800" />
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent" />
            </div>
          </motion.section>
        ))}
      </div>

      <footer className="mt-32 pt-12 border-t border-foreground/15 text-center">
        <p className="text-primary/65 text-sm">
          More projects on my{' '}
          <a
            href="https://github.com/NotKirzu"
            target="_blank"
            className="text-primary underline"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
