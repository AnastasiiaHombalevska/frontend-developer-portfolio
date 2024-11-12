import React from "react";

const RESUME_PATH = "https://drive.google.com/file/d/1Z9GPogp6Aql6HZCj9NcDCPERnlb5jz-r/view?usp=sharing";

export default function ResumeLink(props) {
  const { modificator } = props;

  return (
    <a href={RESUME_PATH} target="_blank">
      <button className={`resume_link--btn ${modificator}`}>View resume</button>
    </a>
  )
}