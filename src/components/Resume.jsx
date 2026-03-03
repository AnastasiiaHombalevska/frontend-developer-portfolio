import React from "react";

const RESUME_PATH = "../resume.pdf";

export default function ResumeLink(props) {
  const { modificator } = props;

  return (
    <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
      <button className={`resume_link--btn ${modificator}`}>View resume</button>
    </a>
  )
}
