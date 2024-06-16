import React from "react";
import "./CVButton.scss";

const CV_LINK =
  "https://drive.google.com/file/d/1IHtnvY1x6lD60gQ5zzmuVpyPkpfxZR3z/view?usp=sharing";

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
