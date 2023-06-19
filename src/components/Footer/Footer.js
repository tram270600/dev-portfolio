import React, { useMemo } from "react";
import "./Footer.scss";
import Button from "components/Button/Button";
import ContactMethodFooter from "components/ContactMethod/ContactMethodFooter";
import { useEffect, useState } from "react";

const ONE_MINUTE = 1000 * 60;

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    })
  );
  const [weatherData, setWeatherData] = useState(null);
  const date = useMemo(() => new Date(currentTime), [currentTime]);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const personalInfo = {
    address: "District 8, HCM City, Vietnam",
    phone: "(+84) 34 324 46 44",
    email: "nguyenquocdat2511998@gmail.com",
  };

  const timeString = useMemo(() => {
    let rs = "";
    if (hours === 0) {
      rs += "12";
    } else if (hours > 12) {
      rs += hours - 12;
    } else {
      rs += hours;
    }
    rs += ":" + (minutes < 10 ? "0" : "") + minutes;
    rs += " " + (hours < 12 ? "AM" : "PM");

    return rs;
  }, [hours, minutes]);

  useEffect(() => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Vietnam&units=metric&appid=7d6488f171786a9b72ec528855be74c6`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
        })
      );
    }, ONE_MINUTE);

    // cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer className="pt-16 pb-4 lg:pt-0 lg:pb-4 h-screen flex flex-col items-start justify-around">
      <hr className="horizontal-line" />
      <div>
        <div className="section">
          <div className="timeLocation">
            <div>It&apos;s {timeString} </div>
            {weatherData && (
              <div className="weatherLocation">
                {weatherData.weather[0].description} & {weatherData.main.temp}
                &deg;C
              </div>
            )}
            in Vietnam
          </div>
          <div className="summaryInfo">
            <h3>Let&apos;s make something great together</h3>
            <div className="summaryInfoSection">
              <div className="summaryInfoSection__header">Contact Info</div>
              <div className="summaryInfoSection__content">
                <p data-length-info={personalInfo.address}>
                  {personalInfo.address}
                </p>
                <p data-length-info={personalInfo.phone}>
                  {personalInfo.phone}
                </p>
                <p data-length-info={personalInfo.email}>
                  {personalInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <Button textBtn="Download my CV" colorBtn="green"></Button>
          <div>
            © {new Date().getFullYear()}, designed and built by{" "}
            <a className="about-me" href="#About">
              Datnguyen
            </a>
          </div>
        </div>
      </div>
      <ContactMethodFooter />
    </footer>
  );
}
