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
                    <p>© {new Date().getFullYear()}, Bakhtiar Reza</p>
                    <Link href = '/changelog'>Changelog</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
