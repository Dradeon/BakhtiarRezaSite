import Link from 'next/link'
const Navigation = () => {
    return (
        <div id = "navbar">
            <nav className ="navContainer">
                <Link href = '/'>
                    <h2 className = "home">Bakhtiar Reza</h2>
                </Link>
                <div className = "links">
                    <Link href = '/About'>
                        <a>About</a>
                    </Link>
                    <Link href = '/About#Experience'>
                        <a>Career</a>
                    </Link>
                    <Link href = '/Projects'>
                        <a>Projects</a>
                    </Link>
                </div>
            </nav>
        </div>
        
    )
}

export default Navigation
