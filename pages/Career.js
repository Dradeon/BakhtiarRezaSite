import Header from "../Components/Header"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import styles from '../styles/Career.module.scss'

const ProjectsPage = () => {
    return (
        <div>
            <Header title = "Bakhtiar Reza | Career" description = "My past career history" index = "noindex, nofollow" />
            <Navigation/>
            <div className = {styles.CareerWrapper}>
                <h2>I Don't have much to report on this page</h2> 
                <h3>This page will be updated over time as I gain more work experience.</h3>
            </div>
            <Footer/>         
        </div>
    )
}

export default ProjectsPage
