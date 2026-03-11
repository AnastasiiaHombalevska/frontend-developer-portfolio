import React from 'react';
import Form from './Form';

import linkedinLogo from '../images/logos/linkedin.svg';
import githubLogo from '../images/logos/github.svg';

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <h3 className="contacts__title">Let's connect</h3>
        <p className="contacts__description">
          If you ever want to grab a coffee{' '}
          <span className="contacts__small-text">(virtually)</span> or just want
          a quick chat - you can find me on social media or you can send me a
          message here!
        </p>

        <ul className="contacts__socials">
          <li className="contacts__social-item">
            <img
              src={linkedinLogo}
              alt="linkedin logotype"
              className="contacts__social-img"
            />
            <a
              href="https://www.linkedin.com/in/anastasiia-hombalevska/"
              className="contacts__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>

          <li className="contacts__social-item">
            <img
              src={githubLogo}
              alt="github logotype"
              className="contacts__social-img"
            />
            <a
              href="https://github.com/AnastasiiaHombalevska"
              className="contacts__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      <Form />
    </section>
  );
}
