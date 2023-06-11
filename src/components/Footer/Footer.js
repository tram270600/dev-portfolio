import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div>
        <hr className="horizontal-line" />
        <div>
          © {new Date().getFullYear()}, designed and built by {" "}
          <a className="about-me" href="#About">Datnguyen</a>
        </div>
      </div>
    </footer>
  );
}
