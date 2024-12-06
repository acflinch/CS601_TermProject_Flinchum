import Skill from "./Skill";

function SkillsTimeline(props) {
    return (
        <div className="timeline">
            {props.skillsList.map(skill => (
                <Skill skill={skill}></Skill>
            ))}
        </div>
    );
}

export default SkillsTimeline;