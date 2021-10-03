import Link from 'next/link'
const Navigation = () => {
    return (
        <div>
            <nav>
                <Link href = '/'>
                    <h2 className = "HomeButton">Bakhtiar Reza</h2>
                </Link>
                <ul className = 'Links'>
                <li>
                    <Link href = '/About'>
                    <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/Career'>
                    <a>Career</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/Projects'>
                    <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href = '/Contact'>
                    <a>Contact</a>
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
