'use client'

import { Button } from './ui/button'
import { Grip } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'

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
      <nav className="flex items-center gap-2">
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
          Freello
        </Button>
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Área de trabalho</NavigationMenuTrigger>
              <NavigationMenuContent className="p-6  lg:w-72">
                <div>
                  <h2 className="border-t-1">
                    <strong>Áreas de trabalho atual</strong>
                  </h2>
                  {userProjects.map((project) => (
                    <h1 key={project.id}>{project.name}</h1>
                  ))}
                </div>
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
      </nav>
      <div>
        <button> Blob</button>
        <button> Blob2</button>
      </div>
    </header>
  )
}
