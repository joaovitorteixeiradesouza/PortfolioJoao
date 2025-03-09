//import { useEffect, useState } from 'react'
import SkillCheck from '../../assets/Skill_check.png'
import SkillNo from '../../assets/Skill_notcheck.png'
import './CardSkill.scss'

function CardSkills ({levelSkill=0, titleCard=""}) {
    

    const skillLevel = Math.max(0, Math.min(levelSkill, 5));

    return (
        <div className="card-skill">
            <h3>{titleCard}</h3>
            
            <div className="level-skill">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src={index < skillLevel ? SkillCheck : SkillNo} alt={`Skill ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}

export default CardSkills