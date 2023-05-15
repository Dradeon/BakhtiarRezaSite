import Image from "next/image"
import { FC } from "react"

import styles from './Home.module.scss'

const About: FC = () => {
  return (
    <div className = {styles.Home__AboutMe} id = "About">
      <h1>About Me</h1>
        <article className = {styles.AboutMe__ArticleSection}>
            <section>
                <h2>A Brief Intro</h2>
                <p>Hello, my name is Bakhtiar Reza, and I’m currently a junior attending Penn State University. With classroom experience working on backend applications in Python and Java, and my previous internship experience working on a React Application, I have the flexibility to work in the Frontend, Backend, or Fullstack. I'm looking for a Software Engineering Internship working on either the front end or the back end. I have experience working with Typescript/JavaScript, React (Next.js), Node.js, and SQL.</p>
                <p>I was attracted to programming when I was younger since I wanted to solve the different logic challenges associated with programming. Over time I discovered that I enjoyed developing programs and scripts, and I loved watching the results play on the screen. When I got to college, I immediately decided to major in Computer Science, so I could work in the software industry and continue making applications. I started learning various technologies to create my apps and websites. One of the first applications I made was a Python application that would send a desktop notification displaying the current cryptocurrency prices I was tracking every time my computer would start up.</p>
            </section>
        
            <section>
                <h2>My Skills and Previous Experience</h2>
                <p>Most of Python and Java experience came from my courses to have the necessary experience to build the backend for my applications. I participated in a boot camp called DevPSU from the local ACM chapter at Penn State. The students taught me and others how to develop web applications. I then started learning HTML/CSS, JavaScript, and React to create front-end applications for the web. I learned backend database technologies like SQL and MongoDB that I incorporated into some of my projects. One of the projects I made was a small authenticator program that would take the login of a user and verify it with a hashed version of the password stored on my MongoDB database. This project and others allowed me to get my current internship at the Federal Reserve Bank of Philadelphia.</p>
                <p>At the Federal Reserve Bank of Philadelphia, I worked with the Business Technology Solutions team in the Supervision, Regulation, and Crediting Department. Our team was tasked to develop technological solutions to challenge they may face while doing their jobs. I assisted with the developing a React application for RADAR, a group within the SRC. </p>
                <p>You can learn more about me via my <a href="https://docs.google.com/document/d/1xrzYRh88AQ7zkuq3CKKo8Dp9O2yU8l3QRcS3nuU0lyI/edit?usp=sharing" target="_blank">resume</a>.</p>
            </section>

            <section>
              <h2>How to Contact</h2>
              <p>If you're interested in contacting me about any potential opportunities, you can contact me via <a href="https://www.linkedin.com/in/bakhtiar-reza/" rel="noopener" target="_blank">LinkedIn</a> or via <a href="mailto:reza.bakhtiar.m@gmail.com" target="_blank">email</a>.</p>
            </section>
        </article>
    </div>
  )
}

export default About