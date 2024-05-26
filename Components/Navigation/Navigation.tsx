import Link from 'next/link'
import { FC, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import styles from './Navigation.module.scss'

interface navProps {
    dark : boolean
}

const Navigation : FC<navProps> = ({dark}:navProps) => {
    const [nav, setNav] = useState<boolean>(false);
    const darkModeHome = dark ? styles.home__dark : styles.home;
    const darkModeLink = dark ? styles.links__dark : styles.links;
    const darkHamburger = dark ? "#0984e3" : "white"
    return (
        <>
            <div className={styles.navbar}>
                <nav className = {styles.navContainer}>
                    <Link href = '/'>
                        <h2 className = {darkModeHome}>Bakhtiar Reza</h2>
                    </Link>
                    <div className={darkModeLink}>
                        <Link href = '/'>
                            Home
                        </Link>
                        <Link href="/#About">
                            About
                        </Link>
                        <Link href = '/#Experience'>
                            Experience
                        </Link>
                        <Link href = '/#Projects'>
                            Projects
                        </Link>
                    </div>
                    <div className={styles.hambutton} onClick={() => setNav(!nav)}>
                        {!nav ? <FaBars color='#0984e3' size={30}/> : <FaTimes color='#0984e3' size={30} />}
                    </div>
                </nav>
            </div>
            {
                nav && 
                <div className={styles.fullNav}>
                    <Link href = '/' onClick={() => setNav(!nav)}>
                        Home
                    </Link>
                    <Link href="/#About" onClick={() => setNav(!nav)}>
                        About
                    </Link>
                    <Link href = '/#Experience' onClick={() => setNav(!nav)}>
                        Experience
                    </Link>
                    <Link href = '/#Projects' onClick={() => setNav(!nav)}>
                        Projects
                    </Link>
                </div>
            }
        </>
    )
}

export default Navigation
