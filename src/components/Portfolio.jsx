import React from "react";

import scrUnitConversion from "../images/portfolio-screenshots/metric-Imperial-unit-conversion.png";
import scrPasswordGenerator from "..//images/portfolio-screenshots/random-password-generator.png";
import scr2DGame from "..//images/portfolio-screenshots/2D-game.png";
import scrCreativeBakery from "..//images/portfolio-screenshots/creative-bakery.png";
import scrMuseum from "..//images/portfolio-screenshots/museum.png";
import scrMuseum2 from "..//images/portfolio-screenshots/museum2-0.png";

import Card from "./Card";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <Card
        number={"one"}
        name={"Metric/Imperial Unit Conversion"}
        imgSourse={scrUnitConversion}
        description={"screenshoot of metric/Imperial Unit Conversion"}
        msg={"App to convert values"}
        skills={["HTML", "CSS", "JavaScript"]}
        links={[{ "View live": "https://brilliant-cajeta-6a28eb.netlify.app/" }, { "View github": "https://github.com/AnastasiiaHombalevska/unit-converter" }]}
      />

      <Card
        number={"two"}
        name={"Random password generator"}
        imgSourse={scrPasswordGenerator}
        description={"screenshoot of random password generator"}
        msg={"App to create random passwords"}
        skills={["HTML", "CSS", "JavaScript"]}
        links={[{ "View live": "https://random-password-withjs.netlify.app/" }, { "View github": "https://github.com/AnastasiiaHombalevska/random-password-generator" }]}
      />

      <Card
        number={"tree"}
        name={"CV 2D-game with JavaScript"}
        imgSourse={scr2DGame}
        description={"screenshoot of CV 2D-game with JavaScript"}
        msg={"A 2d game with the opportunity to learn more about the author of this portfolio-CV"}
        skills={["HTML", "CSS", "JavaScript"]}
        links={[{ "View live": "https://anastasiiahombalevska.github.io/AnastasiiaHombalevska2D_portfolio_game-/" }, { "View github": "https://github.com/AnastasiiaHombalevska/AnastasiiaHombalevska2D_portfolio_game-" }]}
      />

      <Card
        number={"four"}
        name={"Museum 2.0"}
        imgSourse={scrMuseum2}
        description={"landing page screenshoot of museum"}
        msg={"Museum 2.0 landing page"}
        skills={["HTML", "SASS(SCSS)"]}
        links={[{ "View live": "https://anastasiiahombalevska.github.io/art_museum2.0/" }, { "View github": "https://github.com/AnastasiiaHombalevska/art_museum2.0" }]}
      />

    {/* <div className="portfolio--card card--five">
      <h3 className="card--title">Creative Bakery</h3>
        <img
          src={scrCreativeBakery}
          alt="landing page screenshoot of Creative Bakery"
          className="card--image"
        />

        <div className="card--overlay--five overlay">
        <h4 className="card--subtitle">Creative Bakery landing page</h4>
        <ul className="card--list">
          <li className="card--item">HTML</li>
          <li className="card--item">SASS(SCSS)</li>
        </ul>

        <div className="card--btn-cont">
          <a
            href="https://anastasiiahombalevska.github.io/Creative_Bakery/"
            target="_blank"
            className="card--btn"
          >View live
          </a>
          <a
            href="https://github.com/AnastasiiaHombalevska/Creative_Bakery"
            target="_blank"
            className="card--btn"
          >Github
          </a>
        </div>
    </div>
    </div> */}
      <Card
        number={"two"}
        name={"Random password generator"}
        imgSourse={scrPasswordGenerator}
        description={"screenshoot of random password generator"}
        msg={"Museum landing page"}
        skills={["HTML", "CSS", "JavaScript"]}
        links={[{ "View live": "https://random-password-withjs.netlify.app/" }, { "View github": "https://github.com/AnastasiiaHombalevska/random-password-generator" }]}
      />

    {/* <div className="portfolio--card card--six">
      <h3 className="card--title">Museum</h3>
        <img
          src={scrMuseum}
          alt="landing page screenshoot of museum"
          className="card--image"
        />

        <div className="card--overlay--six overlay">
        <h4 className="card--subtitle">Museum landing page</h4>
        <ul className="card--list">
          <li className="card--item">HTML</li>
          <li className="card--item">SASS(SCSS)</li>
        </ul>

        <div className="card--btn-cont">
          <a
            href="https://anastasiiahombalevska.github.io/art_museum/"
            target="_blank"
            className="card--btn"
          >View live
          </a>
          <a
            href="https://github.com/AnastasiiaHombalevska/art_museum"
            target="_blank"
            className="card--btn"
          >Github
          </a>
        </div>
    </div>
    </div> */}
      <Card
        number={"two"}
        name={"Random password generator"}
        imgSourse={scrPasswordGenerator}
        description={"screenshoot of random password generator"}
        msg={"App to create random passwords"}
        skills={["HTML", "CSS", "JavaScript"]}
        links={[{ "View live": "https://random-password-withjs.netlify.app/" }, { "View github": "https://github.com/AnastasiiaHombalevska/random-password-generator" }]}
      />
  </section>
  )
}