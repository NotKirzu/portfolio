'use client'

import { Icon } from '@iconify/react'

import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Error() {
  const router = useRouter()

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex shrink-0 justify-center">
        <Icon
          icon="feather:alert-triangle"
          className="h-12 text-purple-600 dark:text-purple-400 w-auto"
        />
      </div>

      <div className="py-4 text-center">
        <div className="mt-2 text-4xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tight sm:text-5xl">
          Oh, no
        </div>
        <div className="mt-8 text-md font-semibold text-primary">
          This place isn't safe
          <br />
          You should go back to where you came from
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="bg-background/65 hover:bg-foreground/5 border-foreground/5 border backdrop-blur-md"
          >
            <Icon icon="feather:arrow-left" className="h-5 w-5" />
            Back
          </Button>

          <Link href="/">
            <Button
              variant="ghost"
              className="bg-background/65 hover:bg-foreground/5 border-foreground/5 border backdrop-blur-md"
            >
              <Icon icon="feather:home" className="h-5 w-5" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
