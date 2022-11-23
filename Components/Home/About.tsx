import Image from "next/image"
import { FC } from "react"

import styles from '../../styles/Home.module.scss'

const About: FC = () => {
  return (
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
    </div>
  )
}

export default About