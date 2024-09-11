import React from "react";

import scrUnitConversion from "../images/portfolio-screenshots/metric-Imperial-unit-conversion.png";
import scrPasswordGenerator from "..//images/portfolio-screenshots/random-password-generator.png";
import scr2DGame from "..//images/portfolio-screenshots/2D-game.png";
import scrCreativeBakery from "..//images/portfolio-screenshots/creative-bakery.png";
import scrMuseum from "..//images/portfolio-screenshots/museum.png";
import scrMuseum2 from "..//images/portfolio-screenshots/museum2-0.png";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

    <div className="portfolio--card card--one">
      <h3 className="card--title">Metric/Imperial Unit Conversion</h3>
      <img
          src={scrUnitConversion}
          alt="screenshoot of metric/Imperial Unit Conversion"
          className='card--image'
      />
        
    <div className="card--overlay--one overlay">
    <h3 className="card--subtitle">App to convert values</h3>
        <ul className="card--list">
          <li className="card--item">HTML</li>
          <li className="card--item">CSS</li>
          <li className="card--item">JavaScript</li>
        </ul>

        <div className="card--btn-cont">
          <a
            href="https://brilliant-cajeta-6a28eb.netlify.app/"
            target="_blank"
            className="card--btn"
          >View live
          </a>
          <a
            href="https://github.com/AnastasiiaHombalevska/unit-converter"
            target="_blank"
            className="card--btn"
          >Github
          </a>
        </div>
    </div>
    </div>

    <div className="portfolio--card card--two">
      <h3 className="card--title">Random password generator</h3>
        <img
          src={scrPasswordGenerator}
          alt="screenshoot of random password generator"
          className="card--image"
        />
        
        <div className="card--overlay--two overlay">
        <h3 className="card--subtitle">App to create random passwords</h3>
        <ul className="card--list">
          <li className="card--item">HTML</li>
          <li className="card--item">CSS</li>
          <li className="card--item">JavaScript</li>
        </ul>

        <div className="card--btn-cont">
          <a
            href="https://random-password-withjs.netlify.app/"
            target="_blank"
            className="card--btn"
          >View live
          </a>
          <a
            href="https://github.com/AnastasiiaHombalevska/random-password-generator"
            target="_blank"
            className="card--btn"
          >Github
          </a>
        </div>
    </div>
    </div>

    <div className="portfolio--card card--tree">
      <h3 className="card--title">CV 2D-game with JavaScript</h3>
        <img
          src={scr2DGame}
          alt="screenshoot of CV 2D-game with JavaScript"
          className='card--image'
        />

        <div className="card--overlay--tree overlay">
        <h3 className="card--subtitle">A 2d game with the opportunity to learn more about the author of this portfolio-CV</h3>
        <ul className="card--list">
          <li className="card--item">HTML</li>
          <li className="card--item">CSS</li>
          <li className="card--item">JavaScript</li>
        </ul>

        <div className="card--btn-cont">
          <a
            href="https://anastasiiahombalevska.github.io/AnastasiiaHombalevska2D_portfolio_game-/"
            target="_blank"
            className="card--btn"
          >View live
          </a>
          <a
            href="https://github.com/AnastasiiaHombalevska/AnastasiiaHombalevska2D_portfolio_game-"
            target="_blank"
            className="card--btn"
          >Github
          </a>
          </div>
        </div>
    </div>

    <div className="portfolio--card card--four">
      <h3 className="card--title">Museum 2.0</h3>
        <img
          src={scrMuseum2}
          alt="landing page screenshoot of Creative Bakery"
          className="card--image"
        />

        <div className="card--overlay--four overlay">
        <h3 className="card--subtitle">Museum 2.0 landing page</h3>
        <ul className="card--list">
          <li className="card--item">HTML</li>
          <li className="card--item">SASS(SCSS)</li>
        </ul>

        <div className="card--btn-cont">
          <a
            href="https://anastasiiahombalevska.github.io/art_museum2.0/"
            target="_blank"
            className="card--btn"
          >View live
          </a>
          <a
            href="https://github.com/AnastasiiaHombalevska/art_museum2.0"
            target="_blank"
            className="card--btn"
          >Github
          </a>
        </div>
    </div>
    </div>

    <div className="portfolio--card card--five">
      <h3 className="card--title">Creative Bakery</h3>
        <img
          src={scrCreativeBakery}
          alt="landing page screenshoot of Creative Bakery"
          className="card--image"
        />

        <div className="card--overlay--five overlay">
        <h3 className="card--subtitle">Creative Bakery landing page</h3>
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
    </div>

    <div className="portfolio--card card--six">
      <h3 className="card--title">Museum</h3>
        <img
          src={scrMuseum}
          alt="landing page screenshoot of museum"
          className="card--image"
        />

        <div className="card--overlay--six overlay">
        <h3 className="card--subtitle">Museum landing page</h3>
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
    </div>
  </section>
  )
}