import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../store/weather-context";
import axios from "axios";
import Clock from "react-live-clock";
import Typography from "@mui/material/Typography";

const Time = () => {
  const [timeZone, setTimeZone] = useState("Asia/Tehran");
  const weatherCtx = useContext(WeatherContext);

  const fetchTimeZone = async () => {
    if (weatherCtx.items.name === "Rasht") {
      setTimeZone("Asia/Tehran");
    } else {
      const response = await axios.request(
        `https://api.ipgeolocation.io/timezone?apiKey=${process.env.REACT_APP_IP_GEOLOCATION_KEY}&location=${weatherCtx.items.name}`
      );
      const newTimeZone = response.data.timezone;
      setTimeZone(newTimeZone);
    }
  };

  useEffect(() => {
    fetchTimeZone();
  }, [weatherCtx.items]);

  return (
    <Typography fontSize={14} variant="span" mr={0.5}>
      <Clock format={"HH:mm"} ticking={true} timezone={timeZone} /> -
    </Typography>
  );
};

export default Time;
