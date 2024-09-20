import React from "react";
import Card from "./Card";

import scrUnitConversion from "../images/portfolio-screenshots/metric-Imperial-unit-conversion.png";
import scrPasswordGenerator from "..//images/portfolio-screenshots/random-password-generator.png";
import scr2DGame from "..//images/portfolio-screenshots/2D-game.png";
import scrCreativeBakery from "..//images/portfolio-screenshots/creative-bakery.png";
import scrMuseum from "..//images/portfolio-screenshots/museum.png";
import scrMuseum2 from "..//images/portfolio-screenshots/museum2-0.png";

const cardData = [
  {
    number: "one",
    name: "Metric/Imperial Unit Conversion",
    imgSourse: scrUnitConversion,
    description: "screenshoot of metric/Imperial Unit Conversion",
    skills: ["HTML", "CSS", "JavaScript"],
    links: [{ "View live": "https://brilliant-cajeta-6a28eb.netlify.app/" }, { "View github": "https://github.com/AnastasiiaHombalevska/unit-converter" }]
  },

  {
    number: "two",
    name: "Random password generator",
    imgSourse: scrPasswordGenerator,
    description: "screenshoot of random password generator",
    skills: ["HTML", "CSS", "JavaScript"],
    links: [{ "View live": "https://random-password-withjs.netlify.app/" }, { "View github": "https://github.com/AnastasiiaHombalevska/random-password-generator" }]
  
  },

  {
    number: "tree",
    name: "CV 2D-game with JavaScript",
    imgSourse: scr2DGame,
    description: "screenshoot of CV 2D-game with JavaScript",
    skills: ["HTML", "CSS", "JavaScript"],
    links: [{ "View live": "https://anastasiiahombalevska.github.io/AnastasiiaHombalevska2D_portfolio_game-/" }, { "View github": "https://github.com/AnastasiiaHombalevska/AnastasiiaHombalevska2D_portfolio_game-" }]
  },

  {
    number: "four",
    name: "Museum 2.0",
    imgSourse: scrMuseum2,
    description: "landing page screenshoot of museum 2.0",
    skills: ["HTML", "SASS(SCSS)"],
    links: [{ "View live": "https://anastasiiahombalevska.github.io/art_museum2.0/" }, { "View github": "https://github.com/AnastasiiaHombalevska/art_museum2.0" }]
  },

  {
    number: "five",
    name: "Creative Bakery",
    imgSourse: scrCreativeBakery,
    description: "landing page screenshoot of Creative Bakery",
    skills: ["HTML", "SASS (SCSS)"],
    links: [{ "View live": "https://anastasiiahombalevska.github.io/Creative_Bakery/" }, { "View github": "https://github.com/AnastasiiaHombalevska/Creative_Bakery" }]
  },

  {
    number: "six",
    name: "Museum",
    imgSourse: scrMuseum,
    description: "landing page screenshoot of museum",
    skills: ["HTML", "SASS(SCSS)"],
    links: [{ "View live": "https://anastasiiahombalevska.github.io/art_museum/" }, { "View github": "https://github.com/AnastasiiaHombalevska/art_museum" }]
  }
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio--section">My projects <span className="portfolio--insp">From Vision to Reality</span></h2>
      <h3 className="portfolio--title">Featured work</h3>

      <div className="portfolio--card-container">
        {cardData && cardData.map((cardData, index) => <Card data={cardData} key={index} />)}
      </div>
  </section>
  )
}