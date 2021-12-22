import Image from 'next/image'

import Javascript from '../../public/JSIcon.png'
import Python from '../../public/PythonIcon.png'
import React from '../../public/Reacticon.png'
import Sass from '../../public/SassIcon.png'


let imageDatabase = {"Javascript":Javascript,"Python":Python,"React":React,'Sass':Sass}

let descDatabase = {"Javascript":"I started to learn Javascript when I started to learn about Web Frameworks. I'm now interested in using it to create backends using NodeJS.",
"Python":"I have 2 years worth of Experience in Python. Started learning it from my first Computer Science courses. Built some projects and learned data structures and algorithms in the language",
"React":"I have 6 months using this Web Framework ever since I started learning about it during the 2021 summer.",
'Sass':"I learned this technology as an easier and faster way to do my CSS. It has made styling websites 2x faster."}

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
