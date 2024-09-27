import React from "react";

const RESUME_PATH = "https://drive.google.com/file/d/1xyJAcNW9SXGM3xIp174O_OB9p6ggP__i/view?usp=drive_link";

export default function ResumeLink(props) {
  const { modificator } = props;

  return (
    <a href={RESUME_PATH} target="_blank">
      <button className={`resume_link--btn ${modificator}`}>View resume</button>
    </a>
  )
}