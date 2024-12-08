import skills from "../models/Skills.json"
import SkillsTimeline from "../components/SkillsTimeline";
import "../css/Skills.css";
import React from "react";

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { skillsList: skills }
    }

    render() {
        return (
            <>
                <div className="content-wrapper">
                    <SkillsTimeline skillsList={this.state.skillsList}></SkillsTimeline>
                </div>
            </>
        )
    }

}

export default Skills;