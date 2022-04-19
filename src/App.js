import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ded62d4d9a8908691f77b123a621838c
  `;

  const search = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={search}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="weather-container">
        <div className="top-part">
          {data.main ? <h1>{data.main.temp}°F</h1> : null}
          <div className="temp-low-high">
            {data.weather ? <h1>{data.weather.description}</h1> : null}
            {data.main ? <h1>{data.main.temp_max}°F</h1> : null}
            {data.main ? <h1>{data.main.temp_min}°F</h1> : null}
          </div>
        </div>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
}

export default App;
