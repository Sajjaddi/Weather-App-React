import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WeatherInfo from "./WeatherInfo";

const LeftSide = () => {
  return (
    <Stack
      width={"65%"}
      sx={{
        width: { xs: "100%", md: " 65%" },
        p: { xs: "30px 20px", md: "110px 80px" },
      }}
    >
      <Typography
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
        variant="h1"
        fontWeight={"bold"}
        letterSpacing={0.8}
        fontSize={15}
        color="#fff"
      >
        the.weather.app
      </Typography>
      <WeatherInfo />
    </Stack>
  );
};

export default LeftSide;
