function Skill(props) {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h2>{props.skill.year}</h2>
                    {props.skill.skills.map(el =>
                        <div>
                            <h4>{el.language}</h4>
                            <p>{el.desc}</p>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default Skill;