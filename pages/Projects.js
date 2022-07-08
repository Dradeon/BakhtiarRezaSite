import Header from "../Components/Header/Header"
import Navigation from "../Components/Navigation/Navigation"
import Footer from "../Components/Footer/Footer"
import styles from '../styles/Projects.module.scss'
import projectData from '../Data/ProjectData'
import { ProjectCard } from "../Components/ProjCard/ProjectCard"


var projectList = projectData.Projects

const Projects = () => {
    
    const handleClick = (Link) => {
        
    }

    return (
        <>
            <Header title = "Bakhtiar Reza | Projects" description = "Projects Made By Bakhtiar" index = "noindex, nofollow" />
            <Navigation dark={true}/>
            <h1 className = {styles.ProjectsPageTitle}>My Projects:</h1>
            
            <div className={styles.ProjectWrapper}>
                <div className = {styles.ProjectGrid}>
                    {projectList.map(project => {return (<ProjectCard Project={project} key = {project['id']}/>)})}
                </div>
            </div>

            
            
            <Footer/>
        </>
    )
}

export default Projects
