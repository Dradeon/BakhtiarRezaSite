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
                    <h3>My Passion for Programming</h3>
                    <p>&nbsp;&nbsp;
                        I didn't want to be a computer science major in the first place. I originally wanted to major in Computer Engineering because of how fascinated I was with computers. I always watched so many tech influencers talking about the latest graphics card from Nvidia or AMD. I built my first computer when I was 14 and it wasn't very powerful, but it played the games I liked playing back in the day such as Overwatch and Minecraft.
                    </p>
                    <p>
                        &nbsp;&nbsp;
                        Fast forward a couple of years when I first was selecting classes for my junior year of high school where I found AP Computer Science Principles. I took the class and it was very interesting to learn about programming concepts and apps you straight up build on the computer. I built some creative games there and I enjoyed it with some of my friends from class. It inspired me later to take AP Computer Science A where I further learned about the Data Structures and Algorithms using Java. I also explored another language which was Python where I was scripting stuff to do basic tasks on my computer. After I made a study program and a desktop notifier from it, I believed that I could make something out of programming that could impact people's lives.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        I observed throughout my life that technology has played a big role in it, and the influence technology has over us is why it is a good opportunity to utilize it for good. I want to make it so that it provides something better for the user to use. Whether it be big or small.
                    </p>
                    <div className= {styles.ArticleBox}>
                        <h3>My Education Background and Experience</h3>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm currently in my sophomore year of university with a major in Computer Science. I'm currently planning on pursuing a minor in Information Sciences, and Technology as it relates to my major, and I have some interest in doing IT administration.
                        </p>
                        <p></p>
                    </div>
                    <div className={styles.ArticleBox}>
                        <h3>My Career Goals</h3>
                        <p>My current career goals for 2022 is to find an internship before the summer. Now that I have some experience in some programming languages I would like to apply these skills with real world projects at companies.</p>

                    </div>
                    

                    

                    
                </div>
            </div>
            <Footer className = {styles.FooterContainer}/>
        </div>
    )
}

export default AboutPage
