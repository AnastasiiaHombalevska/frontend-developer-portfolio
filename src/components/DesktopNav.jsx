import React from "react";

import "../styles/DesktopNav.scss";

export default function DesktopNav() {
  return (
    <nav className="nav">
        <ul className="nav--list">
          <li><a href="#about" className="nav--link">About</a></li>
          <li><a href="#skills" className="nav--link">Skills</a></li>
          <li><a href="#portfolio" className="nav--link">Portfolio</a></li>
          <li><a href="#contacts" className="nav--link">Contacts</a></li>
          <li className="download-cont"><a href="#portfolio" className="nav--link download-resume">Get resume</a></li>
        </ul>
    </nav>
  )
}