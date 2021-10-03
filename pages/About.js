import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import styles from "../styles/About.module.scss"


const AboutPage = () => {
    return (
        <div>
            <Header title = "Bakhtiar Reza | About" description = "Learn More About Me!" index = "noindex, nofollow" />
            <Navigation/>
            <div className = {styles.AboutMeContent}>
                <h1>So Who Am I Really?</h1>
                <div className = {styles.ArticleBox}>
                    <div className = {styles.Textbox}>
                        <h3>I'm a budding Software Engineer</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I've always to be in the software industry, creating different kind of application that could have an effect on people worldwide. I'm mainly interested in doing Front-end application, but I don't mind doing some backend Java or Python applications.</p>
                    </div>
                    <div className = {styles.Textbox}>
                        <h3>My Education</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm an student studying Computer Science at Pennsyvlania State University. My related courses include CMPSC131, CMPSC132, and CMPSC221.</p>
                    </div>
                    <div className = {styles.Textbox}>
                        <h3>What do I do Outside of Work?</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Well... Aside from doing normal adult things such as buying groceries or doing House Chores. I'm usually play some games every now and then. My favorite games being City Skylines or any rouge-like dungeon game such as Hades. I also like expanding my skillset to use technologies. Currently I'm learning how to use NodeJS!</p>
                    </div>
                    

                    

                    
                </div>
            </div>
            <Footer className = {styles.FooterContainer}/>
        </div>
    )
}

export default AboutPage
