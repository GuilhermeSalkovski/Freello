'use client'

import { Button } from './ui/button'
import { Grip } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'

export function Header() {
  return (
    <header className="flex h-12 w-screen items-center justify-between bg-neutral-700 px-2">
      <nav className="flex items-center gap-2 bg-neutral-700">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="hover:bg-neutral-500"
        >
          <Grip className="bg-transparent text-neutral-300" />
        </Button>
        <Button
          variant={'ghost'}
          size={'lg'}
          className="px-2 text-neutral-300 hover:bg-neutral-500"
        >
          Freello
        </Button>
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Área de Trabalho</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div>
        <button> Blob</button>
        <button> Blob2</button>
      </div>
    </header>
  )
}
