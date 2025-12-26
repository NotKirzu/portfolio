'use client'

import { useClick } from '@/lib/click'
import { useEvent } from 'react-use'

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [play] = useClick()

  useEvent('mousedown', () => play())
  useEvent('mouseup', () => play())

  return <>{children}</>
}
