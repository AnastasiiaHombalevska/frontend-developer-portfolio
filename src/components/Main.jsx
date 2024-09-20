import React from "react";

import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

export default function Main() {
  return (
    <main className="main">
        <Portfolio />

        <About />

        <Skills />

        <Contacts />
      </main>
  )
}