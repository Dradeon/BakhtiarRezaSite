import Image from 'next/image'

import Javascript from '../../public/JSIcon.png'
import Python from '../../public/PythonIcon.png'
import React from '../../public/Reacticon.png'
import Sass from '../../public/SassIcon.png'


let imageDatabase = {"Javascript":Javascript,"Python":Python,"React":React,'Sass':Sass}

let descDatabase = {"Javascript":"I started to learn Javascript via Web Frameworks",
"Python":"I have 2 years worth of Experience in Python",
"React":"I have 6 months of it using the NextJS Framework",
'Sass':"6 months of experience"}

const SkillCard = ({Language}) => {
    return (
        <div className = "SkillCardWrapper">
            <div className = "ImageContainer">
                    <Image src = {imageDatabase[Language]} width = '360' height = '360'/>
            </div>
            <div className = "Overlay">
                <h2>{Language}</h2>
                <p>{descDatabase[Language]}</p>
            </div>
            
        </div>
    )
}

export default SkillCard
