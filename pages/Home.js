import Header from '../Components/Header'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import SkillsAndExperience from '../Components/Home/SkillsAndExperience'
import Features from '../Components/Home/Features'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Footer'

const Home = () => {

    return (
        <>
            <Header title = "Bakhtiar Reza | Home" description = "Home for Bakhtiar Reza Website" index = "index, follow"/>
            
            <Hero/>
            
            <About/>

            <SkillsAndExperience/>
            
            <Features/>

            <Contact/>

            <Footer/>

        </>
        
    )
}

export default Home
