import { useRouter } from 'next/router'
import Image from 'next/image'
import Header from '../../Components/Header'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'
import styles from '../../styles/ProjectDetails.module.scss'
import placeholder from '../../public/ProjectPreviewNotAvailable.png'
import projectData from '../../Data/ProjectData'
import {FaReact, FaHtml5, FaVuejs, FaPython, FaJava, FaNode, FaGithub} from 'react-icons/fa'
import {SiNextdotjs, SiSass, SiJavascript, SiExpress} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'

const iconSize = '30px'
const icons = {
  'React':<FaReact size={iconSize}/>,
  'NextJS':<SiNextdotjs size={iconSize}/>,
  'Sass': <SiSass size={iconSize}/>,
  'HTML': <FaHtml5 size={iconSize}/>,
  'VueJS': <FaHtml5 size={iconSize}/>,
  'Python': <FaPython size={iconSize}/>,
  'Java': <FaJava size={iconSize}/>,
  'Javascript':<SiJavascript size = '30px'/>,
  'SQL': <AiOutlineConsoleSql size={iconSize}/>,
  'NodeJS': <FaNode size={iconSize}/>,
  'Express': <SiExpress size={iconSize}/>
}

const projectList = projectData.Projects

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const filteredProjects = projectList.filter((project) => {return project['id'] == pid})
  const project = filteredProjects[0]

  return <>
    <Header/>
    <Navigation/>
    <main className = {styles.ProjMain}>
      {
      project ?
      <div className = {styles.ProjWrapper}>
          {project['Thumbnail'] ? <Image className = {styles.Thumbnail} src = {project['Thumbnail']} width='1920' height ='1080'/>: <Image className = {styles.Thumbnail} src = {placeholder} width='1080' height ='1080'/>}
          <hr className = {styles.divider}/>
          <div className = {styles.ProjectInfo}>
              <h1 className = {styles.ProjName}>{project['Name']}</h1>
              <h2 className = {styles.ProjDate}>{project['Date']}</h2>
              <p className = {styles.ProjDesc}>{project['Desc']}</p>
              <h2 className = {styles.ProjSkillTitle}>Applied Skills</h2>
              <div className = {styles.Skills}> 
                  {project['Skills'].map((skill) =>{
                    return <div className = {styles.Skill} key={skill}>
                        {icons[skill]}
                        <p>{skill}</p>
                    </div>
                  })}
              </div>
          </div>
          {project['Github'] ? 
          <div>
            <h2>Github</h2>
            <button className={styles.GithubButton}><a href={project['Github']} target='_blank'>
              <FaGithub size={'30px'} style={{'color':'white'}}/>
              <p>View Code</p>
              </a></button>
          </div>
          : {}}
      </div>
      : <div className = {styles.errorPage}>
          <p>Oops! This page doesn't exist!</p>
        </div>}
    </main>
    <Footer/>
  </>
}

export default Post

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}