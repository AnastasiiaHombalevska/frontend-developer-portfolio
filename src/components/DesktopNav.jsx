import React from 'react';
import ResumeLink from './Resume';

export default function DesktopNav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <a href="#" className="nav__logo logo logo--author"></a>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#contacts" className="nav__link">
              Contacts
            </a>
          </li>
        </ul>

        {/* <ResumeLink modificator="nav__resume-btn" /> */}
      </div>
    </nav>
  );
}
