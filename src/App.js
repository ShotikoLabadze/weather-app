import React, { useState } from "react";
import axios from "axios";
import classes from "./App.module.css";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.search}>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.location}>
            <p>{data.name}</p>
          </div>
          <div className={classes.temp}>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className={classes.bottom}>
            <div>
              {data.main ? (
                <p className={classes.bold}>
                  {data.main.feels_like.toFixed()}°F
                </p>
              ) : null}
              <p>Feels Like</p>
            </div>

            <div>
              {data.main ? (
                <p className={classes.bold}>{data.main.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>

            <div>
              {data.wind ? (
                <p className={classes.bold}>{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
