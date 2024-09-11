// import { useState } from "react"

import "./App.css"

import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="about" id="about">
          <h2 className="about--title">About Me</h2>
          <p className="about--introduction">Web Developer Programmer Software Engineer. I"m a skilled front-end developer with a psychology background, keen to enhance my tech skills. I"m well-versed in JavaScript, HTML5, CSS3, and Sass (SCSS), and I"ve gained practical experience with React, TypeScript, and Git/GitHub through academic projects. Now, I"m eager to take on real-world challenges in front-end development and leave my mark in the field. I possess a foundational grasp of object-oriented programming and familiar with software development methodologies like Agile. I"m enthusiastic about continuous learning and growth, ready to delve into any necessary areas. With conviction, I believe in my ability to bring value to the team as a front-end developer, actively contribute and expand my skills.</p>
        </section>

        <section className="skills" id="skills">
          <h2 className="skills--title">My Toolkit</h2>

          <ul className="skills-list">
            <li className="skills-item"><span className="logo logo-html"></span>HTML5</li>
            <li className="skills-item"><span className="logo logo-css"></span>CSS3</li>
            <li className="skills-item"><span className="logo logo-js"></span>JavaScript</li>
            <li className="skills-item"><span className="logo logo-sass"></span>Sass (SCSS)</li>
            <li className="skills-item"><span className="logo logo-react"></span>React</li>
            <li className="skills-item"><span className="logo logo-ts"></span>Typescript</li>
            <li className="skills-item"><span className="logo logo-env"></span>VS Code</li>
            <li className="skills-item"><span className="logo logo-node"></span>Node.js</li>
            <li className="skills-item"><span className="logo logo-git"></span>Git/GitHub</li>
            <li className="skills-item"><span className="logo logo-adob"></span>Photoshop</li>

            {/* <li className="skills-item logo logo-oop">Basic OOP understanding</li>
            <li className="skills-item logo logo-dom">DOM model</li> */}
            {/* <li className="skills-item logo logo-sql">SQL</li> */}
            {/* <li className="skills-item logo logo-acces">Accessibility</li> */}
            {/* <li className="skills-item logo logo-bem">BEM metodology</li> */}
            {/* <li className="skills-item logo logo-agile">Knowledge of SDLC, Waterfall, Agile concepts (Scrum, Kanban)</li> */}
            {/* <li className="skills-item logo logo-figma">Figma</li> */}
          </ul>
        </section>

        <Portfolio />

        <Contacts />
      </main>

      <Footer/>
    </>
  )
}
