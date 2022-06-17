

import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'


const copyEmail = (e)=>{
    e.preventDefault();
    navigator.clipboard.writeText('reza.bakhtiar.m@gmail.com')
    alert('Email copied to your clipboard!')
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
                        <a href="https://www.linkedin.com/in/bakhtiar-reza/" rel="noopener">
                            <IconContext.Provider value={{className:'icon'}}>
                                <FaLinkedinIn color={'white'} size={'40px'}/>
                            </IconContext.Provider>
                        </a>
                        <a href="https://github.com/Dradeon" rel="noopener">
                            <IconContext.Provider value={{className:'icon'}}>
                                <FaGithub color={'white'} size={'40px'}/>
                            </IconContext.Provider>
                        </a>
                        <a href="" onClick = {copyEmail}>
                            <IconContext.Provider value={{className:'icon'}}>
                                <AiFillMail color = {'white'} size={'40px'}/>
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
