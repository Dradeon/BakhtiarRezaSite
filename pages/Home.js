import Header from '../Components/Header/Header'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import SkillsAndExperience from '../Components/Home/SkillsAndExperience'
import Features from '../Components/Home/Features'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Footer/Footer'
import FeaturedProjects from '../Components/Home/FeaturedProjects'

const Home = () => {

    return (
        <>
            <Header title = "Bakhtiar Reza | Home" description = "Home for Bakhtiar Reza Website" index = "index, follow"/>
            
            <Hero/>
            
            <About/>

            <Features/>

            <SkillsAndExperience/>
            
            <FeaturedProjects ids = {[1,2,3]}/>

            <Contact/>

            <Footer/>

        </>
        
    )
}

export default Home
