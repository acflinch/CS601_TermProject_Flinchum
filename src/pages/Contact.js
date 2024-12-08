import React from "react";
import "../css/Contact.css";
import git from "../img/git.png";
import linkedin from "../img/linked.png";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "44213987-43bf-4d87-872a-7e3f0450f064");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "applicaton/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <>
            <div className="content-wrapper">
                <div className="social-container">
                    <h2 className="color-social">Where To Find Me</h2>

                    <a href="https://github.com/acflinch"><img src={git} alt="Github" className="social"/></a>
                    <a href="https://www.linkedin.com/in/alexflinchum/"><img src={linkedin} alt="Linkedin" className="social"/></a>
                </div>
            </div>

            <div className="content-wrapper">
                <section className="contact">
                    <form onSubmit={onSubmit}>
                        <h2 className="color-form">Contact Form</h2>
                        <div className="input">
                            <label>Full Name</label>
                            <input type="text" className="field" placeholder="Enter Your Name" name="name" required/>
                        </div>
                        <div className="input">
                            <label>Email Address</label>
                            <input type="email" className="field" placeholder="Enter Your Email" name="email" required/>
                        </div>
                        <div className="input">
                            <label>Message</label>
                            <textarea className="field-mess" placeholder="Enter Your Message" name="message"
                                      required></textarea>
                        </div>
                        <button type="submit" className="submit-message">Submit Message</button>
                    </form>
                </section>
            </div>
        </>
    )
};

export default Contact;