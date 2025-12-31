'use client'

import {
  Mail,
  Terminal,
  Code2,
  Gamepad2,
  Cpu,
  ExternalLink,
} from 'lucide-react'
import { Icon } from '@iconify/react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { differenceInYears } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ConfettiEvent } from '@/components/ui/confetti'

const SKILLS = [
  {
    path: './skills/frontend',
    files: ['react', 'nextjs', 'svelte', 'ui_ux'],
  },
  {
    path: './skills/backend',
    files: ['nodejs', 'api', 'auth'],
  },
  {
    path: './skills/languages',
    files: ['typescript', 'javascript'],
  },
  {
    path: './skills/databases',
    files: ['postgresql', 'mongodb', 'orms'],
  },
  {
    path: './skills/tooling',
    files: ['git', 'agile'],
  },
  {
    path: './skills/minecraft',
    files: ['plugins', 'paper', 'optimization'],
  },
  {
    path: './skills/bots',
    files: ['discord', 'automation'],
  },
]

const LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/NotKirzu',
    icon: 'charm:github',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/kirzu',
    icon: 'simple-icons:linkedin',
  },
  {
    name: 'Contact',
    href: 'mailto:contact@krzu.me',
    icon: 'feather:mail',
  },
]

const PROJECTS = [
  {
    name: 'HibiscusMC',
    description:
      'HibiscusMC is a Minecraft survival server focused on enhancing the classic survival experience with innovative mechanics. No mods required.',
    logo: 'https://cdn.discordapp.com/icons/705536209694359683/16188193a73413586673a7290bd9f1bc.png?size=1024',
    banner: 'https://cdn1.hibiscuscreative.studio/hmc_kitchen_splash_store.png',
  },
  {
    name: 'FOUP • PGCI',
    description:
      'Clinical scheduling and patient management system for the Faculty of Dentistry at the University of Panama.',
    logo: 'https://www.foup.tech/assets/foup-logo.png',
    banner: '/foup-banner.png',
  },
]

export default function RicardoPortfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const glassEffect =
    'rounded-full bg-background/5 border border-foreground/5 backdrop-blur-sm'

  const today = new Date()
  const birthday = new Date(2005, 11, 31)
  const years = differenceInYears(today, birthday)

  const isBirthday =
    today.getDate() == birthday.getDate() &&
    today.getMonth() == birthday.getMonth()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {isBirthday && <ConfettiEvent />}
      <div className="relative min-h-screen text-primary selection:bg-purple-500/40">
        <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="z-10 space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className={cn(
                  glassEffect,
                  'flex items-center gap-2 px-3 py-1 text-sm'
                )}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Based in Panama 🇵🇦
              </div>
              <div
                className={cn(
                  glassEffect,
                  'flex items-center gap-2 px-3 py-1 text-sm'
                )}
              >
                {years} y/o Developer
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              I'm{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 dark:from-purple-400 to-pink-500">
                Ricardo.
              </span>
            </h1>

            <p className="max-w-162.5 mx-auto text-lg text-primary/85 leading-relaxed">
              A polyglot developer blending{' '}
              <span className="text-primary">Web Architecture</span> with{' '}
              <span className="text-primary">Game Logic</span>. From Next.js
              interfaces to high-performance Minecraft Spigot/Paper plugins.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <Button
                variant="ghost"
                onClick={() => scrollTo('about-me')}
                className={cn(
                  glassEffect,
                  'px-6 flex items-center cursor-pointer text-primary'
                )}
              >
                About Me
              </Button>
              <div className="flex items-center gap-3 ml-4">
                <a
                  href="https://github.com/NotKirzu"
                  target="_blank"
                  className={cn(
                    glassEffect,
                    'p-2 hover:bg-white/5 rounded-full transition-colors'
                  )}
                >
                  <Icon icon="charm:github" width={20} />
                </a>
                <a
                  href="mailto:contact@krzu.me"
                  target="_blank"
                  className={cn(
                    glassEffect,
                    'p-2 hover:bg-white/5 rounded-full transition-colors'
                  )}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about-me" className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-8 uppercase tracking-[0.2em]">
            01 // About Me
          </h2>
          <div className="relative rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-background/5 border-b border-foreground/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-600/50 cursor-pointer transition duration-300 ease-in-out" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50 hover:bg-amber-600/50 cursor-pointer transition duration-300 ease-in-out" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50 hover:bg-emerald-600/50 cursor-pointer transition duration-300 ease-in-out" />
              </div>
              <span className="text-[10px] font-mono text-primary/55">
                ric@rdo: ~
              </span>
              <div className="w-12" />
            </div>

            <div className="p-8 font-mono text-sm md:text-base space-y-4">
              <div className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400">
                  ➜
                </span>
                <span className="text-purple-600 dark:text-purple-400 italic">
                  whoami
                </span>
              </div>

              <p className="text-primary/65 leading-relaxed ml-6">
                Hey! I'm Ricardo, a {years} year old developer based in{' '}
                <span className="underline bg-linear-to-r font-semibold bg-clip-text text-transparent from-red-600 via-gray-400 to-blue-600">
                  Panama
                </span>
                . I started out in the Minecraft technical community, working on
                servers and plugins where performance, stability, and clean
                design actually matter. That experience shaped how I approach
                software today. Now I mainly work on full-stack projects using
                TypeScript and modern web technologies, building systems that
                are maintainable, scalable, and focused on real user experience.
              </p>

              <div className="flex gap-3 pt-2">
                <span className="text-emerald-600 dark:text-emerald-400">
                  ➜
                </span>
                <span className="text-purple-600 dark:text-purple-400 italic">
                  ls skills/*
                </span>
              </div>

              <div className="text-primary/65 leading-relaxed ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-12">
                {SKILLS.map((skill, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-primary/85 font-mono">
                      '{skill.path}':
                    </span>

                    <div className="flex flex-wrap gap-2 text-primary/65 text-xs">
                      {skill.files.map((file, idx) => (
                        <span key={idx} className="font-mono">
                          {file}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <span className="text-emerald-600 dark:text-emerald-400">
                  ➜
                </span>
                <p className="text-slate-300 animate-caret-blink">
                  <span className="bg-foreground h-5 w-px inline-block align-middle ml-1" />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-8 uppercase tracking-[0.2em]">
            02 // Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-br from-orange-500/15 dark:from-orange-500/10 to-transparent p-8 backdrop-blur-sm">
              <Gamepad2 className="text-orange-500 mb-4 h-8 w-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2 text-orange-500">
                Game Logic
              </h3>
              <p className="text-primary/65 leading-relaxed mb-6">
                Specializing in high-performance Minecraft ecosystems. Crafting
                custom experiences via
                <span className="text-primary/95">
                  {' '}
                  Spigot, Paper, and Velocity
                </span>
                . Optimizing JVM bytecode and mastering concurrent systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Redis', 'NMS', 'Packets', 'MySQL'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-[11px] font-mono text-orange-600 dark:text-orange-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Gamepad2 size={200} />
              </div>
            </div>

            <div className="md:col-span-2 group rounded-3xl border border-foreground/10 bg-primary/2 p-8 backdrop-blur-sm hover:bg-foreground/4 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    Frontend Architecture
                  </h3>
                  <p className="text-primary/65 text-sm mt-2">
                    Next.js, React, and motion design.
                  </p>
                </div>
                <Code2 className="text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <div className="group rounded-3xl border border-foreground/10 bg-primary/2 p-8 backdrop-blur-sm hover:bg-foreground/4 transition-all">
              <Terminal
                size={24}
                className="text-emerald-600 dark:text-emerald-400 mb-4"
              />
              <h3 className="font-bold text-emerald-600 dark:text-emerald-400">
                Backend
              </h3>
              <p className="text-xs text-primary/65 mt-2">
                Go, Node.js, and high-concurrency APIs.
              </p>
            </div>

            <div className="group rounded-3xl border border-foreground/10 bg-primary/2 p-8 backdrop-blur-sm hover:bg-foreground/4 transition-all">
              <Cpu
                size={24}
                className="text-purple-600 dark:text-purple-400 mb-4"
              />
              <h3 className="font-bold text-purple-600 dark:text-purple-400">
                Database
              </h3>
              <p className="text-xs text-primary/65 mt-2">
                Administering Postgres, Redis & Mongo.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-purple-600 dark:text-purple-400 mb-8 uppercase tracking-[0.2em]">
                03 // My Work
              </h2>
              <p className="text-primary/65 max-w-md">
                A glimpse into the projects I've worked on
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="text-primary bg-background/5 backdrop-blur-md hover:bg-background border border-foreground/15 transition duration-300 rounded-lg px-8"
            >
              <Link href="/projects">
                Explore All Projects
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <Link
                key={idx}
                href="/projects"
                className="group relative aspect-video overflow-hidden rounded-lg border border-foreground/10 bg-background"
              >
                <div className="absolute inset-0 bg-linear-to-t from-[#292929] via-[#292929]/85 via-40% to-transparent z-10" />

                <div
                  style={{
                    backgroundImage: `url(${project.banner})`,
                  }}
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-115 transition-transform duration-500"
                />

                <div className="absolute bottom-0 left-0 p-4 z-20 space-y-2">
                  <div className="flex gap-1 items-center w-fit md:items-start md:flex-col md:gap-0 ">
                    <img src={project.logo} className="w-10 opacity-85" />

                    <h3 className="text-2xl text-white font-bold">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-white/65 text-sm max-w-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary/65 text-sm">
              Thinking about a project?{' '}
              <a
                href="https://cdn.krzu.me/CV - Kiztu Dev.pdf"
                target="_blank"
                className="text-primary cursor-pointer underline"
              >
                Check my CV
              </a>
            </p>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-foreground/5 bg-linear-to-b from-transparent to-purple-950/10">
          <div className="flex justify-center gap-8 mb-6 text-primary/65">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="hover:text-primary/85 transition-colors flex items-center gap-2 duration-300"
              >
                <Icon icon={link.icon} className="h-5 w-5" />
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-primary/65 text-xs tracking-widest uppercase">
            Made with ❤️ in 🇵🇦
          </p>
        </footer>
      </div>
    </>
  )
}
