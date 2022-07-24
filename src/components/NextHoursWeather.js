import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DetailItem from "./DetailItem";
import WeatherContext from "../store/weather-context";

const NextHoursWeather = () => {
  const weatherCtx = useContext(WeatherContext);
  const hours = weatherCtx.items.hours;
  return (
    <Box
      height={330}
      color={"#ccc"}
      sx={{
        paddingBottom: "50px",
      }}
    >
      <Typography
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
        color={"#fff"}
        fontSize={17}
        mb={6}
      >
        Next Hours
      </Typography>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <DetailItem
          sx={{ fontSize: "17px", marginBottom: "15px" }}
          title={`Time`}
          detail={`Temp`}
        />
        <DetailItem title={`${hours[0].time}`} detail={`${hours[0].temp}°C`} />
        <DetailItem title={`${hours[1].time}`} detail={`${hours[1].temp}°C`} />
        <DetailItem title={`${hours[2].time}`} detail={`${hours[2].temp}°C`} />
        <DetailItem title={`${hours[3].time}`} detail={`${hours[3].temp}°C`} />
        <DetailItem title={`${hours[4].time}`} detail={`${hours[4].temp}°C`} />
      </ul>
    </Box>
  );
};

export default NextHoursWeather;
