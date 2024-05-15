import styles from './FeaturedProjects.module.scss'
import projectInfo from '../../Data/ProjectData'
import { projectDataType } from '../../Data/Types/ProjectType'
import { ProjectCard } from '../ProjCard/ProjectCard'
import { FC } from 'react'




type FeatureProjectsProps = {
    ids: number[]
}

const FeaturedProjects : FC<FeatureProjectsProps> = ({ids}) => {
    const featuredProjects: projectDataType[] = projectInfo.Projects.filter((project) => {
        for(let i = 0; i < 3; i++){
            if (ids[i] == project.id){
                return true;
            }
        }
        return false;
    })
    
  return (
    <div className={styles.FeaturedProjects} id = "Projects">
        <h1>Featured Projects</h1>
        <div className={styles.projectGrid}>
            {
                featuredProjects.map(project => {
                    return (<ProjectCard name={project.Name} date={project.Date} desc = {project.ShortDesc} thumbnail = {project.Thumbnail} github = {project.Github} link = {project.LivePreview} key={project.id} id={project.id}/>)
                })
            }
        </div>
    </div>
  )
}

export default FeaturedProjects