import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import styles from '../styles/Contact.module.scss'

const ContactsPage = () => {
    return (
        <div>
            <Header title = "Bakhtiar Reza | Contact" description = "Bakhtiar Reza's Contact Information" index = "noindex, nofollow" />
            <Navigation/>
            <div className = {styles.ContactInfoWrapper}>
                <h2>How to Contact Me:</h2>
                <p>Name: Bakhtiar Reza</p>
                <p>Undergraduate Computer Science Student at Pennsylvania State University</p>
                <p>Email: reza.bakhtiar.m@gmail.com</p>
                <p>Phone: 215-733-9951</p>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactsPage
