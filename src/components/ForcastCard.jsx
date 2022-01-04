import moment from "moment";
import React from "react";
import "./forcastcard.scss";

const ForcastCard = ({ forcast }) => {
  if (forcast.cod) {
    return (
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
        </div>
        <div className="card__three">
          <div className="day__name">
            {moment(forcast.list[16].dt_txt).calendar()}
          </div>
        </div>
        <div className="card__four">
          <div className="day__name">
            {moment(forcast.list[24].dt_txt).calendar()}
          </div>
        </div>
        <div className="card__five">
          <div className="day__name">
            {moment(forcast.list[32].dt_txt).calendar()}
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
