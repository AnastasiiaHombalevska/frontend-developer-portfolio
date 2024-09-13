import React from "react";
import Navigation from "./Navigation";

import "../styles/Header.css";


export default function Header() {
  return (
    <header className="header">
        <Navigation />

        <div className="header--container">
        <div className="header--introduse">
          <h1 className="header--title"><span className="header--hi">Hello! I'm </span>Anastasiia Hombalevska</h1>
          <h2 className="header--position">A frontend developer.</h2>
          <p className="header--greting">I love creating the magic of turning signs and symbols into beautiful and functional web pages ✨</p>
        </div>

        <div className="header--image"></div>
        </div>

        <div className="header--btns">
          <a href="" className="header--btn" download>Get resume</a>
          <a href="#portfolio" className="header--btn">View portfolio</a> 
        </div>
    </header>
  )
}