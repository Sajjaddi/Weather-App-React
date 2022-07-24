import React from "react";
import Box from "@mui/material/Box";
import image from "../assets/img/backgroundImage.jpg";

const Container = ({ children }) => {
  return (
    <>
      <Box
        className="container"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "100vw 22%",
            md: "100vw 100%",
          },
          backgroundImage: `url(${image})`,
          display: { md: "flex" },
          width: "100%",
          height: "0",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Container;
