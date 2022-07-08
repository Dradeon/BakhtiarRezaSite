import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Placeholder from '../../public/project_thumbnails/ProjectPreviewNotAvailable.png'

import styles from './ProjectCard.module.scss'

export const ProjectCard = ({Project}) => {
  
  const [preview,setPreview] = useState(Project['Thumbnail']);

  const switching = () => {
    if(preview == Project['Thumbnail']){
      if(Project['AnimatedPreview']){
        setPreview(Project['GIF'])
      }
    }
    else{
      setPreview(Project['Thumbnail'])
    }
  }

  return (
    <Link href = {`/project/${Project["id"]}`}>
      <div className = {styles.CardWrapper}>
          {Project['Thumbnail'] ? <Image src={preview} onMouseEnter = {switching} onMouseLeave = {switching} className = {styles.CardThumbnail} width={480} height={360}/> : <Image src = {Placeholder} className = {styles.CardThumbnail} width={480} height={360}/>}
          <div className = {styles.CardContent}>
              <div className = {styles.ProjectName}>{Project['Name']}</div>
              <div className = {styles.ProjectDate}>{Project['Date']}</div>
              <div className = {styles.ProjectDesc}>{Project['Desc']}</div>
          </div>
      </div>
    </Link>
  )
}
