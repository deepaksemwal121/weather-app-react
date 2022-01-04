import React from "react";
import "./header.scss";
import { BiSearch } from "react-icons/bi";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const Header = ({ setInput, searchCityData }) => {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <h3>Weather App</h3>
        <TiWeatherWindyCloudy size={30} />
      </div>
      <div className="search__wrapper">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="city"
          id="cityName"
          placeholder="Enter City Name"
        />
        <button onClick={searchCityData} type="submit">
          <BiSearch size={18} />
        </button>
      </div>
      <div className="version__value">Version 1.0</div>
    </div>
  );
};

export default Header;
