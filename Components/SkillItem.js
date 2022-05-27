import Image from 'next/image'
import {FaPython} from 'react-icons/fa'
import {IoMdMicrophone} from 'react-icons/io'
import {AiFillAppstore} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';

const pythonIcon = <FaPython color='#0984e3' size={'200px'}/>;
const micIcon = <IoMdMicrophone color='#0984e3' size={'200px'}/>;
const appStoreIcon = <AiFillAppstore  color='#0984e3' size={'200px'}/>;

const skillsDatabase = {
    'Frontend/Backend Knowledge':{'desc':'I have excellent knowledge of Javascript, Python, and Java.','img':pythonIcon},
    'Great Communicator and Explainer':{'desc':'I know how to communicate what needs to be done and my code does.','img':micIcon},
    'My Experience in Projects':{'desc':'I have attained a lot of experience from the projects I\'ve attempted.','img':appStoreIcon}
  }

const SkillItem = ({skillName}) => {
    return (
        <div className = "skillCard">
            <div className = "">
                <IconContext.Provider value={{className:'imageContainer'}}>
                    {skillsDatabase[skillName]["img"]}
                </IconContext.Provider>
            </div>
            <div className = "textSection">
                <h3 className = "header">{skillName}</h3>
                <p className = "content">{skillsDatabase[skillName]["desc"]}</p>
            </div>
            
        </div>
    )
}

export default SkillItem
