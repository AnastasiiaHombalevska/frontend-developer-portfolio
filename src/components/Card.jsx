import React from "react";

import "../styles/Card.css"

export default function Card({ data, key }) {
  const { number, name, imgSourse, description, msg, skills, links } = data;
  
  console.log("Card component rendered with data:", data);

  return (
    <div className={`portfolio--card card--${number}`} id={key}>
      <h3 className="card--title">{name}</h3>
      <img
          src={imgSourse}
          alt={description}
          className="card--image"
      />

      <div className={`card--overlay--${number} overlay`}>
        <h4 className="card--subtitle">{msg}</h4>
        <ul className="card--list">
          {skills && skills.map((skill, index) =>
              <li className="card--item" key={`item--${index}`}>{skill}</li>)
          }
        </ul>

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