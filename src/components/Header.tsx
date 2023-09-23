'use client'

import {
  Bell,
  Grip,
  HelpCircle,
  KanbanSquare,
  PlusIcon,
  User,
} from 'lucide-react'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Command, CommandInput } from './ui/command'
import { Avatar } from './ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

interface Project {
  id: number
  name: string
  icon?: string | null
  isCurrentProject: boolean
}

const userProjects: Project[] = [
  {
    id: 1,
    name: 'Sonho de ser Dev',
    icon: null,
    isCurrentProject: true,
  },
  {
    id: 2,
    name: 'Jogo em Typescript: Quartzo',
    icon: null,
    isCurrentProject: false,
  },
  {
    id: 3,
    name: 'Perfil do Tinder do Fernando',
    icon: null,
    isCurrentProject: false,
  },
]

export function Header() {
  return (
    <header className="flex h-12 w-screen items-center justify-between bg-neutral-700 px-2 text-neutral-300">
      <nav className="flex items-center gap-2 text-sm">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="hover:bg-neutral-500 "
        >
          <Grip className="bg-transparent " />
        </Button>
        <Button
          variant={'ghost'}
          size={'lg'}
          className="px-2 hover:bg-neutral-500 hover:text-neutral-100"
        >
          <div className="flex gap-1 font-bold">
            <KanbanSquare size={18} />
            <span>Freello</span>
          </div>
        </Button>
        <NavigationMenu className="rounded-md hover:bg-neutral-500">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Área de trabalho</NavigationMenuTrigger>
              <NavigationMenuContent className="p-6  lg:w-72">
                <div>
                  <h2 className="border-t-1">
                    <strong>Suas Áreas de trabalho</strong>
                  </h2>
                  {userProjects.map((project) => (
                    <h1 key={project.id}>{project.name}</h1>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className="rounded-md hover:bg-neutral-500">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recente</NavigationMenuTrigger>
              <NavigationMenuContent className="p-6  lg:w-72">
                <div>
                  <h2 className="border-t-1">
                    <strong>Suas Áreas de trabalho</strong>
                  </h2>
                  {userProjects.map((project) => (
                    <h1 key={project.id}>{project.name}</h1>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className="rounded-md hover:bg-neutral-500">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mais</NavigationMenuTrigger>
              <NavigationMenuContent className="p-6  lg:w-72">
                <div>
                  <h2 className="border-t-1">
                    <strong>Suas Áreas de trabalho</strong>
                  </h2>
                  {userProjects.map((project) => (
                    <h1 key={project.id}>{project.name}</h1>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={'ghost'}
              size={'icon'}
              className="h-3 w-3 rounded-sm bg-blue-500 p-4 hover:bg-blue-400"
            >
              <div className="bg-transparent">
                <PlusIcon size={20} />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Criar um quadro</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <div className="flex justify-between gap-4">
        <Command className="h-9 rounded-lg border shadow-md">
          <CommandInput placeholder="Pesquisar" />
        </Command>
        <button className="rounded-full hover:bg-neutral-500">
          <Bell />
        </button>

        <button className="rounded-full hover:bg-neutral-500">
          <HelpCircle size={20} />
        </button>

        <button className="rounded-full hover:bg-neutral-500">
          <Avatar>
            <AvatarImage src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  )
}
