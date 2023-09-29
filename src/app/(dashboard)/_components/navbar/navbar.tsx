import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs'
import { MobileSidebar } from '../sidebar/mobile-sidebar'
import { UserNav } from './user-nav'

export async function Navbar() {
  const user = await currentUser()

  const isAuthenticated = !!user
  return (
    <header className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      {/* <div className="flex items-center gap-4">
        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          {isAuthenticated && <NavLink href="/pages">Pages</NavLink>}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Feedback
        </Button>

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
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
          </NavLink>
        </nav>

        <ModeToggle />

        {isAuthenticated && (
          <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
            <UserNav />
          </Suspense>
        )}
      </div> */}
    </header>
  )
}
