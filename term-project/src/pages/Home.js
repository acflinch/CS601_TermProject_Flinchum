import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const onDownloadClick = () => {

        fetch("../models/Flinchum, Alex - Resume.docx").then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Flinchum, Alex - Resume.docx";
                alink.click();
            });
        });
    };

    return (
        <>
            <h1>Home</h1>
            <div className="content-wrapper">
                <main className="introduction">
                    <div className="intro-container">
                        <h3>Hello, I'm</h3>
                        <h2>Alex Flinchum</h2>
                        <h3 className="color-intro">Software Developer</h3>
                        <p>I have experience in both frontend and backend development through my classes and work
                            experience.</p>

                        <a href="#"><img src="./img/pngegg.png" alt="Github" className="git-icon"/></a>
                        <a href="#"><img src="./img/Linkedin.pngg" alt="Linkedin" className="linkedin-icon"/></a>

                        <button className="resume-download" onClick={onDownloadClick}>Download CV</button>

                    </div>
                    <img src="./img/1554825026838.jpg" alt="Profile Picture" className="profile"/>

                </main>
            </div>

            <div className="content-wrapper">
                <main className="about">
                    <h3 className="color-about">About Me</h3>
                    <p className="about-me">Here some text so that we can test the display of this about portion so that
                        we can
                        test it throughly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>


                    <Link to="/about" ><button className="read-more">Read More</button></Link>
                </main>
            </div>

            <div className="content-wrapper">
                <main className="projects">
                    <h3 className="color-project">Latest Projects</h3>

                    <div className="column">
                        <a href="#"><img src="./img/placeholder.jpg" alt="Project1" className="project-img"/></a>
                        <a href="#"><img src="./img/placeholder.jpg" alt="Project2" className="project-img"/></a>
                        <a href="#"><img src="./img/placeholder.jpg" alt="Project3" className="project-img"/></a>
                        <a href="#"><img src="./img/placeholder.jpg" alt="Project4" className="project-img"/></a>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Home;