import React from "react";

export default function Skill(props) {
  const { name } = props;

  function createClassName() {
    const cheking = name.includes(" ") || name.includes(".");

    return cheking
      ? name.replace(/[ .]/g, "-").toLowerCase()
      : name.toLowerCase();
  }
  
  return (
    <li className="skills--item" key={name}>
      <span className={`logo logo--${createClassName()}`}></span>{name}
    </li>
  )
}