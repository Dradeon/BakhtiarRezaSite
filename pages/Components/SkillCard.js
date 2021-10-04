import Image from 'next/image'

import Javascript from '../../public/JSIcon.png'
import Python from '../../public/PythonIcon.png'
import React from '../../public/Reacticon.png'
import Sass from '../../public/SassIcon.png'


let imageDatabase = {"Javascript":Javascript,"Python":Python,"React":React,'Sass':Sass}

const SkillCard = ({Language}) => {
    return (
        <div className = "SkillCardWrapper">
            <div className = "ImageContainer">
                <Image src = {imageDatabase[Language]} width = '360' height = '360'/>
            </div>
            <div className = "TextContainer">
                <p>{Language}</p>
            </div>
        </div>
    )
}

export default SkillCard
