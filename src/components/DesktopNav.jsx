import React from "react";
import ResumeLink from "./Resume";

export default function DesktopNav() {
  return (
    <nav className="nav">
      <div className="nav--container">
        <a href="#" className="nav--logo logo logo--author"></a>

        <ul className="nav--list">
            <li><a href="#portfolio" className="nav--link">Work</a></li>
            <li><a href="#about" className="nav--link">About</a></li>
            <li><a href="#skills" className="nav--link">Skills</a></li>
            <li><a href="#contacts" className="nav--link">Contacts</a></li>
        </ul>

        <ResumeLink modificator={"resume_link--btn--nav"} />
      </div>
    </nav>
  )
}