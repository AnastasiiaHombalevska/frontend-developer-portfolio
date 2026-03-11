import React from "react";

const RESUME_PATH = `${import.meta.env.BASE_URL}resume.pdf`;

export default function ResumeLink({ modificator }) {
  return (
    <a
      href={RESUME_PATH}
      className={`resume_link--btn ${modificator}`}
      target="_blank"
      rel="noopener noreferrer">
        View resume
    </a>
  );
}
