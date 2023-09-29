import { PropsWithChildren } from 'react'
import { Sidebar } from './_components/sidebar/sidebar'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex">
        <Sidebar />
      </div>
      {children}
    </div>
  )
}
