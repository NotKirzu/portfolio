'use client'

import { ProgressProvider } from '@bprogress/next/app'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ProgressProvider
        height="2px"
        color="var(--color-purple-400)"
        options={{ showSpinner: true }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </NextThemesProvider>
  )
}
