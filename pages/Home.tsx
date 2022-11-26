import Header from '../Components/Header/Header'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import SkillsAndExperience from '../Components/Home/SkillsAndExperience'
import Features from '../Components/Home/Features'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Footer/Footer'
import FeaturedProjects from '../Components/Home/FeaturedProjects'
import { FC } from 'react'
import Navigation from '../Components/Navigation/Navigation'

const Home: FC = () => {

    return (
        <>
            
            <Header title = "Bakhtiar Reza | Home" description = "Home for Bakhtiar Reza Website" index = "index, follow"/>
            
            <Hero/>
            
            <About/>

            <SkillsAndExperience/>
            
            <FeaturedProjects ids = {[1,2,4]}/>

            <Contact/>

            <Footer dark={true}/>

        </>
        
    )
}

export default Home
