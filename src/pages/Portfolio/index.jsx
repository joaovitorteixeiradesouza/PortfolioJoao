import { useState } from 'react';
import './style.scss';
import ProjectCard from '../../Components/ProjectCard';
import { filterProjects, getAllProjects } from '../../utils/hellpers';

function Portfolio() {
    const [checkBtnFilter, setCheckBtnFilter] = useState(["check-btn", "", "", ""]);

    const [listProjects, setListProjects] = useState(getAllProjects());

    function btnCheck(btnClick) {
        const buttons = ["", "", "", ""];

        buttons[btnClick] = "check-btn";
        setCheckBtnFilter(buttons);
    }

    return (
        <div className="portfolio">
            <div className="text-start">
                <h2 className='sub-title'>
                    Meu <br/>
                    <span>Portifólio</span>
                </h2>

                <p>
                    Estes são alguns dos trabalhos e
                    <br/>
                    projetos que já realizei
                    </p>
            </div>

            <div className="filter-projects">
                <button className={`btn-filter ${checkBtnFilter[0]}`} onClick={() => {
                    btnCheck(0)
                    setListProjects(getAllProjects());
                    }}>Todos</button>
                <button className={`btn-filter ${checkBtnFilter[1]}`} onClick={() => {
                    btnCheck(1);
                    setListProjects(filterProjects(["web app"]));
                    }}>Web App</button>
                <button className={`btn-filter ${checkBtnFilter[2]}`} onClick={() => {
                    btnCheck(2)
                    setListProjects(filterProjects(["data analysis"]));
                    }}>Data Analysis</button>
                <button className={`btn-filter ${checkBtnFilter[3]}`} onClick={() => {
                    btnCheck(3)
                    setListProjects(filterProjects(["outros"]));
                    }}>Outros</button>
            </div>
            <div className="projects-container">
                {
                    listProjects.map((item, index) => (
                        <ProjectCard key={index} titleProject={item.titleProject}
                        imgProject={item.imgProject}
                        link={item.linkPath}></ProjectCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;