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
            <img className='foto-perfil' src={"https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/427397251_331067156104537_6505464373824054620_n.jpg?ccb=11-4&oh=01_Q5AaIaSnk4J98lOlUBf0VOVxmeJxVsLZ-IbUiv5XcwHjNJCq&oe=67E59994&_nc_sid=5e03e0&_nc_cat=109"} />
            <h2 className='sub-title'><span>João</span> Vitor</h2>
            <p>
            Meu nome é João Vitor Teixeira de Souza 👋 Moro em São Paulo, Brasil. Formado em tecnologia da informação (2019), nível técnico, concluí minha graduação em análise e desenvolvimento de sistemas, na Fatec de São Paulo, ao final de 2024. 
            Atuo como Analista de Desenvolvimto junior na empresa HexaSolution, uma empresa voltada a desenvolvimento de softwares.
            Busco crescer profissionalmente e me tornar um profissional capacitado para atuar em qualquer vertente da tecnologia. Por isso, estou sempre em busca de desafios. Quer me ajudar com isso? Entre em contato.
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