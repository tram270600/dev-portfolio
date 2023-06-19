import React from "react";
import { useEffect } from "react";
import fullpage from "fullpage.js";
import Navbar from "sections/Navbar/Navbar.js";
import Footer from "sections/Footer/Footer.js";
import Banner from "sections/Banner/Banner.js";
import AboutMe from "sections/AboutMe/AboutMe.js";
import Experience from "sections/Experience/Experience.js";
import MyBlog from "sections/MyBlog/MyBlog";
import MySkill from "sections/MySkill/MySkill";
import ContactMethod from "sections/ContactMethod/ContactMethod";
import RotateSquare from "components/RotateSquare/RotateSquare";
import GlowingMouse from "components/GlowingMouse/GlowingMouse";
import { AnchorDataList } from "utils";
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
      anchors: AnchorDataList,
      scrollingSpeed: 700,
    });
  }, []);
  return (
    <div className="container">
      <GlowingMouse />
      <Navbar />
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

        <section className="vertical-scrolling pb-24">
          <Footer />
        </section>
      </main>
    </div>
  );
}
