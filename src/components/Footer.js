import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="#333">
      <Typography color={"#eee"} variant="body1" p={2} textAlign={"center"}>
        Made with &nbsp;♥&nbsp; by &nbsp;Sajjad Jahani
      </Typography>
    </Box>
  );
};

export default Footer;
