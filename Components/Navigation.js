import Link from 'next/link'
import Image from 'next/image'

const Navigation = ({dark}) => {
    const darkMode = dark ? "__dark" : "";
    const darkHamburger = dark ? "#0984e3" : "white"
    return (
        <div id = "navbar">
            <nav className = "navContainer">
                <Link href = '/'>
                    <h2 className = {"home" + darkMode}>Bakhtiar Reza</h2>
                </Link>
                <div className={'links'+darkMode}>
                    <Link href = '/'>
                        <a>Home</a>
                    </Link>
                    <Link href = '/About'>
                        <a>About</a>
                    </Link>
                    <Link href = '#'>
                        <a>Experience</a>
                    </Link>
                    <Link href = '/Projects'>
                        <a>Projects</a>
                    </Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22"><g fill={darkHamburger} fillRule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
            </nav>
        </div>
        
    )
}

export default Navigation
