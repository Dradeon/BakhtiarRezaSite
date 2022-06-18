import {motion, useViewportScroll, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect, useId, useState } from 'react'


import Image from 'next/image'
import Header from '../Components/Header'
import Navigation  from '../Components/Navigation'
import styles from '../styles/Home.module.scss'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import SkillItem from '../Components/SkillItem'
import expData from '../Data/ExperienceData'
import projData from '../Data/SkillData'

const experiences = expData.values;
const skills = projData.values;

const Home = () => {

    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const id = useId();

    const {ref,inView} = useInView(
        {
            threshold: .55
        }
    );

    useEffect(() => {
        if(inView){
            animation1.start({
                y: 0,
                transition:{
                    ease: "easeIn",duration: .5
                },
                opacity: 1
            });
            setTimeout(() => {
                animation2.start({
                    y: 0,
                    transition:{
                        ease: "easeIn",duration: .5
                    },
                    opacity: 1
                });
            }, 300);
            
            setTimeout(() => {
                animation3.start({
                    y: 0,
                    transition:{
                        ease: "easeIn",duration: .5
                    },
                    opacity: 1
                });
            }, 600);
            
        }
        else{
            animation1.start({y: '10vh',opacity:0})
            animation2.start({y: '10vh',opacity:0})
            animation3.start({y: '10vh',opacity:0})
        }
        // console.log('Use effect hook, inview = ',inView);
    })

    return (
        <>
            <Header title = "Bakhtiar Reza | Home" description = "Home for Bakhtiar Reza Website" index = "index, follow"/>
            
            <div className = {styles.Home__HeroSection}>
                <Navigation/>
                
                <div className = {styles.HeroSection__Hero}>

                    <div className={styles.Hero__HeroText}>
                        <h1>Bring a Great Frontend Experience.</h1>
                        <h1>Alongside a Reliable Backend.</h1>
                        <p>With Me, Bakhtiar Reza</p>
                        <div className={styles.HeroText__HeroButtons}>
                            <a href='#'>My Projects</a>
                            <a href='#'>Contact Me</a>
                        </div>
                    </div>

                    <div className={styles.Hero__HeroImage}>
                        <Image src = '/HeroPicture.svg' layout = 'responsive' width={'800px'} height={'800px'}></Image>
                    </div>

                </div>

            </div>
            
            <div className = {styles.Home__AboutMe}>

                

                <article className = {styles.AboutMe__ArticleSection}>
                    <section>
                        <h1>A Brief Intro</h1>
                        <p>I'm currently a sophomore attending Penn State University. My plan is to major in Computer and get a minor in Information Science and Technology. I am always up to solving challenging problems, and I'm always up to learn something new! I want to learn new languages and concepts that aids in my goal of mastering the two areas of programming I want to work on. These two areas would involve the front-end and backend of an application. </p>
                    </section>
                
                    <section>
                        <h1>My Skills </h1>
                        <p>I experience in the Python and Java through University coursework. I mainly was to use them for creating algorithms and data structures. Aside from backend languages I also have experience using frontend languages. I mainly use Javascript alongside a web framework like React to create the frontend of my website.</p>
                        <p>You can learn more about me in the About Page or via my <a href="https://docs.google.com/document/d/1xrzYRh88AQ7zkuq3CKKo8Dp9O2yU8l3QRcS3nuU0lyI/edit?usp=sharing" target="_blank">resume</a>.</p>
                    </section>
                </article>
                
                <div className={styles.AboutMe__Profile}>
                    <Image src={'/ProfilePicture.png'} width='800px' height='800px'/>
                </div>
            </div>

            

            <div className={styles.Home__RelevantSkills}>
                <h1>Relevant Skills</h1>
                <div className={styles.RelevantSkills__SkillsGrid}>
                    {skills.length > 0 ? skills.map(skill =>{
                        return <div className={styles.SkillsGrid__Skill} key={skill.name}>
                            <div className={styles.icon}><Image src={skill.image} width={'75px'} height={'75px'} /></div>
                            <h2>{skill.name}</h2>
                        </div>
                    }): <></>}
                </div>
            </div>
            
            <div className={styles.Home__Strengths}>
                <div className = {styles.Strengths__StrengthContainer}>
                    <h1>My Personal Strengths</h1>
                    
                    <div className = {styles.StrengthContainer__SkillRow} ref = {ref}>
                            <motion.div animate = {animation1}>
                                <SkillItem skillName={"Fullstack Knowledge"} />
                            </motion.div>
                            <motion.div animate = {animation2}>
                                <SkillItem skillName={"Great Communicator"}/>
                            </motion.div>
                            <motion.div animate = {animation3}>
                                <SkillItem skillName={"Project Experience"}/>
                            </motion.div>
                    </div>
                </div>
            </div>

            <div className={styles.Home__SkillsAndExperience}>
                {/**<h1 id ="Experience">Experience:</h1>
                <div className={styles.Home__Experience}>
                    {experiences.length > 0 ? experiences.map(job => {
                        return <div className="JobCard" key = {job.Company}>
                        <div className="JobCard-Content">
                            <h2>{job.Company}</h2>
                            <div className="JobCard-Content-TitleDate">
                            <h3 className="JobCard-Content-TitleDate-Title">{job.Position}</h3>
                            <h4 className="JobCard-Content-TitleDate-Date">{job.Date}</h4>
                            </div>
                            <ul>
                            {job.Tasks.length > 0 ? job.Tasks.map(task => {
                                return <li key={id}>{task}</li>
                            }):<></>}
                            </ul>
                        </div>
                        <hr></hr>
                        </div>
                    }) : <></>}
                </div>**/}

                
            </div>

            <Contact/>

            <Footer/>

        </>
        
    )
}

export default Home
