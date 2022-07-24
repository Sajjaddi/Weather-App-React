import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DateDetail from "./DateDetail";
import WeatherContext from "../store/weather-context";

const WeatherInfo = () => {
  const weatherCtx = useContext(WeatherContext);

  return (
    weatherCtx.items && (
      <Stack
        color={"#fff"}
        sx={{
          flexDirection: { md: "row" },
          textAlign: "center",
          position: { md: "fixed" },
          bottom: { md: "50px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "70px", md: "95px" },
            ml: { xs: "30px", md: "0" },
          }}
          fontWeight="bold"
          fontFamily={"Trebuchet MS"}
        >
          {weatherCtx.items.main.temp}°
        </Typography>
        <Stack justifyContent={"center"}>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "48px" },
              mb: { xs: "20px", md: "0" },
            }}
            variant="h3"
            fontWeight={"bold"}
          >
            {weatherCtx.items.name}
          </Typography>
          <DateDetail />
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "row", md: "column" },
            justifyContent: { xs: "center", md: "" },
            alignItems: { xs: "center", md: "" },
            margin: { xs: "", md: "10px 0 0 16px" },
          }}
        >
          <img
            src={`http://openweathermap.org/img/wn/${weatherCtx.items.main.icon}.png`}
            alt={weatherCtx.items.name}
          />
          <Typography>{weatherCtx.items.main.main}</Typography>
        </Stack>
      </Stack>
    )
  );
};

export default WeatherInfo;
