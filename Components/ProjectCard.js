import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Placeholder from '../public/ProjectPreviewNotAvailable.png'


export const ProjectCard = ({Project}) => {
  
  const [preview,setPreview] = useState(Project['Thumbnail']);

  const switching = () => {
    if(preview == Project['Thumbnail']){
      if(Project['AnimatedPreview']){
        setPreview(Project['AnimatedPreview'])
      }
    }
    else{
      setPreview(Project['Thumbnail'])
    }
  }

  return (
    <Link href = {`/project/${Project["id"]}`}>
      <div className = "CardWrapper">
          {Project['Thumbnail'] ? <Image src={preview} onMouseEnter = {switching} onMouseLeave = {switching} className = "CardThumbnail" width={480} height={360}/> : <Image src = {Placeholder} className = "CardThumbnail" width={480} height={360}/>}
          <div className = "CardContent">
              <div className = "ProjectName">{Project['Name']}</div>
              <div className = "ProjectDate">{Project['Date']}</div>
              <div className = "ProjectDesc">{Project['Desc']}</div>
          </div>
      </div>
    </Link>
  )
}
