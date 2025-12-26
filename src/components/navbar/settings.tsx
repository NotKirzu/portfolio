'use client'

import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import { Button } from '../ui/button'
import { Icon } from '@iconify/react'

export default function NavbarSettings() {
  const buttonStyle =
    'flex items-center gap-4 w-full px-6 py-2 text-sm font-medium text-foreground/85 hover:text-foreground hover:bg-foreground/5 transition duration-300 cursor-pointer'

  const { theme, setTheme } = useTheme()

  const isDarkMode = useMemo(() => {
    if (theme === 'system')
      return window.matchMedia('(prefers-color-scheme: dark)').matches

    return theme === 'dark'
  }, [theme])

  return (
    <Button
      variant="secondary"
      onClick={setTheme.bind(null, isDarkMode ? 'light' : 'dark')}
    >
      <Icon
        icon={isDarkMode ? 'lucide:moon' : 'lucide:sun'}
        width="16"
        height="16"
        color="currentColor"
      />
      <span className="hidden md:block font-medium text-md --font-geist">
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </span>
    </Button>
  )
}
