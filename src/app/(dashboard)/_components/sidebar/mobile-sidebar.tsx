import { Menu } from 'lucide-react'
import { UserNav } from '../navbar/user-nav'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar } from './sidebar'

export async function MobileSidebar() {
  return (
    <Sheet>
      <div className="flex w-full items-center justify-between md:justify-end">
        <SheetTrigger className="pr-4 md:hidden ">
          <Menu />
        </SheetTrigger>
        <UserNav />
      </div>

      <SheetContent side="left" className="bg-white p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
