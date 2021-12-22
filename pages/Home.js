import {motion, useViewportScroll, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import {FaGithub, FaEnvelope,FaLinkedin} from 'react-icons/fa'

import Image from 'next/image'
import Pfp from '../public/ProfilePicture.png'
import styles from '../styles/Home.module.scss'
import SkillCard from './Components/SkillCard'
import Footer from './Components/Footer'

/** OK so this is just I can do it separately in another file instead of having to do it all in index.js. Makes it more organized this way :) **/
const Home = () => {

    const {showCopied,setShowCopied} = useState(false)
    const {scrollYProgress} = useViewportScroll()
    const animation = useAnimation();
    const {ref,inView} = useInView(
        {
            threshold: 0
        }
    );

    useEffect(() => {
        if(inView){
            animation.start({
                y:0,
                transition:{
                    ease: "easeIn",duration: .5
                },
                opacity: 1
            })
        }
        else{
            animation.start({y:'10vh',opacity:0})
        }
        console.log('Use effect hook, inview = ',inView);
    })

    const handleClick = ()=>{
        navigator.clipboard.writeText('reza.bakhtiar.m@gmail.com')
        alert('Copied')
    }


    return (
        <div>
            <div className = {styles.FrontPiece}>
                <h1 className = {styles.FrontBigText}>Hi I'm Bakhtiar</h1>
                <p>Nice to Meet You!</p>
                <button><a href="/About"><p>Learn More About Me</p></a></button>
            </div>
            
            <div className = {styles.AboutMeSection}>
                <hr/>
                <div className = {styles.aboutMeIntro}>
                    <div className = {styles.aboutMeIntroText}>
                        <h2>A Brief Overview:</h2>
                        <p>I'm currently a sophomore attending Penn State University. My plan is to major in Computer and get a minor in Information Science and Technology. I am always up to solving challenging problems, and I'm always up to learn something new! I want to learn new languages and concepts that aids in my goal of mastering the two areas of programming I want to work on. These two areas would involve the front-end and backend of an application. </p>
                        <p>I'm <strong>currently on the look</strong> for internships to gain more experience in the Software Engineering field. You can look at my <a href = "http://www.linkedin.com/in/bakhtiar-reza-058a73212">Linkedin</a>. If you want to contact me about any opportunities feel free to <a onClick = {handleClick}>Email</a> me! </p>
                    </div>
                    <div className = {styles.PictureContainer}>
                        <Image src = {Pfp} layout = 'responsive' className = 'myPfp'/>
                        <p>That's me! Hello!</p>
                    </div>
                </div>
                
                <div className = {styles.aboutMeSkills}>
                    <h2>My Skills </h2>
                    <p>I have experience with backend langauges such Python and Java to build systems using object oreinted programming. I also have experience developing using frontend UIs with Javascript and several Web Frameworks such as React, SASS, and NextJS.</p>
                    <br/>
                    <h3>Fun Fact: This website was built using the React Framework! (You can use the React Developers Tools Extension to check!)</h3>
                </div>
            </div>
            <motion.div animate = {animation}>
                <div className = {styles.SkillSection} ref = {ref}>
                    <h2>Languages and Frameworks include..</h2>
                    <div className = {styles.SkillContainer}>
                        <div className = {styles.SkillWrapper}>
                            <div className = {styles.griditem}><SkillCard Language = "Javascript"></SkillCard></div>
                            <div className = {styles.griditem}><SkillCard Language = "React"></SkillCard></div>
                            <div className = {styles.griditem}><SkillCard Language = "Python"></SkillCard></div>
                            <div className = {styles.griditem}><SkillCard Language = "Sass"/></div>
                        </div>
                    </div>
                </div>
            </motion.div>

            
            <Footer/>

        </div>
        
    )
}

export default Home
