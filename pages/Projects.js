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
        <div className = {styles.ProjectPageContainer}>
            <Header title = "Bakhtiar Reza | Projects" description = "Projects Made By Bakhtiar" index = "noindex, nofollow" />
            <Navigation/>
            <h1 className = {styles.ProjectsPageTitle}>My Projects</h1>
            {projectList.map(project => {
                 return (<div key = {project.name} className = {styles.ProjectContainer}>
                    <div className = {styles.NameDate}>
                        <h1>{project.Name}:</h1>
                        <p>{project.Date}</p>
                    </div>
                    <div className = {styles.ProjectDescription}>
                        <p>{project.Desc}</p>
                    </div>
                    <div className = {styles.ProjectSkills}>
                        <h3>Skills:</h3>
                        {project.Skills.map(skill => {
                            return (<p>{skill}</p>)
                        })}
                    </div>
                    {project.Github ? <div className = {styles.btnWrapper}>
                        <a target= '_blank' className = {styles.customBtn} href = {project.Github}>Source Code</a>
                    </div>: <></>}
                    <hr/>
                </div>
            )})}
            <Footer/>
        </div>
    )
}

export default Projects
