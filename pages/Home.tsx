import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import SkillsAndExperience from '../Components/Skills_Experience/SkillsAndExperience'
import Footer from '../Components/Footer/Footer'
import FeaturedProjects from '../Components/FeaturedProjects/FeaturedProjects'
import { FC } from 'react'

const Home: FC = () => {

    return (
        <>
            
            <Header title = "Bakhtiar Reza | Home" description = "Home for Bakhtiar Reza Website" index = "index, follow"/>
            
            <Hero/>
            
            <About/>

            <SkillsAndExperience/>
            
            <FeaturedProjects ids = {[1,2,4]}/>


        </>
        
    )
}

export default Home
