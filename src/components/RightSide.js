import Box from "@mui/material/Box";
import React, { useContext, useRef, useState } from "react";
import SearchIcon from "./SearchIcon";
import SearchBar from "./SearchBar";
import TopCities from "./TopCities";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import timestampToCurrectTime from "../utils/timestampToCurrectTime";
import WeatherContext from "../store/weather-context";
import Loader from "./Loader";
import NextHoursWeather from "./NextHoursWeather";

const RightSide = () => {
  const searchInputRef = useRef();
  const weatherCtx = useContext(WeatherContext);

  const fetchNewData = async (cityName = searchInputRef.current.value) => {
    weatherCtx.changeStatus({ isLoading: true });
    const value = cityName;
    if (value.trim().length) {
      const urlWeatherDetail = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
      const urlWeatherHours = `https://api.openweathermap.org/data/2.5/forecast?cnt=5&q=${value}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
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
          console.log(1);
          weatherCtx.changeStatus({
            isAlert: true,
            statusFetch: false,
            isLoading: false,
          });
        });
      searchInputRef.current.value = "";
    }
  };

  return (
    <>
      {weatherCtx.status.isLoading && <Loader />}
      <Box
        position={"relative"}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.50)",
          backdropFilter: "blur(20px)",
          width: { xs: "100%", md: "35%" },
          p: "50px 50px",
        }}
      >
        <SearchIcon fetchNewData={fetchNewData} />
        <SearchBar ref={searchInputRef} fetchNewData={fetchNewData} />
        <TopCities fetchNewData={fetchNewData} />
        <WeatherDetails />
        <NextHoursWeather />
      </Box>
    </>
  );
};

export default RightSide;
