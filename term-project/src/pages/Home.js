import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"

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
                    <p className="about-me">
                        Although I always had a love for my computer science courses in high school, I also had a passion
                        for creating and drawing sketches of characters that I would envision in my mind. I thought my
                        career pursuits would be to follow a path to make my sketches come to life through the use of animation.
                        At that time in my life, I truly believed that my future career path would undoubtedly be to pursue
                        a career in the animation field. As I continued to navigate through the sea of college applications
                        during my senior year of high school and all of the many college visits, I found myself becoming
                        disillusioned by the true realities of the animation field. However, as my desire to pursue animation
                        dwindled, my ultimate goal always remained steadfast. The goal to create technology that can inspire
                        and benefit the lives of others remained my lifelong vision.
                    </p>


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