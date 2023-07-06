import React, { FC, ReactNode } from 'react'

const Layout: FC<{children: ReactNode, classNames?: string}> = ({
    children,
    classNames
}) => {
  return (
    <div className={`${ classNames } md:mx-32 `}>
       { children }
    </div>
  )
}

export default Layout
