import React from "react";

import Aside from "./Aside";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";
import Contacts from "./Contacts";

export default function Main() {
  return (
    <main className="main">
        <Aside />
      
        <Portfolio />

        <About />

        <Skills />

        <Contacts />
      </main>
  )
}