import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div>
        <h3 className="about__section">
          Info <span className="about__profession">Developer</span>
        </h3>
      </div>

      <div className="about__container">
        <div>
          <h2 className="about__title">About Me</h2>
        </div>

        <div className="about__bottom-container">
          <h4 className="about__sub-title">
            Web Developer Programmer Software Engineer.
          </h4>
          <p className="about__introduction">
            I'm a front-end developer with a background in psychology, eager to
            advance my technical expertise. I have strong skills in <strong>JavaScript,
            HTML5, and CSS3,</strong> and hands-on experience with <strong>React, TypeScript, and
            Git/GitHub</strong> through practical projects. I have a solid understanding
            of object-oriented programming and am familiar with software
            development practices, including Agile methodology. Enthusiastic
            about continuous learning, I am ready to explore new technologies
            and confidently contribute to a team, bringing both value and a
            commitment to growing my skills as a front-end developer.
          </p>
        </div>
      </div>
    </section>
  );
}
