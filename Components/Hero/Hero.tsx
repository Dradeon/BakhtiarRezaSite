import {FC} from 'react';

import Image from 'next/image'
import Navigation from "../Navigation/Navigation"
import styles from '../Home/Home.module.scss'

const Hero : FC = () => {
  return (
    <div className = {styles.Home__HeroSection}>
            <Navigation dark = {false}/>
            <div className = {styles.HeroSection__Hero}>
                
                <div className={styles.Hero__HeroText}>
                    <h1>Bring a Great Frontend Experience.</h1>
                    <h1>Alongside a Reliable Backend.</h1>
                    <p>With Me, Bakhtiar Reza</p>
                    <div className={styles.HeroText__HeroButtons}>
                        <a href='#'>My Projects</a>
                        <a href='#'>Contact Me</a>
                    </div>
                </div>

                <div className={styles.Hero__HeroImage}>
                    <Image src = '/HeroPicture.svg' width={800} height={800} alt = "Man drawing on Computer" style={{'width':'100%','margin':'0rem'}}></Image>
                </div>

            </div>
        </div>
  )
}

export default Hero