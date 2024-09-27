import React from "react";

export default function Card({ data }) {
  const { number, name, imgSourse, description, skills, links } = data;

  return (
    <div className={`card card--${number} carousel--card`}>
      <img
        src={imgSourse}
        alt={description}
        className="card--image"
      />

      <h3 className="card--title">{name}</h3>

      <ul className="card--list">
        {skills && skills.map((skill, index) =>
          <li className="card--list-item" key={`item--${index}`}>{skill}</li>)
        }
      </ul>

      <div className={`card--overlay--${number} card--overlay`}>
        <div className="card--btn-cont">
          {links && links.map(item => {
            const [key, value] = Object.entries(item)[0];

            return (
              <a
                href={value}
                target="_blank"
                key={value}
                className="card--btn"
             >{key}
             </a>
            )
          })}
          </div>
      </div>
    </div>
  )
}