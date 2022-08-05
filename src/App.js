import React, { useContext, useEffect } from "react";
import Container from "./components/Container";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import WeatherContext from "./store/weather-context";
import timestampToCurrectTime from "./utils/timestampToCurrectTime";
import Loader from "./components/Loader";
import AlertBox from "./components/AlertBox";
import axios from "axios";
import Footer from "./components/Footer";

const urlWeatherDetail = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
const urlWeatherHours = `https://api.openweathermap.org/data/2.5/forecast?cnt=5&q=tehran&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;

const App = () => {
  const weatherCtx = useContext(WeatherContext);

  const fetchingData = async () => {
    const requestOne = axios.get(urlWeatherDetail);
    const requestTwo = axios.get(urlWeatherHours);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data.list;
          weatherCtx.fetchItems({
            name: responseOne.name,
            hours: [
              {
                time: timestampToCurrectTime(responseTwo[0].dt),
                temp: (responseTwo[0].main.temp - 273.15).toFixed(0),
              },
              {
                time: timestampToCurrectTime(responseTwo[1].dt),
                temp: (responseTwo[1].main.temp - 273.15).toFixed(0),
              },
              {
                time: timestampToCurrectTime(responseTwo[2].dt),
                temp: (responseTwo[2].main.temp - 273.15).toFixed(0),
              },
              {
                time: timestampToCurrectTime(responseTwo[3].dt),
                temp: (responseTwo[3].main.temp - 273.15).toFixed(0),
              },
              {
                time: timestampToCurrectTime(responseTwo[4].dt),
                temp: (responseTwo[4].main.temp - 273.15).toFixed(0),
              },
            ],
            main: {
              main: responseOne.weather[0].main,
              icon: responseOne.weather[0].icon,
              temp: (responseOne.main.temp - 273.15).toFixed(0),
            },
            details: {
              clouds: responseOne.clouds.all,
              humidity: responseOne.main.humidity,
              wind: responseOne.wind.speed,
              sunrise: timestampToCurrectTime(responseOne.sys.sunrise),
              sunset: timestampToCurrectTime(responseOne.sys.sunset),
            },
          });
          weatherCtx.changeStatus({ statusFetch: true, isLoading: false });
        })
      )
      .catch(() => {
        weatherCtx.changeStatus({ statusFetch: false, isLoading: false });
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    weatherCtx.changeStatus({ isAlert: true });
  }, [weatherCtx.items]);

  return (
    <>
      {weatherCtx.status.isLoading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {console.log(weatherCtx.status.isAlert)}
            {weatherCtx.status.isAlert ? <AlertBox /> : null}
            <LeftSide />
            <RightSide />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
