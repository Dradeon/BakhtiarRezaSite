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
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;It's kind of a long story as to how it happened. I originally wanted to major in Computer Engineering because of how fascinated I was with computers.
                          I always watched so many tech influencers talking about the latests graphics card from Nvidia or AMD. I built my first computer when I was 14 and it wasn't very powerful, but it played the games I liked playing back in the day such as Overwatch and Minecraft.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Fast forward a couple of years when I first was selecting classes for my junior year at Upper Darby. I wasn't really sure what classes to take. I was looking for some AP Classes to buff out my GPA with and I found Computer Science Principles. I took the class and it was very interesting to learn about programming concepts and apps you straight up build on the computer. I built some creatives games on there and I enjoyed with friends. It inspried later to take AP Computer Science A where I further learned about the Data Structures and Algorithms using Java. I believed that I could make something out of programming rather than become an engineer and just do drawings and CAD all day. It was something I could make on the computer for anyone to see.</p>
                        <p>And that's how I became a Computer Science Major!</p>
                    </div>
                    <div className= {styles.textbox}>
                        <h3>My College Experience so Far</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I defintely started college off to a rocky during the Fall of 2020 due to the Panedemic. Though this didn't stop me from learning the Python Language and the different facets
                            of Computer Science. The most important lesson I learned that year was debugging code when code goes wrong. I learned how execute the code in steps to figure how to fix
                            whenever my certain functions in my data structures goes awry.
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;My second year is better considering that we were having in-person classes now, and I learned a lot more from the classes I was taking this semsester.
                            I developed my personal speaking skills in my Public Speaking Class, and I made actual programs in the Java. I created various programs like a drawing program, course scheduler, and
                            more when I took CMPSC 221.
                        </p>
                    </div>
                    

                    

                    
                </div>
            </div>
            <Footer className = {styles.FooterContainer}/>
        </div>
    )
}

export default AboutPage
