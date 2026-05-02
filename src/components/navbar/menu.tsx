import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Icon } from '@iconify/react'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const PAGES = [
  {
    name: 'Home',
    href: '/',
    icon: 'material-symbols:home-rounded',
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: 'solar:box-bold',
  },
]

const LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/NotKirzu',
    icon: 'charm:github',
  },
  {
    name: 'Ko-Fi',
    href: 'https://ko-fi.com/Kirzu',
    icon: 'simple-icons:kofi',
  },
  {
    name: 'PayPal',
    href: 'https://paypal.me/KzRick',
    icon: 'hugeicons:paypal',
  },
  {
    name: 'AirTM',
    href: 'https://airtm.me/kirzu',
    icon: 'tabler:cash-banknote-filled',
  },
]

export default function NavbarMenu() {
  const buttonStyle =
    'flex items-center gap-4 w-full px-6 py-2 text-sm font-medium text-primary/55 hover:text-primary hover:bg-foreground/5 transition duration-300'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <Icon
            icon="mingcute:menu-fill"
            width="16"
            height="16"
            color="currentColor"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="text-nowrap">
          {PAGES.map((page) => (
            <Link key={page.name} href={page.href} className={buttonStyle}>
              <Icon
                icon={page.icon}
                width="24"
                height="24"
                color="currentColor"
              />
              <span className="font-medium text-md --font-geist">
                {page.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-4 my-2 h-px bg-white/15" />

        <div>
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              className={cn(buttonStyle, 'justify-between')}
            >
              <div className="flex gap-4 items-center">
                <Icon
                  icon={link.icon}
                  width="24"
                  height="24"
                  color="currentColor"
                />
                <span className="font-medium text-md --font-geist">
                  {link.name}
                </span>
              </div>

              <Icon
                icon="eva:external-link-outline"
                width="16"
                height="16"
                color="currentColor"
              />
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
