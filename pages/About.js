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
                <h1>Here's What You Should Learn About Me</h1>
                <div className = {styles.ArticleBox}>
                    <div className = {styles.Textbox}>
                        <h3>I'm a budding Software Engineer</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I've always to be in the software industry, creating different kind of application that could have an effect on people worldwide. I'm mainly interested in doing Front-end application, but I don't mind doing some backend Java or Python applications.</p>
                    </div>
                    <div className = {styles.Textbox}>
                        <h3>My Education and Programming Background</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm a student studying Computer Science at Pennsylvania State University. My related courses include CMPSC131, CMPSC132, and CMPSC221. I learned various topics such as Python and Java syntax, classes and hierarchies, and various data structures and algorithms.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;My language includes a year of experience in both Python and Java. I’m also currently looking into other languages such as JavaScript and HTML/CSS.</p>
                    </div>
                    <div className = {styles.Textbox}>
                        <h3>Hobbies and Other Activities</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm involved in some clubs over at Penn State. One of the clubs I am involved in 3D Printing Club. I helped assemble and fix 3D printers. Another clubs that I'm in is the ACM where they were hosting a Dev Bootcamp. The bootcamp teaches students about aspects of software development such as using Github, using Web Frameworks, and different way of developing software features.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm usually play some games every now and then. My favorite games being City Skylines or any rouge-like dungeon game such as Hades. I also like expanding my skillset to use technologies. Currently I'm learning how to use NodeJS!</p>
                    </div>
                    

                    

                    
                </div>
            </div>
            <Footer className = {styles.FooterContainer}/>
        </div>
    )
}

export default AboutPage
