import Link from 'next/link'
import { FC, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import styles from './Navigation.module.scss'

const Navigation : FC = () => {
    const [nav, setNav] = useState<boolean>(false);
    return (
        <>
            <div className={styles.navbar}>
                <nav className = {styles.navContainer}>
                    <Link href = '/'>
                        <h2 className = {styles.home}>Bakhtiar Reza</h2>
                    </Link>
                    <div className={styles.links}>
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
