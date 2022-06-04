import React from 'react'

const skills = [
  {name:"HTML", color:"#f39c12"},
  {name: "Javascript",color: "#f1c40f"},
  {name:"CSS",color:"#1289A7"},
  {name:"React",color:"#3498db"},
  {name:"NextJS",color:"#ecf0f1"},
  {name:"NodeJS",color:"#2ecc71",},
  {name:"Git",color: "#d35400"},
  {name:"Python",color:"lightblue"},
  {name:"Java", color:"#6f4e37"}
]

const SkillChips = () => {
  return (
    <div className='SkillChips'>
      {skills.map(skill =>
        {
          const skillColor = skill.color
          return( 
          <div className='SkillChips-Chip' style={{'backgroundColor':skillColor}} >
            <p className='SkillChips-Chip-Name'>{skill.name}</p>
          </div>
          )
        })}
    </div>
  )
}

export default SkillChips