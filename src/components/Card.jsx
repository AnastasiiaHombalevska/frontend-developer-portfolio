import React from 'react';

export default function Card({ data }) {
  if (!data) return null;

  const { name, description, skills, links } = data;

  return (
    <div className="card">
      <div className={`card__container carousel__card`}>

        <div className="card__overlay card__overlay">
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

        <div className="card__description">
          <p className='card__name'><span>project:</span> {name}</p>
          <p className='card__skills'><span>stack:</span> {skills.join(', ')}</p>
          <p className='card__additional'><span>description:</span> {description}</p>
        </div>
      </div>
    </div>
  );
}
