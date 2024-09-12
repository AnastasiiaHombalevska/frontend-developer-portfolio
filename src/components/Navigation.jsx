import React from "react";

export default function Navigation() {
  return (
    <nav className="nav">
        <ul className="nav--list">
          <li><a href="#about" className="nav--link">About</a></li>
          <li><a href="#skills" className="nav--link">Skills</a></li>
          <li><a href="#portfolio" className="nav--link">Portfolio</a></li>
          <li><a href="#contacts" className="nav--link">Contacts</a></li>
          <li><a href="#portfolio" className="nav--link">Get resume</a></li>
        </ul>
    </nav>
  )
}