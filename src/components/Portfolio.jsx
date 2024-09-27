import React, { useEffect, useState } from "react";
import cardsData from "../worksData.js";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Portfolio() {
  const [filteredCards, setFilteredCards] = useState(cardsData);

  const filterCards = (filter) => {
    if (filter === "All") {
      setFilteredCards(cardsData);
    } else {
      setFilteredCards(
        cardsData.filter((card) => card.skills.includes(filter))
      );
    }
  };

  useEffect(() => {
    const filterBtns = document.querySelectorAll(".portfolio--btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        const filter = ev.target.innerText;

        filterCards(filter);
      });
    });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio--section">My projects <span className="portfolio--insp">From Vision to Reality</span></h2>
      
      <div className="portfolio--filter-container">
        <h3 className="portfolio--title">Featured work</h3>
        <div className="portfolio--btns-container">
          <button className="portfolio--btn">All</button>
          <button className="portfolio--btn html">HTML</button>
          <button className="portfolio--btn css">CSS</button>
          <button className="portfolio--btn javascript">JavaScript</button>
          <button className="portfolio--btn scss">SASS(SCSS)</button>
        </div>
      </div>

      <Carousel images={filteredCards} />
      <div className="portfolio--card-container">
        {filteredCards &&
          filteredCards.map((cardData, index) => <Card data={cardData} key={index} />)
        }
      </div>
  </section>
  )
}