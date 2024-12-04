import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="experience-container">
                    <h2>PROFESSIONAL EXPERIENCE</h2>
                    <h3>General Motors</h3>
                    <h3>Austin, TX</h3>
                    <p>Software Developer – Manufacturing Development / Tester – Surada Test & Development</p>
                    <p>July 2019 – Present</p>

                    <ul>
                        <li>
                            Functioned as a key point of contact for testing progress and delivery dates for project
                            deployments
                        </li>
                        <li>
                            Developed automated test cases using TFS, C#, Java, and SQL to run through the functionality
                            of API calls
                        </li>
                        <li>
                            Collaborated with a diverse development team across the technology stack in order to create
                            an
                            interactive web framework powered by Angular designed to keep track of complex manufacturing
                            data and analytics
                        </li>
                        <li>
                            Led development and maintained ownership of a web-based tool used in processing files,
                            consisting of Angular
                        </li>
                    </ul>

                    <h4>Selected Project Experience</h4>
                    <ul>
                        <li>
                            Indepth Lite – App Owner
                            <p>February 2020</p>
                            <ul>
                                <li>
                                    Resolved a web-based issues with the user interface in order to allow both users and
                                    developers to process files for the main Indepth site consisting of Angular
                                </li>
                                <li>
                                    Updated the sites Angular code to the most current version at the time of
                                    installment,
                                    fixing any bugs or irregularities that arose as a result of the update
                                </li>
                            </ul>
                        </li>
                        <li>
                            Production Bug Analysis - Team Lead
                            <p>October 2022</p>
                            <ul>
                                <li>
                                    Collaborated with developers in order to gather and keep track of information on
                                    bugs
                                    found in the production environment
                                </li>
                                <li>
                                    Tracked the progress of and led other team members who gathered information on bugs
                                    found in other team projects
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Nonprofit Clinic Serve IT</h3>
                    <h3>Bloomington, IN</h3>
                    <p>Team Lead</p>
                    <p>August 2018 – May 2019</p>

                    <ul>
                        <li>
                            Led a team of developers in the creation of a web application for self-guided tours of the
                            City of Bloomington
                        </li>
                        <li>
                            Delivered a functional website application to Monroe County and the Bloomington Symphony Orchestra
                        </li>
                        <li>
                            Derived web application solutions using the Laravel framework, with PHP, HTML, CSS and a MapBox plugin
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
};

export default About;