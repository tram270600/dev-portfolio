import React from "react";
import classNames from "classnames";
import CVButton from "components/CVButton/CVButton";
import { AnchorDataList } from "utils";
import "./Navbar.scss";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const getMenuItem = (id) => (
    <li>
      <a href={`#${id}`} onClick={() => setNavbarOpen(false)}>
        {id}
      </a>
    </li>
  );

  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-6 py-3">
      <a
        className="text-[--green] text-4xl leading-5 font-bold inline-block py-2 uppercase"
        href="#"
      >
        D
      </a>

      <CVButton />

      <div
        className={classNames(
          "wrapper text-white bg-[--light-navy]",
          navbarOpen ? "wrapperOpen" : ""
        )}
      >
        <ul>{AnchorDataList.map((item) => getMenuItem(item))}</ul>
      </div>
      <div
        className={classNames(
          "md:hidden hamMenuButton",
          navbarOpen ? "menuChecked" : ""
        )}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="hide-des">
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
      </div>
    </nav>
  );
}
