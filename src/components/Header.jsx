import React from 'react';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Header() {
  return (
    <header className="header">
      <MobileNav />
      <DesktopNav />

      <div className="header__container">
        <div className="header__introduce">
          <h1 className="header__title">
            Hello! I'm Anastasiia Hombalevska
            <br />
            <span className="header__position">A frontend developer.</span>
          </h1>

          <p className="header__greeting">
            I love creating the magic of turning signs and symbols into
            beautiful and functional web pages
          </p>
        </div>

        <div className="header__image"></div>
      </div>
    </header>
  );
}
