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
                        <h3>How I got into Computer Science</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;It's kind of a long story as to how it happened. I originally wanted to major in Computer Engineering because of how fascinated I was with computers. I always watched so many tech influencers talking about the latests graphics card from Nvidia or AMD. I built my first computer when I was 14 and it wasn't very powerful but it played the games I liked playing back in the day such as Overwatch and Minecraft.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Fast forward a couple of years when I first was selecting classes for my junior year at Upper Darby. I wasn't really sure what classes to take. I was looking for some AP Classes to buff out my GPA with and I found Computer Science Principles. I took the class and it was very interesting to learn about programming concepts and apps you straight up build on the computer. I built some creatives games on there and I enjoyed with friends. It inspried later to take AP Computer Science A where I further learned about the Data Structures and Algorithms using Java. I believed that I could make something out of programming rather than become an engineer and just do drawings and CAD all day. It was something I could make on the computer for anyone to see.</p>
                        <p>And that's how I became a Computer Science Major!</p>
                    </div>
                    <div className = {styles.Textbox}>
                        <h3>My Education and Programming Background</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm a student studying Computer Science at Pennsylvania State University. My related courses include CMPSC131, CMPSC132, and CMPSC221. I learned various topics such as Python and Java syntax, classes and hierarchies, and various data structures and algorithms.  These courses helped prepare me for the various kind of work I will need to do whenever I go into Software Development.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;My languages includes a year of experience in both Python and Java. I’m also currently looking into other languages such as JavaScript and HTML/CSS. I have done some side projects related to things I was interested in while learning new languages like Javascript and HTML.</p>
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
