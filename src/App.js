import "./App.scss";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ForcastCard from "./components/ForcastCard";
import HourlyCard from "./components/HourlyCard";

function App() {
  const [input, setInput] = useState("dehradun");
  const [data, setData] = useState([]);
  const [forcast, setForcast] = useState([]);

  useEffect(() => {
    searchCityData();
    forCastDay();
  }, []);

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

  const forCastDay = () => {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/forecast?q=${input.toLowerCase()}&appid=b42c90d277fadf665712d2b024a786e1`
      )
      .then((response) => {
        console.log(response.data);
        setForcast(response.data);
      });
  };
  return (
    <div className="App">
      <Header setInput={setInput} searchCityData={searchCityData} />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainCard data={data} />
          </Route>
          <Route path="/forcast">
            <ForcastCard forcast={forcast} />
          </Route>
          <Route path="/hourly">
            <HourlyCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
