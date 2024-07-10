import ImgBody from "assets/profile/profile-body.jpg";
import ImgPortrait from "assets/profile/profile-portrait.jpg";
import ImgStyle from "assets/profile/profile-style.jpg";
import "./AboutMe.scss";
import { useState } from "react";
import classNames from "classnames";

export default function AboutMe() {
  const [spotlightImg, setSpotLightImage] = useState(true);
  return (
    <>
      <h2 className="titleSection">About me</h2>
      <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
        <div className="flex flex-col gap-2 md:gap-2.5">
          <p>
            “Xin chào”! I am Tram and <span className="text-[--lightest-slate]">I love creating software in the sweet spot where great design meets solid engineering</span> — making things that not only look good but also work flawlessly.
          </p>
          <p className="hidden md:block">
            Back in 2008, I spent a summer time helping my family manage our internet shop and discovered my passion for technology despite facing stereotypes about girls in the technology industry, I pursued my dream of becoming a game programmer.
          </p>
          <p>
            Today, with <span className="text-[--lightest-slate]">over 2 years of experience</span> as a Frontend Developer, I've <span className="text-[--lightest-slate]">worked across diverse industries</span> including transportation, insurance, and fashion. Moreover, <span className="text-[--lightest-slate]">effective communication</span> has been key to my success, honed through collaborations with colleagues from Denmark, Poland, the Czech Republic, and England.
          </p>
          <p>This journey with global experience has equipped me with valuable insights into different sector needs, to achieve outstanding outcomes through seamless collaboration.</p>
        </div>

        <div className="demo flex">
          <div
            className="profileImage d-1 relative bg-center bg-cover rounded-sm h-40 md:h-[600px] lg:h-[300px] min-w-[210px] cursor-pointer"
            style={{
              backgroundImage: `url(${ImgStyle})`,
              backgroundSize: "cover",
            }}
            onMouseEnter={() => setSpotLightImage(false)}
            onMouseLeave={() => setSpotLightImage(true)}
          ></div>
          <div
            className="profileImage d-2 relative bg-center bg-cover rounded-sm h-40 md:h-[600px] lg:h-[300px] min-w-[210px] cursor-pointer"
            style={{
              backgroundImage: `url(${ImgBody})`,
              backgroundSize: "cover",
            }}
            onMouseEnter={() => setSpotLightImage(false)}
            onMouseLeave={() => setSpotLightImage(true)}
          ></div>
          <div
            className={classNames(
              "profileImage d-3 relative bg-center bg-cover rounded-sm h-40 md:h-[600px] lg:h-[300px] min-w-[210px] cursor-pointer",
              spotlightImg && "spotlight-img"
            )}
            style={{
              backgroundImage: `url(${ImgPortrait})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
