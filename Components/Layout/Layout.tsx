import React, { FC, ReactElement } from 'react'
import style from './Layout.module.scss'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

interface LayoutProps {
    children: ReactElement
}

const Layout: FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <div className={style.container}>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout