import Box from "@mui/material/Box";
import React from "react";
import ReactDOM from "react-dom";
import { TailSpin } from "react-loader-spinner";
import "../assets/css/Loader.min.css";

const Loader = () => {
  return ReactDOM.createPortal(
    <Box className="loader">
      <TailSpin color="#aaa" height={110} width={110} />
    </Box>,
    document.getElementById("loader-container")
  );
};

export default Loader;
