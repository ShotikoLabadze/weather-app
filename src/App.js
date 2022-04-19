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
      <div className="location">
        <p>London</p>
      </div>
      <div className="temp">
        <h1>60F</h1>
      </div>
      <div className="description">
        <p>Clouds</p>
      </div>
      <div className="feels">
        <p>65F</p>
      </div>
      <div className="humidity">
        <p>20%</p>
      </div>
    </div>
  );
}

export default App;
