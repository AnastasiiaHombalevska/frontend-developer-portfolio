import React from 'react';

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__list">
        <li className="mobile-nav__item">
          <a href="#menu" className="mobile-nav__link logo logo--author"></a>
        </li>
        <li className="mobile-nav__item">
          <a href="#aside" className="mobile-nav__link icon icon--menu"></a>
        </li>
      </ul>
    </nav>
  );
}
