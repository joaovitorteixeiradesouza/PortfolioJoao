import "./ProjectCard.scss";
import { useState } from 'react';

function ProjectCard({titleProject, imgProject, link}) {
    const [showTextProjeto, setShowTextProjeto] = useState("");

    return (
        <div className="img-project">
            <h2 className={showTextProjeto}>
                {titleProject}
            </h2>
            <a href={link} target="_blank"><img src={imgProject} onMouseOver={() => {
                setShowTextProjeto("show-text")
            }}
            onMouseLeave={() => {
                setShowTextProjeto("")
            }}
            /></a>
        </div>
    )
}

export default ProjectCard;