'use client'

import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar } from './sidebar'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <div className="flex w-full items-center">
        <SheetTrigger className="pr-4 md:hidden">
          <Menu />
        </SheetTrigger>
      </div>

      <SheetContent side="left" className="bg-white p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
