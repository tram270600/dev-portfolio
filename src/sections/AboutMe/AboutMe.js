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
            Hello! My name is Dat. I was born in 1998 in Nha Trang City, a
            stunning beach. I studied and graduated with a software engineering
            major in Ho Chi Minh City University of Science in 2020.
          </p>
          <p>
            I have three years of experience in front-end development. I am
            confident that I have deep knowledge of necessary languages and
            technologies for Front-end.
          </p>
          <p>
            I&apos;m willing to learn new things, and not afraid of complex
            tasks. I always try to read and stay up to date with the latest
            technology news.
          </p>
          <button className="text-left">More about me</button>
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
