import React from "react";
import classNames from "classnames";
import CVButton from "components/CVButton/CVButton";
import { AnchorDataList } from "utils";
import DLogo from "assets/logo/DLogo.svg";
import "./Navbar.scss";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const getMenuItem = (id) => (
    <li key={id}>
      <a href={`#${id}`} onClick={() => setNavbarOpen(false)}>
        {id}
      </a>
    </li>
  );

  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-6 py-3">
      <img src={DLogo} width={60} height={60} />

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
