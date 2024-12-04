const Home = () => {
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

                        <button className="resume-download"><i className="download"></i> Download CV</button>

                    </div>
                    <img src="./img/1554825026838.jpg" alt="Profile Picture" className="profile"/>

                </main>
            </div>
        </>
    )
};

export default Home;