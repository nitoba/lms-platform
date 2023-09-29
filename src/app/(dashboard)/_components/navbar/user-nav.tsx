import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOutButton, currentUser } from '@clerk/nextjs'
import Link from 'next/link'

export async function UserNav() {
  const user = await currentUser()
  if (!user) {
    return null
  }

  const currentEmailAddress = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress

  const fallbackUsername = user.firstName
    ? user.firstName
    : currentEmailAddress?.split('@')[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 select-none rounded-full bg-primary/10"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.imageUrl} className="h-full w-full" alt="" />
            <AvatarFallback>{fallbackUsername?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            {user.firstName ? (
              <p className="text-sm font-medium leading-none">
                {user.firstName + ' ' + user.lastName}
              </p>
            ) : (
              <p className="text-sm font-medium leading-none">
                {fallbackUsername}
              </p>
            )}

            <p className="text-xs leading-none text-muted-foreground">
              {currentEmailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings/billing">Billing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings/keys">API Keys</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOutButton>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
