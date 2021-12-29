import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import styles from '../styles/Contact.module.scss'

import {FaLinkedin} from 'react-icons/fa'

const ContactsPage = () => {
    return (
        <div>
            <Header title = "Bakhtiar Reza | Contact" description = "Bakhtiar Reza's Contact Information" index = "noindex, nofollow" />
            <Navigation/>
            <div className = {styles.ContactInfoWrapper}>
                <h2>Talk to Me!</h2>
                <p>Whether it be an internship opportunity or a program
                    I could participate at a company, you can contact me via
                    email or the links below.
                </p>
                <div className = {styles.ContactInfo}>
                    <h3>Bakhtiar Reza</h3>
                    <p>bmr5782@psu.edu</p>
                    <p>215.733.9951</p>
                    <div className={styles.Socials}>
                        <h3>My Socials</h3>
                        <FaLinkedin style = {{fontSize:'50px',color:'#0984e3',cursor: 'pointer',justifySelf:'center'}}
                            onClick={function() {
                                window.open("https://www.linkedin.com/in/bakhtiar-reza",'_blank')
                            }}
                        ></FaLinkedin>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactsPage
