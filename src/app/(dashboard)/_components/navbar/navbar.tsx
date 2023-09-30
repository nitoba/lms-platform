import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { MobileSidebar } from '../sidebar/mobile-sidebar'
import { UserNav } from './user-nav'
import { NavbarRoutes } from '@/components/navbar-routes'

export async function Navbar() {
  return (
    <header className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
      <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
        <UserNav />
      </Suspense>
    </header>
  )
}
