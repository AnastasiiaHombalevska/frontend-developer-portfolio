import React from "react";

const RESUME_PATH = "https://drive.google.com/file/d/1xyJAcNW9SXGM3xIp174O_OB9p6ggP__i/view?usp=drive_link";

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

        <a href={RESUME_PATH} target="_blanck">
          <button className="nav--btn">View resume</button>
        </a>
      </div>
    </nav>
  )
}