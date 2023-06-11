import React from "react";
import Navbar from "components/Navbar.js";
import Banner from "components/Banner/Banner.js";
import AboutMe from "components/AboutMe/AboutMe.js";
import Experience from "components/Experience/Experience.js";
import MyBlog from "components/MyBlog/MyBlog";
import MySkill from "components/MySkill/MySkill";
import ScrollIndicator from "components/ScrollIndicator/ScrollIndicator";
import ContactMethod from "components/ContactMethod/ContactMethod";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <ScrollIndicator> </ScrollIndicator>
      <ContactMethod></ContactMethod>
      <main className="bg-[--navy] px-48 text-[--slate]">
        <Banner />
        <AboutMe />
        <Experience />
        <MyBlog />
        <MySkill />
      </main>
    </>
  );
}
