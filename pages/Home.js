import {motion, useViewportScroll, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import {FaGithub, FaEnvelope,FaLinkedin} from 'react-icons/fa'

import Image from 'next/image'
import Pfp from '../public/ProfilePicture.png'
import styles from '../styles/Home.module.scss'
import SkillCard from './Components/SkillCard'
import Footer from './Components/Footer'
import ContactsPage from './Contact'

/** OK so this is just here so I can do it separately in another file instead of having to do it all in index.js. Makes it more organized this way :) **/
const Home = () => {

    const {showCopied,setShowCopied} = useState(false)
    const {scrollYProgress} = useViewportScroll()
    const animation = useAnimation();
    const {ref,inView} = useInView(
        {
            threshold: .75
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
        // console.log('Use effect hook, inview = ',inView);
    })

    return (
        <>
            <div className = {styles.Headline}>
                <div className = {styles.Headers}>
                    <h1>Hi I'm Bakhtiar and I study CS</h1>
                    <p>I'm looking to start a career in Software Engineering</p>
                </div>
                <Image className = {styles.coverPicture} src={Pfp} width='360' height='360'></Image>
            </div>
            
            <div className = {styles.AboutMeSection}>
                
                <div className = {styles.aboutMeText}>
                    <h2>A Brief Intro</h2>
                    <p>I'm currently a sophomore attending Penn State University. My plan is to major in Computer and get a minor in Information Science and Technology. I am always up to solving challenging problems, and I'm always up to learn something new! I want to learn new languages and concepts that aids in my goal of mastering the two areas of programming I want to work on. These two areas would involve the front-end and backend of an application. </p>
                </div>
            
                <div className = {styles.aboutMeText}>
                    <h2>My Skills </h2>
                    <p>I experience in the Python and Java through University coursework. I mainly was to use them for creating algorithms and data structures. Aside from backend languages I also have experience using frontend languages. I mainly use Javascript alongside a web framework like React to create the frontend of my website.</p>
                    <p>You can learn more about me in the Abouts Page.</p>
                </div>
            </div>
            
            
                <div className = {styles.SkillSection}>
                    <h2>My Outstanding Qualities</h2>
                    <motion.div animate = {animation}>
                        <div className = {styles.SkillContainer} ref = {ref}>
                            <div className = {styles.SkillWrapper}>
                                <SkillCard skillName={"Frontend/Backend Knowledge"}/>
                                <SkillCard skillName={"Great Communicator and Explainer"}/>
                                <SkillCard skillName={"My Experience in Projects"}/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            

            <ContactsPage/>

            <Footer/>

        </>
        
    )
}

export default Home
