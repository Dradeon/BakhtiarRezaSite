import { useRouter } from 'next/router'
import Image from 'next/image'
import Header from '../../Components/Header'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'
import styles from '../../styles/ProjectDetails.module.scss'
import placeholder from '../../public/ProjectPreviewNotAvailable.png'
import projectData from '../../Data/ProjectData'
import {FaReact, FaHtml5, FaVuejs, FaPython, FaJava, FaNode} from 'react-icons/fa'
import {SiNextdotjs, SiSass, SiJavascript, SiExpress} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'

const icons = {
  'React':<FaReact size='40px'/>,
  'NextJS':<SiNextdotjs size='40px'/>,
  'Sass': <SiSass size='40px'/>,
  'HTML': <FaHtml5 size='40px'/>,
  'VueJS': <FaHtml5 size='40px'/>,
  'Python': <FaPython size='40px'/>,
  'Java': <FaJava size='40px'/>,
  'Javascript':<SiJavascript size = '30px'/>,
  'SQL': <AiOutlineConsoleSql size = '40px'/>,
  'NodeJS': <FaNode size = '40px'/>,
  'Express': <SiExpress size = '40px'/>

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
      <div className = {styles.ProjWrapper}>
          {project['Thumbnail'] ? <Image className = {styles.Thumbnail} src = {project['Thumbnail']} width='1920' height ='1080'/>: <Image className = {styles.Thumbnail} src = {placeholder} width='1080' height ='1080'/>}
          <hr className = {styles.divider}/>
          <div className = {styles.ProjectInfo}>
              <h1 className = {styles.ProjName}>{project['Name']}</h1>
              <h2 className = {styles.ProjDate}>{project['Date']}</h2>
              <p className = {styles.ProjDesc}>{project['Desc']}</p>
              <h2 className = {styles.ProjSkillTitle}>Applied Skills:</h2>
              <div className = {styles.Skills}> 
                  {project['Skills'].map((skill) =>{
                    return <div className = {styles.Skill} key={skill}>
                        {icons[skill]}
                        <p>{skill}</p>
                    </div>
                  })}
                  </div>
          </div>
      </div>
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