import React from "react";
import "./CVButton.scss";

const CV_LINK =
  "https://drive.google.com/file/d/1tXa2DAWR9SdmCGJs9r15P3yb1rfad_Px/view?usp=sharing";

export default function CVButton() {
  return (
    <>
      <a
        className="custom-btn"
        href={CV_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my CV
      </a>
    </>
  );
}
