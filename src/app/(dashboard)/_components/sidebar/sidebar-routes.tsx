'use client'
import { BarChart, Compass, Layout, List } from 'lucide-react'
import { SidebarItem } from './sidebar-item'
import { usePathname } from 'next/navigation'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
]

const teacherRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChart,
    label: 'Analystics',
    href: '/teacher/analytics',
  },
]

export function SidebarRoutes() {
  const pathname = usePathname()
  const isTeacherPage = pathname.includes('/teacher')
  const routes = isTeacherPage ? teacherRoutes : guestRoutes
  return (
    <div className="flex w-full flex-col">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          icon={route.icon}
          label={route.label}
        />
      ))}
    </div>
  )
}
