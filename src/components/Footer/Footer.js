import React from "react";
import "./Footer.scss";
import Button from "components/Button/Button";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh",
    })
  );
  const [weatherData, setWeatherData] = useState(null);
  const date = new Date(currentTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let timeString = "";
  if (hours === 0) {
    timeString += "12";
  } else if (hours > 12) {
    timeString += hours - 12;
  } else {
    timeString += hours;
  }
  timeString += ":" + (minutes < 10 ? "0" : "") + minutes;
  timeString += " " + (hours < 12 ? "AM" : "PM");

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
    }, 1000 * 60); // updates every minute

    // cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer className="h-screen flex flex-col justify-start items-start pt-24">
      <div>
        <hr className="horizontal-line" />
        <div className="section">
          <div className="timeLocation">
            <div>It's {timeString} </div>
            {weatherData && (
              <div className="weatherLocation">
                {" "}
                {weatherData.weather[0].description} & {weatherData.main.temp}
                &deg;C
              </div>
            )}
            in Vietnam
          </div>
          <div className="summaryInfo">
            <h3>Let's make something great together</h3>
            <div className="summaryInfoSection">
              <div className="summaryInfoSection__header">Contact Info</div>
              <div className="summaryInfoSection__content">
                <p length-info="District 8, HCM City, Vietnam">
                  {" "}
                  District 8, HCM City, Vietnam
                </p>
                <p length-info="(+84) 34 324 46 44">(+84) 34 324 46 44</p>
                <p length-info="nguyenquocdat2511998@gmail.com">
                  nguyenquocdat2511998@gmail.com
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
    </footer>
  );
}
