import Header from "./Components/Header"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import styles from '../styles/Projects.module.scss'

let ProjectData = [{"Title":"CSI DNA Database Project",
"Description":"A program that take data from various CSVs and analyzes the DNA of suspect with DNA found at the crime scene to match the criminal with their respective crimes.",
"Date":"December 2020"},
{"Title":'Simple Calculator',
"Description":'A calculator that can perform simple arithmetic operations with PEMDAS. Built using the Stack Data Structure.',
"Date":'March 2021'}]

const Projects = () => {
    return (
        <div className = {styles.ProjectContainer}>
            <Header title = "Bakhtiar Reza | Projects" description = "Projects Made By Bakhtiar" index = "noindex, nofollow" />
            <Navigation/>
            <h1 className = {styles.ProjectsPageTitle}>My Projects</h1>
            {ProjectData.map((data) => {
                return (
                    <div className = {styles.ProjectItem} key = {data.Title}>
                        <h1>{data['Title']}</h1>
                        <p>{data['Date']}</p>
                        <h3>{data['Description']}</h3>
                    </div>
                )
            })}
            <Footer/>
        </div>
    )
}

export default Projects
