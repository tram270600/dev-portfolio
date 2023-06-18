import React from "react";
import { useEffect } from "react";
import fullpage from "fullpage.js";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Banner from "components/Banner/Banner.js";
import AboutMe from "components/AboutMe/AboutMe.js";
import Experience from "components/Experience/Experience.js";
import MyBlog from "components/MyBlog/MyBlog";
import MySkill from "components/MySkill/MySkill";
import ContactMethod from "components/ContactMethod/ContactMethod";
import ContactMethodFooter from "components/ContactMethod/ContactMethodFooter";
import RotateSquare from "components/RotateSquare/RotateSquare";
import "./Landing.scss";

const SectionWrapper = ({ id, children }) => {
  return (
    <section id={id} className="vertical-scrolling">
      <div className="h-screen flex flex-col items-start justify-center">
        {children}
      </div>
    </section>
  );
};

export default function Landing() {
  useEffect(() => {
    new fullpage("#fullpage", {
      licenseKey: "gplv3-license",
      sectionSelector: ".vertical-scrolling",
      navigation: true,
      parallax: true,
      anchors: [
        "Greeting",
        "About",
        "Experience",
        "Works",
        "Skills",
        "Contact",
      ],
      scrollingSpeed: 700,
    });
  }, []);
  return (
    <>
      <Navbar transparent />
      <ContactMethod />
      <main
        id="fullpage"
        className="px-6 md:px-20 lg:px-[200px] 2xl:px-[350px] text-[--slate]"
      >
        <section className="vertical-scrolling">
          <RotateSquare />
          <Banner />
        </section>
        <SectionWrapper>
          <AboutMe />
        </SectionWrapper>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <MyBlog />
        </SectionWrapper>
        <SectionWrapper>
          <MySkill />
        </SectionWrapper>

        <section className="vertical-scrolling pb-8">
          <ContactMethodFooter />

          <Footer />
        </section>
      </main>
    </>
  );
}
