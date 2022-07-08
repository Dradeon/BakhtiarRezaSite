import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
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
