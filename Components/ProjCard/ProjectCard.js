import React, {useState} from 'react'
import {AiOutlineGithub, AiOutlineLink} from 'react-icons/ai'


import styles from './ProjectCard.module.scss'

export const ProjectCard = ({name,date,desc,thumbnail, github, link, id}) => {
  const hidelinks = !(github || link) ? {'height':'0','margin':'0','padding':'0'} : {}
  return (
        <div className={styles.CardProject} onClick={() => {location.assign(`/project/${id}`)}}>
          <div className={styles.ProjectThumbnail}>
            <img src = {thumbnail} ></img>
          </div>
          <div className={styles.ProjectInfo}>
              <h2 className={styles.ProjectName}>{name}</h2>
              <p className={styles.ProjectDate}>{date}</p>
              <p className={styles.ProjectDescription}>{desc}</p>
              <div className={styles.ProjectLinks} style = {hidelinks}>
                {github ? <a href={github}><AiOutlineGithub size={'100px'}/></a> : <a href="#" style={{'visibility':'hidden'}}><AiOutlineGithub size={'100px'}/></a>}
                {link ? <a href={link}><AiOutlineLink size={'100px'}/></a> : <a href="#" style={{'visibility':'hidden'}}><AiOutlineLink size={'100px'}/></a>}
              </div>
          </div>
        </div>
      
  )
}
