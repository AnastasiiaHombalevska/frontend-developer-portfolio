import React from "react";
import ResumeLink from "./Resume";

export default function Aside() {
  return (
    <aside className="aside" id="aside">
      <ul className="aside--nav-list">
          <li><a href="#" className="aside--nav-link logo logo--author"></a></li>
          <li><a href="#" className="aside--nav-link icon icon--close"></a></li>
        </ul>

      <div className="aside--container">
          <ul className="aside--list">
              <li><a href="#portfolio" className="aside--link">Work</a></li>
              <li><a href="#about" className="aside--link">About</a></li>
              <li><a href="#skills" className="aside--link">Skills</a></li>
              <li><a href="#contacts" className="aside--link">Contacts</a></li>
        </ul>
        
        <ResumeLink modificator={"resume_link--btn--asise"} />
      </div>
    </aside>
  )
}