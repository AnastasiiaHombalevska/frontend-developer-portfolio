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
            I'm an experienced front-end developer with a psychology background,
            currently expanding my expertise by working with a wider range of
            technologies, including PHP and jQuery. Over the past year, I have
            been solving real-world tasks such as creating responsive designs,
            building interactive blocks with modals, optimizing pages, fixing
            design inconsistencies, performing code reviews, and assisting team
            members with onboarding and task execution. I have strong knowledge
            of{' '}
            <strong>
              JavaScript, HTML5, CSS3, PHP, jQuery, and Magento 1 and Bitbucket
            </strong>
            through work on commercial projects, as well as s
            <strong>Sass (SCSS), React, TypeScript, and Git/GitHub</strong> in
            pet projects.
            <br />I am familiar with object-oriented programming principles and
            software development methodologies like Agile. I am enthusiastic
            about continuous learning and professional growth and ready to take
            on challenging front-end projects, implementing scalable,
            maintainable, and user-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
