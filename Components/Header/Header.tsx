import Head from 'next/head'

interface HeaderProps {
    title: string
    description: string
    index: string
}

const Header = ({title,description,index}: HeaderProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name = 'description' content = {description}/>

            <link rel = "Shortcut icon" href = "/favicon.png" type='image/x-icon'/>
            <meta charSet = 'utf-8'/>
            <meta name = 'viewport' content = "width=device-width, initial-scale=1.0"/>
            <meta lang = 'en'/>
            <meta name = 'robots' content = {index}/>
        </Head>
    )
}

export default Header
