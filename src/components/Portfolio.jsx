import React, { useEffect, useMemo, useState } from 'react';
import cardsData from '../worksData.js';
import Card from './Card';
import Carousel from './Carousel';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredCards, setFilteredCards] = useState(cardsData);

  const skillMap = ['JavaScript', 'React', 'TypeScript', 'Redux', 'Node'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredCards(cardsData);
      return;
    }

    const normalized = activeFilter.toLowerCase();

    const result = cardsData.filter((card) =>
      card.skills.some((skill) => skill.toLowerCase().includes(normalized))
    );

    setFilteredCards(result);
  }, [activeFilter]);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__section">
        My projects{' '}
        <span className="portfolio__insp">From Vision to Reality</span>
      </h2>

      <div className="portfolio__filter-container">
        <h3 className="portfolio__title">Featured work</h3>

        <div className="portfolio__btns-container">
          <label htmlFor="skill-select">Choose skill:</label>

          <select
            name="skills"
            id="skill-select"
            className="portfolio__select"
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            <option value="All" className="portfolio__btn">
              All
            </option>

            {skillMap.map((skill) => (
                <option value={skill} key={skill} className="portfolio__btn">
                  {skill}
                </option>
              ))}
          </select>
        </div>
      </div>

      {filteredCards.length > 0 && <Carousel images={filteredCards} />}

      <div className="portfolio__card-container">
        {filteredCards.length > 0 &&
          filteredCards.map((cardData, index) => (
            <Card data={cardData} key={index} />
          ))}
      </div>

      {filteredCards.length === 0 && (
        <p className="portfolio__empty">
          No projects found for "{activeFilter}" for now...
        </p>
      )}
    </section>
  );
}
