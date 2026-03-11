import React from "react";
import ResumeLink from "./Resume";

export default function Aside() {
  return (
    <aside className="aside" id="aside">
      <ul className="aside__nav-list">
          <li><a href="#" className="aside__nav-link logo logo--author"></a></li>
          <li><a href="#" className="aside__nav-link icon icon--close"></a></li>
        </ul>

      <div className="aside__container">
        <ul className="aside__list">
          <li><a href="#portfolio" className="aside__link">Work</a></li>
          <li><a href="#about" className="aside__link">About</a></li>
          <li><a href="#skills" className="aside__link">Skills</a></li>
          <li><a href="#contacts" className="aside__link">Contacts</a></li>
        </ul>
        
        <ResumeLink modificator={"resume_link-btn--asise"} />
      </div>
    </aside>
  )
}