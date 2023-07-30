import Image from 'next/image'

import styles from './Skills_Experience.module.scss'

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
                        <div className={styles.icon}><Image src={skill.image} width={75} height={75} alt={"something"}/></div>
                        <h2>{skill.name}</h2>
                    </div>
                }): <></>}
            </div>
        </div>

        <div className={styles.Home__SkillsAndExperience}>
            
        </div>
    </>
    
     
  )
}

export default SkillsAndExperience