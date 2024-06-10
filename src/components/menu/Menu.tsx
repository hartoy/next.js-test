'use client'
import React from 'react'
import { LinkType } from '@/types/link.types'
import { useRouter } from 'next/navigation'

type MenuProps = {
  links: LinkType[]
}

const Menu = ({ links }: MenuProps) => {
  const router = useRouter()

  const onGoToLink = (href: string) => {
    router.push(href)
    router.refresh()
  }

  return (
    <nav className="flex flex-col w-full">
      <ul className="mb-4 w-full">
        {links &&
          links.map((link, index) => (
            <li key={`menu-link-${index}`} className="text-2xl pb-2 w-full hover:bg-blue-400 hover:text-white">
              <div onClick={() => onGoToLink(link.href)} className="p-2 w-full flex cursor-pointer">
                {link.title}
              </div>
            </li>
          ))}
      </ul>
      <button className="button-primary uppercase font-semibold">Postear</button>
    </nav>
  )
}

export default Menu
