import React from "react";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="header">
      <MobileNav />
      
      <div className="header--top">
        <DesktopNav />
        <button className="header--btn">Get resume</button>
      </div>
      
      <div className="header--container">
        <div className="header--introduse">
          <h1 className="header--title">Hello! I'm Anastasiia Hombalevska
            <br/>
            <span className="header--position">A frontend developer.</span>
          </h1>
          
          <p className="header--greting">
            I love creating the magic of turning signs and symbols into
            beautiful and functional web pages✨
          </p>
        </div>

        <div className="header--image"></div>
      </div>
    </header>
  );
}
