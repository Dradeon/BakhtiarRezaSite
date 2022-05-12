import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import styles from '../styles/Contact.module.scss'

import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'

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

const ContactsPage = () => {
    return (
        <div>
            <div className = {styles.ContactInfoWrapper}>
                <h2>Let's Chat!</h2>
                <p>Whether it be an internship opportunity or a program
                    I could participate at a company, you can contact me via
                    email or the links below.
                </p>
                <div className = {styles.ContactInfo}>
                    <h3>Socials</h3>
                    <div className={styles.Socials}>
                        <button type = 'button' onClick={goToLinkedIn} style = {{backgroundColor:'#0984e3'}}>
                            <FaLinkedinIn className='icon' color={'white'} size={'40px'}/>
                        </button>
                        <button type = 'button' onClick={goToGithub} style = {{backgroundColor:'#0984e3'}}>
                            <FaGithub className='icon' color={'white'} size={'40px'}/>
                        </button>
                        <button type = 'button' onClick = {copyEmail} style = {{backgroundColor:'#0984e3'}}>
                            <AiFillMail className='icon' color = {'white'} size={'40px'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage
