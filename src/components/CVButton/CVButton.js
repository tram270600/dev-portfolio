import React from "react";
import "./CVButton.scss";

const CV_LINK =
  "https://drive.google.com/file/d/1g8ybYL8Pg1w9j_5W5EKyEAjMvWAT8ef_/view?usp=sharing";

export default function CVButton() {
  return (
    <>
      <a
        className="custom-btn"
        href={CV_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Resume
      </a>
    </>
  );
}
