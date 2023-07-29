

import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { FC, MouseEventHandler, ReactEventHandler, SyntheticEvent } from 'react';
import styles from "./Home.module.scss";


const sendEmail:any = (e: MouseEvent)=>{
    e.preventDefault();
    window.open('mailto:reza.bakhtiar.m@gmail.com');
}

const Contact: FC = () => {
    return (
        <div>
            <div className = {styles.ContactInfoWrapper}>
                <h1>Let's Chat!</h1>
                <p>Whether it be an internship opportunity or a program
                    I could participate at a company, you can contact me via links below.
                </p>
                <div className = {styles.ContactInfo}>
                    <div className={styles.Socials}>
                        <a href="https://www.linkedin.com/in/bakhtiar-reza/" rel="noopener">
                            <IconContext.Provider value={{className:styles.icon}}>
                                <FaLinkedinIn color={'white'} size={'80px'}/>
                            </IconContext.Provider>
                        </a>
                        <a href="https://github.com/Dradeon" rel="noopener">
                            <IconContext.Provider value={{className:styles.icon}}>
                                <FaGithub color={'white'} size={'80px'}/>
                            </IconContext.Provider>
                        </a>
                        <a onClick={sendEmail}>
                            <IconContext.Provider value={{className:styles.icon}}>
                                <AiFillMail color = {'white'} size={'80px'}/>
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
