import Link from 'next/link'
import { FC } from 'react';
import styles from './Navigation.module.scss'

type navProps = {
    dark : boolean,
};

const Navigation : FC<navProps> = ({dark}:navProps) => {
    const darkModeHome = dark ? styles.home__dark : styles.home;
    const darkModeLink = dark ? styles.links__dark : styles.links;
    const darkHamburger = dark ? "#0984e3" : "white"
    return (
        <div className={styles.navbar}>
            <nav className = {styles.navContainer}>
                <Link href = '/'>
                    <h2 className = {darkModeHome}>Bakhtiar Reza</h2>
                </Link>
                <div className={darkModeLink}>
                    <Link href = '/'>
                        <a>Home</a>
                    </Link>
                    <Link href="/#About">
                        <a>About</a>
                    </Link>
                    <Link href = '/#Experience'>
                        <a>Experience</a>
                    </Link>
                    <Link href = '/#Projects'>
                        <a>Projects</a>
                    </Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22"><g fill={darkHamburger} fillRule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
            </nav>
        </div>
        
    )
}

export default Navigation
