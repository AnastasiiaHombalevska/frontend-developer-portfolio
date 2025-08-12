import React from "react";

const RESUME_PATH = "https://drive.google.com/file/d/1aL6J1axG3X0mkCk6CVk6pD2s7dMKa-mq/view?usp=sharing";

export default function ResumeLink(props) {
  const { modificator } = props;

  return (
    <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
      <button className={`resume_link--btn ${modificator}`}>View resume</button>
    </a>
  )
}
