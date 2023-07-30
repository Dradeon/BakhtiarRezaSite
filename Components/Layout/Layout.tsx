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
        <Navigation dark={true}/>
        <main>{children}</main>
        <Footer dark={false}/>
    </div>
  )
}

export default Layout