import React from "react";
import { useEffect } from "react";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Banner from "components/Banner/Banner.js";
import AboutMe from "components/AboutMe/AboutMe.js";
import Experience from "components/Experience/Experience.js";
import MyBlog from "components/MyBlog/MyBlog";
import MySkill from "components/MySkill/MySkill";
import ScrollIndicator from "components/ScrollIndicator/ScrollIndicator";
import ContactMethod from "components/ContactMethod/ContactMethod";
import fullpage from "fullpage.js";
import "./Landing.scss";

export default function Landing() {
  useEffect(() => {
    new fullpage("#fullpage", {
      sectionSelector: ".vertical-scrolling",
      navigation: true,
      parallax: true,
      anchors: [
        "00.Greeting",
        "01.About",
        "02.Experience",
        "03.Works",
        "04.Skills",
        "05.Contact",
      ],
      scrollingSpeed: 700,
    });
  }, []);
  return (
    <>
      <Navbar transparent />
      {/* <ScrollIndicator> </ScrollIndicator> */}
      <ContactMethod></ContactMethod>
      <main id="fullpage" className="bg-[--navy] px-[150px] text-[--slate]">
        <section
          id="Greeting"
          className="vertical-scrolling"
          data-anchor="Greeting"
        >
          <Banner />
        </section>
        <section id="About" className="vertical-scrolling">
          <AboutMe />
        </section>
        <section id="Experience" className="vertical-scrolling">
          <Experience />
        </section>
        <section id="Works" className="vertical-scrolling">
          <MyBlog />
        </section>
        <section id="Skills" className="vertical-scrolling">
          <MySkill />
        </section>
        <section id="Contact" className="vertical-scrolling">
          <Footer />
        </section>
      </main>
    </>
  );
}
