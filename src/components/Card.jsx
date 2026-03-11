import React from 'react';

export default function Card({ data }) {
  const { number, name, imgSourse, description, skills, links } = data;

  return (
    <div className="card">
      <div
        className={`card__image-container card__image-container--${number} carousel__card`}
      >
        <img src={imgSourse} alt={description} className="card__image" />

        <div className={`card__overlay card__overlay--${number}`}>
          {links &&
            links.map((item) => {
              const [key, value] = Object.entries(item)[0];
              return (
                <a
                  href={value}
                  target="_blank"
                  key={value}
                  className="card__link"
                >
                  {key}
                </a>
              );
            })}
        </div>
      </div>

      <h3 className="card__title">{name}</h3>

      <ul className="card__skills-list">
        {skills &&
          skills.map((skill, index) => (
            <li className="card__skills-item" key={`skill--${index}`}>
              {skill}
            </li>
          ))}
      </ul>
    </div>
  );
}
