import React, { useEffect, useState } from 'react';
import cardsData from '../worksData.js';
import Card from './Card';
import Carousel from './Carousel';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortType, setSortType] = useState('date-new');
  const [filteredCards, setFilteredCards] = useState(cardsData);

  const skillMap = ['JavaScript', 'React', 'TypeScript', 'Redux', 'Node'];

  useEffect(() => {
    let result = [...cardsData];
  
    if (activeFilter !== 'All') {
      const normalized = activeFilter.toLowerCase();
  
      result = result.filter((card) =>
        card.skills.some((skill) =>
          skill.toLowerCase().includes(normalized)
        )
      );
    }
  
    result.sort((a, b) => {
      if (!a.date || !b.date) return 0;

      const [mA, yA] = a.date.split('.');
      const [mB, yB] = b.date.split('.');
  
      const numA = +yA * 100 + +mA;
      const numB = +yB * 100 + +mB;
  
      if (sortType === 'date-new') {
        return numB - numA;
      }
  
      if (sortType === 'date-old') {
        return numA - numB;
      }
  
      return 0;
    });
  
    setFilteredCards(result);
  }, [activeFilter, sortType]);
  

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__section">
        My projects{' '}
        <span className="portfolio__insp">From Vision to Reality</span>
      </h2>

      <div className="portfolio__filter-container">
        <h3 className="portfolio__title">Featured work</h3>

        <div className="portfolio__btns-container">
          <div className="portfolio__btns-sort">
            <label className='portfolio__label' htmlFor="skill-select">Choose skill:</label>

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

          <div className="portfolio__btns-sort">
            <label className='portfolio__label' htmlFor="sort-select">Sort by:</label>

            <select
              id="sort-select"
              className="portfolio__select"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="date-new" className="portfolio__btn">Newest first</option>
              <option value="date-old" className="portfolio__btn">Oldest first</option>
            </select>
          </div>
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
