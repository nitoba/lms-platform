'use client'

import { ComponentProps } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  icon: LucideIcon
  label: string
} & ComponentProps<typeof Link>

export function SidebarItem({ icon: Icon, label, href, ...props }: Props) {
  const pathname = usePathname()

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-x-2 pl-6 text-sm font-medium text-foreground transition-all duration-300 hover:text-muted-foreground',
        {
          'bg-primary/10 font-bold text-primary hover:bg-primary/5 hover:text-primary/90':
            isActive,
        },
      )}
      {...props}
    >
      <div className="flex items-center gap-2 py-4">
        <Icon
          className={cn('h-5 w-4 text-accent-foreground', {
            'stroke-[3] text-primary': isActive,
          })}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto h-full border-2 border-primary opacity-0 transition-opacity',
          isActive && 'opacity-100',
        )}
      />
    </Link>
  )
}
