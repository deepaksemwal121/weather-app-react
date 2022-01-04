import "./App.scss";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("dehradun");
  const [data, setData] = useState([]);
  // const [forcast, setForcast] = useState([]);

  useEffect(() => {
    searchCityData();
  });

  // const forCastDay = () => {
  //   axios
  //     .post(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${input.toLowerCase()}&appid=b42c90d277fadf665712d2b024a786e1`
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setForcast(response.data);
  //     });
  // };
  const searchCityData = () => {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.toLowerCase()}&appid=b42c90d277fadf665712d2b024a786e1&units=metric`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };
  return (
    <div className="App">
      <Header setInput={setInput} searchCityData={searchCityData} />
      <MainCard data={data} />
    </div>
  );
}

export default App;
