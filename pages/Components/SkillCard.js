import Image from 'next/image'
import {FaPython} from 'react-icons/fa'
import {IoMdMicrophone} from 'react-icons/io'
import {AiFillAppstore} from 'react-icons/ai'

const skillsDatabase = {
    'Frontend/Backend Knowledge':{'desc':'I have excellent knowledge of Javascript, Python, and Java.','img':<FaPython color='#0984e3' size={'200px'}/>},
    'Great Communicator and Explainer':{'desc':'I know how to communicate what needs to be done and my code does.','img':<IoMdMicrophone color='#0984e3' size={'200px'}/>},
    'My Experience in Projects':{'desc':'I have attained a lot of experience from the projects I\'ve attempted.','img':<AiFillAppstore  color='#0984e3' size={'200px'}/>}
  }

const SkillCard = ({skillName}) => {
    return (
        <div className = "skillCard">
            <div className = "imageContainer">
                    {skillsDatabase[skillName]["img"]}
            </div>
            <div className = "textSection">
                <h3 className = "header">{skillName}</h3>
                <p className = "content">{skillsDatabase[skillName]["desc"]}</p>
            </div>
            
        </div>
    )
}

export default SkillCard
