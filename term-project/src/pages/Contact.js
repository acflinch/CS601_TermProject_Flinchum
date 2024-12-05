import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import git from "../img/git.png";
import linkedin from "../img/linked.png";

const Contact = () => {
    return (
        <>
            <div className="content-wrapper">
                <section className="contact">
                    <form>
                        <h2>Contact Form</h2>
                        <div className="input">
                            <label>Full Name</label>
                            <input type="text" className="field" placeholder="Enter Your Name" required/>
                        </div>
                        <div className="input">
                            <label>Email Address</label>
                            <input type="email" className="field" placeholder="Enter Your Email" required/>
                        </div>
                        <div className="input">
                            <label>Message</label>
                            <textarea className="field-mess" placeholder="Enter Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-message">Submit Message</button>
                    </form>
                </section>
            </div>
        </>
    )
};

export default Contact;