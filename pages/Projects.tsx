import Link from 'next/link'
import Header from "../Components/Header/Header"
import Navigation from "../Components/Navigation/Navigation"
import Footer from "../Components/Footer/Footer"
import styles from '../styles/Projects.module.scss'
import projectData from '../Data/ProjectData'
import { ProjectCard } from "../Components/ProjCard/ProjectCard"


var projectList = projectData.Projects

const Projects = () => {


    return (
        <>
            <Header title = "Bakhtiar Reza | Projects" description = "Projects Made By Bakhtiar" index = "noindex, nofollow" />
            <Navigation dark={true}/>
            <h1 className = {styles.ProjectsPageTitle}>Projects</h1>
            
            <div className={styles.ProjectWrapper}>
                <div className = {styles.ProjectGrid}>
                    {projectList.map(project => {return (<ProjectCard name = {project['Name']} date={project['Date']} desc={project['ShortDesc']} thumbnail={project['Thumbnail'] ? project['Thumbnail'] : '/project_thumbnails/DefaultImage.png'} github = {project.Github} link = {project.LivePreview} id = {project.id} key = {project.id}/>)})}
                </div>
            </div>
            <Footer dark={false}/>
        </>
    )
}

export default Projects
