import React, { useEffect, useState } from 'react';
import cardsData from '../worksData.js';
import Card from './Card';
import Carousel from './Carousel';

export default function Portfolio() {
  const [filteredCards, setFilteredCards] = useState(cardsData);

  const filterCards = (filter) => {
    if (filter === 'All') {
      setFilteredCards(cardsData);
    } else {
      setFilteredCards(
        cardsData.filter((card) => card.skills.includes(filter))
      );
    }
  };

  useEffect(() => {
    const filterBtns = document.querySelectorAll('.portfolio__btn');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        const filter = ev.target.innerText;

        filterCards(filter);
      });
    });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__section">
        My projects{' '}
        <span className="portfolio__insp">From Vision to Reality</span>
      </h2>

      <div className="portfolio__filter-container">
        <h3 className="portfolio__title">Featured work</h3>
        <div className="portfolio__btns-container">
          <button type="button" className="portfolio__btn">
            All
          </button>
          <button type="button" className="portfolio__btn portfolio__btn--html">
            HTML
          </button>
          <button type="button" className="portfolio__btn portfolio__btn--css">
            CSS
          </button>
          <button
            type="button"
            className="portfolio__btn portfolio__btn--javascript"
          >
            JavaScript
          </button>
          <button className="portfolio__btn portfolio__btn--scss">
            SASS(SCSS)
          </button>
        </div>
      </div>

      <Carousel images={filteredCards} />

      <div className="portfolio__card-container">
        {filteredCards &&
          filteredCards.map((cardData, index) => (
            <Card data={cardData} key={index} />
          ))}
      </div>
    </section>
  );
}
