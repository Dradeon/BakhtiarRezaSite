import React from 'react'
import { FC } from 'react'
import styles from './Footer.module.scss'


const Footer : FC = () => {
    return (
        <div className = {styles.FooterWrapper}>
            <div className = {styles.FooterBar}>
                <div className = {styles.FooterContainer}>
                    <p><span>© {new Date().getFullYear()}, Bakhtiar Reza</span></p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
