import { useState } from "react";
import Temperature from "./Temperature";

import "./App.css";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import SunInfo from "./SunInfo";
import Wind from "./Wind";
import Description from "./Description";

function App() {
  const [cityName, setCityName] = useState("");
  const [mainContentDisplay, setMainContentDisplay] = useState("hidden");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [weatherCard, setWeatherCard] = useState("default-image");

  function convertUnixTimestamp(timestamp) {
    // Создание объекта Date, используя timestamp (в миллисекундах)
    var date = new Date(timestamp * 1000);

    // Получение компонентов времени: часы, минуты и секунды
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    // var seconds = "0" + date.getSeconds();

    // Форматирование времени
    var formattedTime = hours + ":" + minutes.substr(-2);

    return formattedTime;
  }

  function addInfoInInput(data) {
    setTemperature(Math.round(data.main.temp));
    setDescription(data.weather[0].main);
    setWind(data.wind.speed);
    setHumidity(data.main.humidity + " %");
    setPressure(Math.round(data.main.pressure * 0.750062) + " mm/Hg");
    let sunriseTime = data.sys.sunrise;
    setSunrise(convertUnixTimestamp(sunriseTime));
    let sunsetTime = data.sys.sunset;
    setSunset(convertUnixTimestamp(sunsetTime));

    console.log(data.weather[0].main);
    setWeatherCard(`${data.weather[0].main}`);
    console.log(setWeatherCard(data.weather[0].main));

    // switch (weatherCard) {
    //   case "Clouds":
    //     setWeatherCard("clouds");
    //     break;
    //   case "Clear":
    //     setWeatherCard("clear");
    //     break;

    //   case "Snow":
    //     setWeatherCard("snow");
    //     break;

    //   case "Rain":
    //     setWeatherCard("rain");
    //     break;

    //   default:
    //     setWeatherCard("default-image");
    // }
  }

  function getWeatherInfo(event) {
    event.preventDefault();
    setMainContentDisplay("display-weather");
    setCityName("");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=8698a1225dd8dbde8eb62a37a25c278e`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        addInfoInInput(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Wrong city name");
      });
  }

  return (
    <div className={`root ${weatherCard}`}>
      <div className="container">
        <div className="city-input">
          <form className="city-input">
            <input
              placeholder="Enter Location"
              onChange={(e) => setCityName(e.target.value)}
              type="text"
              className="city-value"
              value={cityName}
              onSubmit={getWeatherInfo}
            />
            <button onClick={getWeatherInfo} className="button">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        <div className={mainContentDisplay}>
          <Temperature temperature={temperature} />
          <Pressure pressure={pressure} />
          <Humidity humidity={humidity} />
          <Description description={description} />
          <Wind windSpeed={wind} />
          <SunInfo sunrise={sunrise} sunset={sunset} />
        </div>
      </div>
    </div>
  );
}

export default App;
