import React, { FC, ReactElement } from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

interface LayoutProps {
    children: ReactElement
}

const Layout: FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <>
        <Navigation dark={true}/>
        <main>{children}</main>
        <Footer dark={false}/>
    </>
  )
}

export default Layout