import React from 'react'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.scss'

type FooterProps = {
    dark : boolean
}

const Footer : FC<FooterProps> = ({dark}) => {
    const style = dark ? styles.FooterWrapper_Dark : styles.FooterWrapper;
    return (
        <div className = {style}>
            <div className = {styles.FooterBar}>
                <div className = {styles.FooterContainer}>
                    <p><span>© {new Date().getFullYear()}, Bakhtiar Reza</span>{/**<Link href = '/changelog'>Changelog</Link>**/}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
