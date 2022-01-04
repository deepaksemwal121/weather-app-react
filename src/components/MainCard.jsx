import React from "react";
import "./maincard.scss";
import { BsWind } from "react-icons/bs";
import { WiSunrise, WiSunset, WiHumidity } from "react-icons/wi";
import moment from "moment";
import { Link } from "react-router-dom";

const MainCard = ({ data }) => {
  if (data.coord) {
    return (
      <div className="main__card">
        <div className="weather__img">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt=""
            height={400}
          />
          <div className="header__nav">
            <ul className="nav_list">
              <li className="nav__items">
                <Link style={{ textDecoration: "none" }} to="/hourly">
                  Hourly Forcaste
                </Link>
              </li>
              <li className="nav__items">
                <Link style={{ textDecoration: "none" }} to="/forcast">
                  5 Day Forcast
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="weather__data">
          <div className="city__data">
            <h2 className="city__name">{data.name}</h2>
            <h3>
              <span>Long: </span> {data.coord.lon},<span> Lat: </span>
              {data.coord.lat}
            </h3>
            <div className="sun__time">
              <div className="sun__rise">
                <WiSunrise size={40} />
                {moment(data.sys.sunrise).format("hh:mm A")}
              </div>
              <div className="sun__set">
                <WiSunset size={40} />
                {moment(data.sys.sunset).format("hh:mm A")}
              </div>
            </div>
            <p className="humidity">
              <WiHumidity size={40} />{" "}
              <span>{data.main.humidity}% Humidity</span>
            </p>
            <p className="windspeed">
              <BsWind size={38} /> <span> {data.wind.speed} Km/hr</span>
            </p>
          </div>
          <div className="current__data">
            <h2 className="temperature">{data.main.temp} &deg;C</h2>
            <h3 className="main__weather">{data.weather[0].main}</h3>
            <p>{moment(Date.now()).format("Do MMMM, dddd")}</p>
            <p className="description">{data.weather[0].description}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="loader">
      <h3>Loading Data...</h3>
    </div>
  );
};

export default MainCard;
