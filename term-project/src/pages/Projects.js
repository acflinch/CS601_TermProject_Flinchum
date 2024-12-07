import React, { useState } from "react";

import "../css/Projects.css";

import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";

function Projects()  {
    const [projectTitle, setProjectTitle] = useState("Click on any image for more details!");
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
                                "While working through this project, I had to expand my knowledge of javascript.\n" +
                                "Specifically when having to validate the input sections, I had to gain an understanding of \n" +
                                "connecting the given user input with certain outcomes.")}/>

                        <img src={project2} alt="Project2" className="project-img" onClick={() =>
                            handleClick("Asynchronous Web App Development",
                                "While working through this project, I had to closely follow teh office hour recordings and use the\n" +
                            "module in order to get a working drag and drop web page.")}/>

                        <img src={project3} alt="Project3" className="project-img" onClick={() =>
                            handleClick("Country Data Manager",
                                "While working through this project, I had to get up to speed with TypeScript as this was my first\n" +
                                "interaction with the language. I used the demo from both the office horse and the class to get an\n" +
                                "understanding of the concepts in this assignment.")}/>

                        <img src={project4} alt="Project4" className="project-img" onClick={() =>
                            handleClick("Blockbuster - Top Movies API",
                                "While working through this project, i had to work with a team inorder to create\n" +
                            "a microservice Data Science application which will provide the ability to query and display\n" +
                                "movie data based on various user inputs using the Kaggle IMDB Top 250 Movies dataset.")}/>
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