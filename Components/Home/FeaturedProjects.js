import Image from 'next/image'

import styles from '../../styles/Home.module.scss'
import projectInfo from '../../Data/ProjectData'
import { ProjectCard } from '../ProjCard/ProjectCard'


const FeaturedProjects = ({ids}) => {
    const featuredProjects = projectInfo.Projects.filter((project) => {
        for(let i = 0; i < 3; i++){
            if (ids[i] == project.id){
                return true;
            }
        }
        return false;
    })
    
  return (
    <div className={styles.FeaturedProjects}>
        <h1>Featured Projects</h1>
        <div className={styles.projectGrid}>
            {
                featuredProjects.map(project => {
                    return (<ProjectCard name={project.Name} date={project.Date} desc = {project.ShortDesc} thumbnail = {project.Thumbnail} github = {project.Github} link = {project.LivePreview}/>)
                })
            }
        </div>
        <a className={styles.viewMoreProjects} href='/Projects'>View More Projects <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span></a>
    </div>
  )
}

export default FeaturedProjects