import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import WeatherContext from "../store/weather-context";
import DetailItem from "../components/DetailItem";

const WeatherDetails = () => {
  const weatherCtx = useContext(WeatherContext);
  return (
    <Box
      mb={"45px"}
      height={360}
      color={"#ccc"}
      sx={{
        paddingBottom: "100px",
        borderBottom: {
          xs: "2px solid #777",
          lg: "2px solid rgb(129, 129, 129)",
        },
      }}
    >
      <Typography
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
        fontSize={17}
        mb={6}
        color={"#fff"}
      >
        Weather Details
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
          title="Cloudy"
          detail={`${weatherCtx.items.details.clouds}%`}
        />
        <DetailItem
          title="Humidity"
          detail={`${weatherCtx.items.details.humidity}%`}
        />
        <DetailItem
          title="Wind"
          detail={`${weatherCtx.items.details.wind}km/h`}
        />
        <DetailItem
          title="Sunrise"
          detail={`${weatherCtx.items.details.sunrise}`}
        />
        <DetailItem
          title="Sunset"
          detail={`${weatherCtx.items.details.sunset}`}
        />
      </ul>
    </Box>
  );
};

export default WeatherDetails;
