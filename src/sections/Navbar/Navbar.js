import React from "react";
import classNames from "classnames";
import CVButton from "components/CVButton/CVButton";
import { AnchorDataList } from "utils";
import { ReactComponent as LogoTree } from "assets/logo/TLetterTree.svg";
import { ReactComponent as LogoUpperLeaf } from "assets/logo/TLetterUpperLeaf.svg";
import { ReactComponent as LogoLowerLeaf } from "assets/logo/TLetterLowerLeaf.svg";
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
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-5 py-1 bg-[--navy-500]/50 md:py-3 md:px-6 md:bg-transparent">
      <a
        className="text-[--green] text-4xl leading-5 font-bold inline-block py-2 uppercase"
        href="#"
      >
        <div className="w-12 h-12 icon-animation">
          <a href="#Greeting" className="logoEffect">
            <LogoUpperLeaf className="absolute upperLeaf upperLeaf-transform-animation" />
            <LogoTree className="absolute letter tree-transform-animation" />
            <LogoLowerLeaf className="absolute lowerLeaf lowerLeaf-transform-animation" />
          </a>
        </div>
      </a>
      <CVButton />
      <div
        className={classNames(
          "wrapper text-white bg-[--green-shadow]",
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
