'use client'

import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

export function NavbarRoutes() {
  const pathname = usePathname()
  const router = useRouter()

  const isTeacherPage = pathname.startsWith('/teacher')
  const isPlayerPage = pathname.startsWith('/chapter')

  return (
    <div className="ml-auto flex shrink-0 items-center gap-x-2">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button variant="outline" size="sm">
            <LogOut className="mr-2 h-3 w-3" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={'/teacher/courses'}>
          <Button variant="outline" size="sm">
            Teacher mode
          </Button>
        </Link>
      )}

      <Separator orientation="vertical" className="shrink-1 mx-2 h-5 flex-1" />
      <nav className="flex items-center space-x-6">
        {/* <NavLink className="text-xs font-normal" href="/examples/dashboard">
          Changelog
        </NavLink>
        <NavLink className="text-xs font-normal" href="/examples/dashboard">
          Help
        </NavLink>
        <NavLink className="text-xs font-normal" href="/examples/dashboard">
          Docs
        </NavLink>
        <NavLink className="text-xs font-normal" href="/examples/dashboard">
          Pricing
        </NavLink> */}
      </nav>

      {/* <ModeToggle /> */}
    </div>
  )
}
