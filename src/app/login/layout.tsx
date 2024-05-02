import React, { FC, PropsWithChildren } from 'react'

const UsersLayout: FC<PropsWithChildren> = ({children}) => {

  return (
    <div>
        <div>Encabezado LOGIN</div>
    
    <main>{children}</main>
    
    <div>Pie de pagina LOGIN</div>
    </div>
  )
}

export default UsersLayout