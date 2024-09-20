import React from "react";

import Skill from "./Skill";

const skills = ["Accessibility", "HTML5", "CSS3", "JavaScript", "SASS", "React", "Typescript", "VS Code", "GitHub", "Figma", "Photoshop", "Node.js", "SQL"]

export default function Skills() {
  return (
    <section className="skills" id="skills">
        <h2 className="skills--section">Software i use <span className="skills--insp">Essential Instruments</span></h2>
        <h3 className="skills--title">My Toolkit</h3>

      <ul className="skills--list">
        {skills.map(skill => <Skill name={skill} key={skill} />)}
    </ul>
  </section>
  )
}