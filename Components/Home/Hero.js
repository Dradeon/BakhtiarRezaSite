import Image from 'next/image'

import Navigation from "../Navigation"
import styles from '../../styles/Home.module.scss'

const Hero = () => {
  return (
    <div className = {styles.Home__HeroSection}>
            <Navigation/>
            
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
                    <Image src = '/HeroPicture.svg' layout = 'responsive' width={'800px'} height={'800px'} alt = "Man drawing on Computer"></Image>
                </div>

            </div>

        </div>
  )
}

export default Hero