import {FC} from 'react';
import Image from 'next/image'
import styles from './Hero.module.scss'

const Hero : FC = () => {
  return (
    <div className = {styles.Home__HeroSection}>
            <div className = {styles.HeroSection__Hero}>
                
                
                <div className={styles.Hero__HeroImage}>
                    <Image src = '/HeroPicture.svg' width={700} height={700} alt = "Man drawing on Computer" style={{'width':'100%','margin':'0rem','height':'auto'}}></Image>
                </div>
                <div className={styles.Hero__HeroText}>
                    <h1>Bring a Great Frontend Experience.</h1>
                    <h1>Alongside a Reliable Backend.</h1>
                    <p>With Me, Bakhtiar Reza</p>
                    <div className={styles.HeroText__HeroButtons}>
                        <a target='_blank' href='https://drive.google.com/file/d/14nVL9h3in3-TTXEK89fVkMB_4sGuYpd-/view?usp=sharing'>My Resume</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero