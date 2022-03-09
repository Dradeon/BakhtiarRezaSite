import {motion, useViewportScroll, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import {FaGithub, FaEnvelope,FaLinkedin} from 'react-icons/fa'

import Image from 'next/image'
import Pfp from '../public/ProfilePicture.png'
import styles from '../styles/Home.module.scss'
import SkillCard from './Components/SkillCard'
import Footer from './Components/Footer'

/** OK so this is just here so I can do it separately in another file instead of having to do it all in index.js. Makes it more organized this way :) **/
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
        // console.log('Use effect hook, inview = ',inView);
    })

    const handleClick = ()=>{
        navigator.clipboard.writeText('reza.bakhtiar.m@gmail.com')
        alert('Email copied to your clipboard!')
    }

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/bakhtiar-reza/","_blank")
        console.log(`Went to LinkedIn`);
        return false;
    }

    const goToGithub = () => {
        window.open("https://github.com/Dradeon","_blank")
        console.log("Went to Github")
    }



    return (
        <>
            <div className = {styles.FrontPiece}>
                <h1 className = {styles.FrontBigText}>Hi I'm Bakhtiar</h1>
                <p>Nice to Meet You!</p>
            </div>

            <div className = {styles.AboutMeSection}>
                <hr/>
                <div className={styles.PictureContainer}>
                    <Image src={Pfp} layout='intrinsic' objectFit='cover'></Image>
                    <p>There's me! Hello!</p>
                </div>
                <div className = {styles.aboutMeIntro}>
                    <div className = {styles.aboutMeIntroText}>
                        <h2>A Brief Intro</h2>
                        <p>I'm currently a sophomore attending Penn State University. My plan is to major in Computer and get a minor in Information Science and Technology. I am always up to solving challenging problems, and I'm always up to learn something new! I want to learn new languages and concepts that aids in my goal of mastering the two areas of programming I want to work on. These two areas would involve the front-end and backend of an application. </p>
                        <p>I'm <strong> not currently looking</strong> for any internships at the moment as I look forward to my internship this upcoming summer. Though, if you want to contact me about any opportunities for the 2023 Summer feel free to <a title='Click me to copy my email  to your dashboard.' onClick = {handleClick}>email</a> me! </p>
                    </div>
                </div>
                
                <div className = {styles.aboutMeSkills}>
                    <h2>My Skills </h2>
                    <p>I experience in the Python and Java through University coursework. I mainly was to use them for creating algorithms and data structures. Aside from backend languages I also have experience using frontend languages. I mainly use Javascript alongside a web framework like React to create the frontend of my website.</p>
                    <p>For a detailed summary about my education and experience you can visit my LinkedIn Profile using the button below.</p>
                    <div className={styles.ListofButtons}>
                        <button type = 'button' onClick={goToLinkedIn} style = {{backgroundColor:'#0984e3'}}>
                            <FaLinkedin className='icon' color={'white'} size={'40px'}/>
                            <p>LinkedIn</p>
                        </button>
                        <button type = 'button' onClick={goToGithub} style = {{backgroundColor:'black'}}>
                            <FaGithub className='icon' color={'white'} size={'40px'}/>
                            <p>Github</p>
                        </button>
                    </div>
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

        </>
        
    )
}

export default Home
