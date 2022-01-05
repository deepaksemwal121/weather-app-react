import moment from "moment";
import React, { useEffect, useState } from "react";
import "./forcastcard.scss";
import axios from "axios";

const ForcastCard = ({ inputData }) => {
  const [forcast, setForcast] = useState([]);
  useEffect(() => {
    forCastDay();
  }, []);

  const forCastDay = () => {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputData.toLowerCase()}&appid=a571a22837538f854e63cc3ba294b004&units=metric`
      )
      .then((response) => {
        console.log(response.data);
        setForcast(response.data);
      });
  };
  if (forcast.cod) {
    return (
      <div>
        <h2 className="city__name">5 Days Forcast for {forcast.city.name}</h2>
        <div className="forcast__main">
          <div className="card__one">
            <div className="day__name">
              {moment(forcast.list[0].dt_txt).calendar()}
            </div>
            <div className="weather__icon">
              <img
                src={`http://openweathermap.org/img/wn/${forcast.list[0].weather[0].icon}@4x.png`}
                alt=""
              />
              <h3>{forcast.list[0].weather[0].main}</h3>
            </div>
            <div className="weather__data">
              <p>{forcast.list[0].weather[0].description}</p>
            </div>
          </div>
          <div className="card__two">
            <div className="day__name">
              {moment(forcast.list[8].dt_txt).calendar()}
            </div>
            <div className="weather__icon">
              <img
                src={`http://openweathermap.org/img/wn/${forcast.list[8].weather[0].icon}@4x.png`}
                alt=""
              />
              <h3>{forcast.list[8].weather[0].main}</h3>
            </div>
            <div className="weather__data">
              <p>{forcast.list[8].weather[0].description}</p>
            </div>
          </div>
          <div className="card__three">
            <div className="day__name">
              {moment(forcast.list[16].dt_txt).calendar()}
            </div>
            <div className="weather__icon">
              <img
                src={`http://openweathermap.org/img/wn/${forcast.list[16].weather[0].icon}@4x.png`}
                alt=""
              />
              <h3>{forcast.list[16].weather[0].main}</h3>
            </div>
            <div className="weather__data">
              <p>{forcast.list[16].weather[0].description}</p>
            </div>
          </div>
          <div className="card__four">
            <div className="day__name">
              {moment(forcast.list[24].dt_txt).calendar()}
            </div>
            <div className="weather__icon">
              <img
                src={`http://openweathermap.org/img/wn/${forcast.list[24].weather[0].icon}@4x.png`}
                alt=""
              />
              <h3>{forcast.list[24].weather[0].main}</h3>
            </div>
            <div className="weather__data">
              <p>{forcast.list[24].weather[0].description}</p>
            </div>
          </div>
          <div className="card__five">
            <div className="day__name">
              {moment(forcast.list[32].dt_txt).calendar()}
            </div>
            <div className="weather__icon">
              <img
                src={`http://openweathermap.org/img/wn/${forcast.list[32].weather[0].icon}@4x.png`}
                alt=""
              />
              <h3>{forcast.list[32].weather[0].main}</h3>
            </div>
            <div className="weather__data">
              <p>{forcast.list[32].weather[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Data is not Available or Something went Wrong</h3>
      </div>
    );
  }
};

export default ForcastCard;
