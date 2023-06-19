import React from "react";
import "./CVButton.scss";

const CV_LINK =
  "https://drive.google.com/file/d/1_vkm49WONrFptA7XelEF1ayoQ1SLR8SM/view";

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
