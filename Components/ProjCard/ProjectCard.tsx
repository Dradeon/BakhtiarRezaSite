import {useRouter} from 'next/router'
import React, {useState, FC} from 'react'
import {AiOutlineGithub, AiOutlineLink} from 'react-icons/ai'


import styles from './ProjectCard.module.scss'

type ProjectCardProps = {
  name: string,
  date: string,
  desc: string,
  thumbnail: string | null,
  github: string | null,
  link ?: string | null,
  id: number
}

export const ProjectCard : FC<ProjectCardProps> = ({name,date,desc,thumbnail, github, link, id}) => {
  const router = useRouter()
  const hidelinks = !(github || link) ? {'height':'0','margin':'0','padding':'0'} : {}
  return (
        <div className={styles.CardProject}>
          <div className={styles.ProjectThumbnail} onClick={() => {router.push(`/project/${id}`)}}>
            <img src = {thumbnail ? thumbnail : ""} ></img>
          </div>
          <div className={styles.ProjectInfo}>
              <div onClick={() => {router.push(`/project/${id}`)}}>
                <h2 className={styles.ProjectName}>{name}</h2>
                <p className={styles.ProjectDate}>{date}</p>
                <p className={styles.ProjectDescription}>{desc}</p>
              </div>
              <div className={styles.ProjectLinks} style = {hidelinks}>
                {github ? <a href={github} target="_blank"><AiOutlineGithub size={'100px'}/></a> : <a href="#" style={{'visibility':'hidden'}}><AiOutlineGithub size={'100px'}/></a>}
                {link ? <a href={link} target="_blank"><AiOutlineLink size={'100px'}/></a> : <a href="#" style={{'visibility':'hidden'}}><AiOutlineLink size={'100px'}/></a>}
              </div>
          </div>
        </div>
      
  )
}
