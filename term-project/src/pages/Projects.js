import React, { useState } from "react";

import placeholder from "../img/placeholder.jpg";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";

function Projects()  {
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDetails, setProjectDetails] = useState("");

    const handleClick = (title, details) => {
        setProjectTitle(title);
        setProjectDetails(details);
    };

    return (
        <>
            <div className="content-wrapper">
                <main className="projects">
                    <h3 className="color-project">Latest Projects</h3>

                    <div className="column">
                        <img src={project1} alt="Project1" className="project-img" onClick={() =>
                            handleClick("Interactive Web Form with JavaScript",
                                "While working through this assignment, I had to expand my knowledge of javascript.\n" +
                                "Specifically when having to validate the input sections, I had to gain an understanding of \n" +
                                "connecting the given user input with certain outcomes.")}/>

                        <img src={project2} alt="Project2" id="project2" className="project-img"/>
                        <img src={project3} alt="Project3" id="project3" className="project-img"/>
                        <img src={placeholder} alt="Project4" id="project4" className="project-img"/>
                    </div>
                </main>
            </div>

            <div className="content-wrapper">
                <div className="details-container">
                    <h3 className="color-details">{projectTitle}</h3>
                    <p>{projectDetails}</p>
                </div>
            </div>
        </>
    )
};

export default Projects;