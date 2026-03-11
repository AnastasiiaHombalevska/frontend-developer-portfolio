import React from 'react';

import Skill from './Skill';

const skills = [
  'Accessibility',
  'HTML5',
  'CSS3',
  'JavaScript',
  'SASS',
  'React',
  'Typescript',
  'VS Code',
  'GitHub',
  'Figma',
  'Node.js',
  'SQL',
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__section">
        Software I use{' '}
        <span className="skills__insp">Essential Instruments</span>
      </h2>
      <h3 className="skills__title">My Toolkit</h3>

      <ul className="skills__list">
        {skills.map((skill) => (
          <Skill name={skill} key={skill} />
        ))}
      </ul>
    </section>
  );
}
