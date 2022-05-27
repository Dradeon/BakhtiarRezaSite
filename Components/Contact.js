

import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bakhtiar-reza/","_blank")
    console.log(`Went to LinkedIn`);
}

const copyEmail = ()=>{
    navigator.clipboard.writeText('reza.bakhtiar.m@gmail.com')
    alert('Email copied to your clipboard!')
}

const goToGithub = () => {
    window.open("https://github.com/Dradeon","_blank")
    console.log("Went to Github")
}

const Contact = () => {
    return (
        <div>
            <div className = "ContactInfoWrapper">
                <h1>Let's Chat!</h1>
                <p>Whether it be an internship opportunity or a program
                    I could participate at a company, you can contact me via links below.
                </p>
                <div className = "ContactInfo">
                    <h2>Socials</h2>
                    <div className="Socials">
                        <button type = 'button' onClick={goToLinkedIn}>
                            <IconContext.Provider value={{className:'icon'}}>
                                <FaLinkedinIn color={'white'} size={'40px'}/>
                            </IconContext.Provider>
                        </button>
                        <button type = 'button' onClick={goToGithub}>
                            <IconContext.Provider value={{className:'icon'}}>
                                <FaGithub color={'white'} size={'40px'}/>
                            </IconContext.Provider>
                        </button>
                        <button type = 'button' onClick = {copyEmail}>
                            <IconContext.Provider value={{className:'icon'}}>
                                <AiFillMail color = {'white'} size={'40px'}/>
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
