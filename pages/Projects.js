import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import styles from '../styles/Projects.module.scss'
import projectData from '../Data/ProjectData'
import {FaGithub} from 'react-icons'

var projectList = projectData.Projects

const Projects = () => {
    
    const handleClick = (Link) => {
        
    }

    return (
        <div className = {styles.ProjectContainer}>
            <Header title = "Bakhtiar Reza | Projects" description = "Projects Made By Bakhtiar" index = "noindex, nofollow" />
            <Navigation/>
            <h1 className = {styles.ProjectsPageTitle}>My Projects</h1>
            {projectList.map(project => {
                 return (<div key = {project.name}>
                    <div>
                        <h1>{project.Name}</h1>
                        <p>{project.Date}</p>
                    </div>
                    <p>{project.Desc}</p>
                    <button><a target= '_blank' href = {project.Github}>Source Code</a></button>
                </div>
            )})}
            <Footer/>
        </div>
    )
}

export default Projects
