import React from 'react'
import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer : FC = () => {
    return (
        <div className = {styles.FooterWrapper}>
            <div className = {styles.FooterBar}>
                <div className = {styles.FooterContainer}>
                    <p>© 2021, Bakhtiar Reza</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
