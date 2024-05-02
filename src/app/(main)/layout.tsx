import Menu from '@/components/menu/Menu'
import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'

const LINKS = [{title: 'Inicio', href:'/'},
    {title: 'Explorar', href:"/explorar"},
    {title: 'Perfil', href:"/mi-perfil"}]

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  console.log('children:', children)


  return (
    <div className="w-full h-full grid grid-cols-12">
      <div className="col-span-3">
        <Menu links={LINKS} />
      </div>

      <main className="col-span-6">
        {children}
        </main>

      <div className="col-span-3">
        Pie de pagina de Main
        </div>
    </div>
  )
}

export default UsersLayout