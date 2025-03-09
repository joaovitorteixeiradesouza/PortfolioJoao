import ProfileImg from '../../assets/Foto_Perfil.jpg'
import CardSkills from '../../Components/CardSkills';
import { useState } from 'react';
import './style.scss'

function Skills() {
    const [skills] = useState([
            {
                titleSkill: "Python",
                levelSkill: 2
            },
    
            {
                titleSkill: "HTML",
                levelSkill: 4
            },
    
            {
                titleSkill: "React",
                levelSkill: 3
            },
    
            {
                titleSkill: "C",
                levelSkill: 2
            },
    
            {
                titleSkill: "JavaScript",
                levelSkill: 2
            },
    
            {
                titleSkill: "Css",
                levelSkill: 3
            },
    
            {
                titleSkill: "SQLServer",
                levelSkill: 3
            },
    
            {
                titleSkill: "VB",
                levelSkill: 3
            }
        ]);
    
    return (
        <div className="skills">
            <img className='foto-perfil' src={ProfileImg} />
            <h2 className='sub-title'><span>João</span> Vitor</h2>
            <p>
                Meu nome é João Vitor Teixeira de Souza 👋 Eu sou do Brasil, São Paulo/SP.
                Formado em tecnologia da informação nível 
                técnico em 2019. Formado também em análise e 
                desenvolvimento de sistemas na Fatec de São Paulo
                em 2024, trabalho atualmente como Analista de Desenvolvimento junior
                na empresa HexaSolution. Busco crescer profissionalmente e sempre em
                busca de me aperfeiçoar e focar cada vez mais no meu aprendizado.
            </p>
            <h2 id="sub-title-skill" className='sub-title'>
                Hard <span>Skills</span>
            </h2>

            <div className="skill-container">
                {
                    skills.map((item, index) => (
                        <CardSkills titleCard={item.titleSkill}
                        levelSkill={item.levelSkill} 
                        key={index}></CardSkills>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Skills;