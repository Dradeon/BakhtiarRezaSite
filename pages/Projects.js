import Header from "../Components/Header"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import styles from '../styles/Projects.module.scss'
import projectData from '../Data/ProjectData'
import { ProjectCard } from "../Components/ProjectCard"


var projectList = projectData.Projects

const Projects = () => {
    
    const handleClick = (Link) => {
        
    }

    return (
        <>
            <Header title = "Bakhtiar Reza | Projects" description = "Projects Made By Bakhtiar" index = "noindex, nofollow" />
            <Navigation/>
            <h1 className = {styles.ProjectsPageTitle}>My Projects</h1>
            <div className = {styles.projectWrapper}>
                <div className = {styles.projectGrid}>
                    {projectList.map(project => {return (<ProjectCard Project={project} key = {project['id']}/>)})}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Projects
