import React from "react";

import "../components/ProjectsScript";

import placeholder from "../img/placeholder.jpg";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";

const Projects = () => {
    return (
        <>
            <div className="content-wrapper">
                <main className="projects">
                    <h3 className="color-project">Latest Projects</h3>

                    <div className="column">
                        <img src={project1} alt="Project1" id="project1" className="project-img"/>
                        <img src={project2} alt="Project2" id="project2" className="project-img"/>
                        <img src={project3} alt="Project3" id="project3" className="project-img"/>
                        <img src={placeholder} alt="Project4" id="project4" className="project-img"/>
                    </div>
                </main>
            </div>

            <div className="content-wrapper">
                <div className="details-container">
                    <h3 className="color-details" id="details-title"></h3>
                    <p id="details"></p>
                </div>
            </div>
        </>
    )
};

export default Projects;