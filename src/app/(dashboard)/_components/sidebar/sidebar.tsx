import { Logo } from '@/components/logo'
import { SidebarRoutes } from './sidebar-routes'

export function Sidebar() {
  return (
    <aside className="flex h-full border-separate flex-col overflow-y-auto border-r bg-white shadow-sm">
      <div className="p-6">
        <Logo className="h-16 w-16" />
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
    </aside>
  )
}
