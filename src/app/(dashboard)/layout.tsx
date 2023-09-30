import { PropsWithChildren } from 'react'
import { Sidebar } from './_components/sidebar/sidebar'
import { Navbar } from './_components/navbar/navbar'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-56">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex">
        <Sidebar />
      </div>
      <main className="h-full pt-[80px] md:ml-56">{children}</main>
    </div>
  )
}
