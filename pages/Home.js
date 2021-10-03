import Image from 'next/image'
import Pfp from '../public/ProfilePicture.png'
import styles from '../styles/Home.module.scss'
import SkillCard from './Components/SkillCard'
import Footer from './Components/Footer'

/** OK so this is just I can do it separately in another file instead of having to do it all in index.js. Makes it more organized this way :) **/
const Home = () => {

    return (
        <div>
            <div className = {styles.FrontPiece}>
                <h1 className = {styles.FrontBigText}>Selfless Visionary</h1>
            </div>
            
            <div className = {styles.AboutMeSection}>
                <hr/>
                <div className = {styles.aboutMeIntro}>
                    <div className = {styles.aboutMeIntroText}>
                        <h2>Hi, the name's Bakhtiar...</h2>
                        
                        <p>I'm currently a Sophomore studying in Computer Science. I attend Pennsylvania State University. I'm a proactive leader in taking on tasks and being proactive to code our world for tomorrow!</p>
                    </div>
                    <div className = {styles.PictureContainer}>
                        <Image src = {Pfp} layout = 'responsive' className = 'myPfp'/>
                    </div>
                </div>
                
                <div className = {styles.aboutMeSkills}>
                    <h2>My Qualifications?</h2>
                    <p>I have experience with backend langauges such Python and Java to build systems using object oreinted programming. I also have experience developing using frontend UIs with Javascript and several Web Frameworks such as React, SASS, and NextJS.</p>
                    <br/>
                    <h3>Fun Fact: This website was built using the React Framework! (You can use the React Developers Tools Extension to check!)</h3>
                </div>


            </div>

            <div className = {styles.SkillSection}>
                <h2>Major Skills include..</h2>
                <div className = {styles.SkillContainer}>
                    <div className = {styles.SkillWrapper}>
                        <div className = {styles.griditem}><SkillCard Language = "Javascript"></SkillCard></div>
                        <div className = {styles.griditem}><SkillCard Language = "React"></SkillCard></div>
                        <div className = {styles.griditem}><SkillCard Language = "Python"></SkillCard></div>
                    </div>
                <h3>And much more..</h3>
                </div>
                
            </div>

            <div className = {styles.PitchSection}>
                <h1>So Are You Ready to Hire Me?</h1> 
                <h3>Contact Information</h3>
                <div className = {styles.ContactInfoWrapper}>
                    <div className = {styles.ContactInfoContainer}>
                        <p><a href = "http://www.linkedin.com/in/bakhtiar-reza-058a73212" target = "_blank">LinkedIn</a></p>
                        <p><a onClick ={console.log('Copied')} href='Contact'>Email</a></p>
                    </div>
                </div>
            </div>
            
            <Footer/>

        </div>
        
    )
}

export default Home
