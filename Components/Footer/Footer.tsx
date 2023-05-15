import React from 'react'
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
                    <p>© 2023, Bakhtiar Reza</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
