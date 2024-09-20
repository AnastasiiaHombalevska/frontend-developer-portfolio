import React from "react";

export default function MobileNav() {
  return (
    <nav className="mobile--nav">
      <ul className="mobile--nav--list">
          <li><a href="#menu" className="mobile--nav--link logo logo--author"></a></li>
          <li><a href="#aside" className="mobile--nav--link icon icon--menu"></a></li>
          {/* <li><a href="#" className="mobile--nav--link icon icon--close"></a></li> */}
        </ul>
    </nav>
  )
}