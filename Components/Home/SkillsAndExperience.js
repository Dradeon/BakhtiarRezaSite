import Image from 'next/image'

import styles from '../../styles/Home.module.scss'

import projData from '../../Data/SkillData'
import expData from '../../Data/ExperienceData'

const experiences = expData.values;
const skills = projData.values;

const SkillsAndExperience = () => {
  return (
    <>
        <div className={styles.Home__RelevantSkills} id="Experience">
            <h1>Relevant Skills</h1>
            <div className={styles.RelevantSkills__SkillsGrid}>
                {skills.length > 0 ? skills.map(skill =>{
                    return <div className={styles.SkillsGrid__Skill} key={skill.name}>
                        <div className={styles.icon}><Image src={skill.image} width={'75px'} height={'75px'} /></div>
                        <h2>{skill.name}</h2>
                    </div>
                }): <></>}
            </div>
        </div>

        <div className={styles.Home__SkillsAndExperience}>
            {/**<h1 id ="Experience">Experience:</h1>
             <div className={styles.Home__Experience}>
                {experiences.length > 0 ? experiences.map(job => {
                    return <div className="JobCard" key = {job.Company}>
                    <div className="JobCard-Content">
                        <h2>{job.Company}</h2>
                        <div className="JobCard-Content-TitleDate">
                        <h3 className="JobCard-Content-TitleDate-Title">{job.Position}</h3>
                        <h4 className="JobCard-Content-TitleDate-Date">{job.Date}</h4>
                        </div>
                        <ul>
                        {job.Tasks.length > 0 ? job.Tasks.map(task => {
                            return <li key={id}>{task}</li>
                        }):<></>}
                        </ul>
                    </div>
                    <hr></hr>
                    </div>
                }) : <></>}
            </div>**/}
        </div>
    </>
    
     
  )
}

export default SkillsAndExperience