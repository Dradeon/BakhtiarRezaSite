import Image from 'next/image'

import styles from './Skills_Experience.module.scss'

import projData from '../../Data/SkillData'
import expData from '../../Data/ExperienceData'

const experiences = expData;
const skills = projData.values;

const SkillsAndExperience = () => {
  return (
    <>
        <div className={styles.RelevantSkills} >
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

        <div className={styles.Experience} id="Experience">
            <h1>Experience</h1>
            {experiences.map((experience) => {
                return <div key={experience.Date} className={styles.ExperienceItem}>
                    <div>
                        <div className={styles.Header}>
                            <div className={styles.Title}>
                                <h3>{experience.Company}</h3>
                                <div className={styles.Date}>{experience.Date}</div>
                            </div>
                            <h4>{experience.Position}</h4>
                        </div>
                        <ul>
                            {experience.Tasks.map((task) => {
                                return <li>{task}</li>
                            })}
                        </ul>
                    </div>
                </div>
            })}
        </div>
    </>
    
     
  )
}

export default SkillsAndExperience