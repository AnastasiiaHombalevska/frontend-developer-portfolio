import React from "react";

import Skill from "./Skill";

const skills = ["Accessibility", "HTML5", "CSS3", "JavaScript", "SASS", "React", "Typescript", "VS Code", "GitHub", "Figma", "Photoshop", "Node.js", "SQL"]

export default function Skills() {
  return (
    <section className="skills" id="skills">
    <h2 className="skills--title">My Toolkit</h2>

      <ul className="skills--list">
        {skills.map(skill => <Skill name={skill} />)}
    </ul>
  </section>
  )
}