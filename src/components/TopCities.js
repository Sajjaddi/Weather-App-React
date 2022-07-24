import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const TopCities = ({ fetchNewData }) => {
  return (
    <Box
      height={220}
      sx={{
        margin: "45px 0",
        paddingBottom: "20px",
        borderBottom: {
          xs: "2px solid #777",
          lg: "2px solid rgb(129, 129, 129)",
        },
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Typography
            sx={{ cursor: "pointer", width: "auto" }}
            onClick={(e) => fetchNewData("Tehran")}
            variant="span"
            color={"#aaa"}
          >
            Tehran
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={(e) => fetchNewData("Rasht, IR")}
            variant="span"
            color={"#aaa"}
          >
            Rasht
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={(e) => fetchNewData("Tabriz")}
            variant="span"
            color={"#aaa"}
          >
            Tabriz
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={(e) => fetchNewData("Shiraz")}
            variant="span"
            color={"#aaa"}
          >
            Shiraz
          </Typography>
        </li>
      </ul>
    </Box>
  );
};

export default TopCities;
